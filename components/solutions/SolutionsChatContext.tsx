"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { ChatMessage } from "@/lib/chat";

type SolutionsChatContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  messages: ChatMessage[];
  busy: boolean;
  error: string | null;
  send: (text: string) => Promise<void>;
  openWithPrompt: (text: string) => void;
};

const SolutionsChatContext = createContext<SolutionsChatContextValue | null>(
  null,
);

export function SolutionsChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const busyRef = useRef(false);

  const send = useCallback(async (text: string) => {
    const content = text.trim();
    if (!content || busyRef.current) return;

    busyRef.current = true;
    let snapshot: ChatMessage[] = [];
    setMessages((prev) => {
      snapshot = [...prev, { role: "user", content }];
      return snapshot;
    });
    setBusy(true);
    setError(null);
    setOpen(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: snapshot }),
      });

      let data: {
        reply?: string;
        error?: string;
        warning?: string;
      } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        throw new Error("Chat returned an invalid response.");
      }

      if (!res.ok || !data.reply) {
        throw new Error(data.error || "Chat request failed.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
      if (data.warning) setError(data.warning);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Chat unavailable.");
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }, []);

  const openWithPrompt = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setOpen(true);
      void send(text);
    },
    [send],
  );

  const value = useMemo(
    () => ({
      open,
      setOpen,
      messages,
      busy,
      error,
      send,
      openWithPrompt,
    }),
    [open, messages, busy, error, send, openWithPrompt],
  );

  return (
    <SolutionsChatContext.Provider value={value}>
      {children}
    </SolutionsChatContext.Provider>
  );
}

export function useSolutionsChat() {
  const ctx = useContext(SolutionsChatContext);
  if (!ctx) {
    throw new Error("useSolutionsChat must be used within SolutionsChatProvider");
  }
  return ctx;
}
