"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { chatStarters } from "@/lib/chat";
import { bookPilotHref } from "@/lib/nav";
import { useSolutionsChat } from "@/components/solutions/SolutionsChatContext";

function renderAssistantText(text: string) {
  // Lightweight markdown: **bold** + newlines → paragraphs
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function SolutionsChat() {
  const { open, setOpen, messages, busy, error, send } = useSolutionsChat();
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, busy, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const submit = () => {
    const text = draft;
    setDraft("");
    void send(text);
  };

  return (
    <>
      {/* FAB — sits above WhatsApp on mobile/desktop */}
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-controls="svaracall-solutions-chat"
          className="fixed bottom-[5.75rem] right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-black/40 transition-transform hover:scale-105 hover:bg-primary-active focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink-deep sm:bottom-[6.75rem] sm:right-5"
        >
          <span className="sr-only">Open solutions chat</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8M8 14h5M5 5h14a2 2 0 012 2v9a2 2 0 01-2 2H9l-4 3v-3H5a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
        </button>
      ) : null}

      {open ? (
        <div
          id="svaracall-solutions-chat"
          role="dialog"
          aria-modal="true"
          aria-label="SvaraCall solutions assistant"
          className="fixed inset-x-0 bottom-0 z-[60] flex max-h-[min(88dvh,38rem)] flex-col rounded-t-[28px] bg-canvas-soft shadow-2xl ring-1 ring-line sm:inset-x-auto sm:bottom-5 sm:right-5 sm:h-[min(68vh,36rem)] sm:w-[min(100vw-2rem,24rem)] sm:max-h-none sm:rounded-[28px]"
        >
          <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <div>
              <p className="text-sm font-bold text-ink">SvaraCall assistant</p>
              <p className="text-xs text-mute">Trained on outbound calling workflows</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-pill px-3 py-1.5 text-xs font-semibold text-body hover:bg-canvas hover:text-ink"
            >
              Close
            </button>
          </header>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
          >
            {messages.length === 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-body">
                  Describe a calling bottleneck — I&apos;ll map a SvaraCall
                  workflow in Telugu, Hindi, or English.
                </p>
                <div className="flex flex-col gap-2">
                  {chatStarters.map((starter) => (
                    <button
                      key={starter}
                      type="button"
                      disabled={busy}
                      onClick={() => void send(starter)}
                      className="rounded-[16px] bg-canvas px-3.5 py-2.5 text-left text-sm text-ink ring-1 ring-line transition-colors hover:ring-primary/40"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] whitespace-pre-wrap rounded-[18px] px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-on-primary"
                      : "bg-canvas text-body ring-1 ring-line"
                  }`}
                >
                  {msg.role === "assistant"
                    ? renderAssistantText(msg.content)
                    : msg.content}
                </div>
              </div>
            ))}

            {busy ? (
              <p className="text-xs font-semibold text-mute" aria-live="polite">
                Thinking…
              </p>
            ) : null}
            {error ? (
              <p
                className="rounded-[12px] bg-primary-soft px-3 py-2 text-xs text-primary"
                role="status"
              >
                {error}
              </p>
            ) : null}
          </div>

          <footer className="border-t border-line px-3 py-3 sm:px-4">
            <form
              className="flex items-end gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <label htmlFor="solutions-chat-input" className="sr-only">
                Message
              </label>
              <textarea
                ref={inputRef}
                id="solutions-chat-input"
                rows={1}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                placeholder="I want to…"
                disabled={busy}
                className="max-h-28 min-h-11 flex-1 resize-none rounded-[14px] border-0 bg-canvas px-3 py-2.5 text-sm text-ink outline-none ring-1 ring-line placeholder:text-mute focus:ring-primary"
              />
              <button
                type="submit"
                disabled={busy || !draft.trim()}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-pill bg-primary px-4 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active disabled:opacity-50"
              >
                Send
              </button>
            </form>
            <p className="mt-2 text-center text-[11px] text-mute">
              Or{" "}
              <Link href={bookPilotHref} className="font-semibold text-ink-deep hover:underline">
                book a pilot
              </Link>
            </p>
          </footer>
        </div>
      ) : null}
    </>
  );
}
