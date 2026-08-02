import {
  localChatReply,
  SVARACALL_CHAT_SYSTEM,
  type ChatMessage,
} from "@/lib/chat";

export const runtime = "nodejs";
export const maxDuration = 60;

type RequestBody = {
  messages?: ChatMessage[];
};

function isMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const msg = value as ChatMessage;
  return (
    (msg.role === "user" || msg.role === "assistant" || msg.role === "system") &&
    typeof msg.content === "string"
  );
}

export async function POST(request: Request) {
  let body: RequestBody;
  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages)
    ? body.messages.filter(isMessage)
    : [];
  const userMessages = incoming.filter((m) => m.role === "user");
  const lastUser = userMessages[userMessages.length - 1];

  if (!lastUser?.content?.trim()) {
    return Response.json(
      { error: "Send at least one user message." },
      { status: 400 },
    );
  }

  const apiUrl = process.env.SVARACALL_LLM_API_URL?.trim();
  const apiKey = process.env.SVARACALL_LLM_API_KEY?.trim();
  const model = process.env.SVARACALL_LLM_MODEL?.trim() || "svaracall";

  // No upstream configured yet — return deterministic local guidance so the
  // chat UI works in development while the trained model is wired up.
  if (!apiUrl) {
    return Response.json({
      reply: localChatReply(lastUser.content),
      source: "local",
    });
  }

  const payloadMessages: ChatMessage[] = [
    { role: "system", content: SVARACALL_CHAT_SYSTEM },
    ...incoming.filter((m) => m.role !== "system").slice(-12),
  ];

  try {
    const upstream = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        model,
        messages: payloadMessages,
        temperature: 0.4,
        max_tokens: 600,
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("LLM upstream error", upstream.status, detail);
      return Response.json({
        reply: localChatReply(lastUser.content),
        source: "fallback",
        warning: "Upstream LLM unavailable — showing local guidance.",
      });
    }

    const data = (await upstream.json()) as {
      choices?: { message?: { content?: string } }[];
      reply?: string;
      message?: string;
      content?: string;
    };

    const reply =
      data.choices?.[0]?.message?.content?.trim() ||
      data.reply?.trim() ||
      data.message?.trim() ||
      data.content?.trim();

    if (!reply) {
      return Response.json({
        reply: localChatReply(lastUser.content),
        source: "fallback",
      });
    }

    return Response.json({ reply, source: "llm" });
  } catch (error) {
    console.error("LLM proxy failure", error);
    return Response.json({
      reply: localChatReply(lastUser.content),
      source: "fallback",
      warning: "Could not reach the LLM API — showing local guidance.",
    });
  }
}
