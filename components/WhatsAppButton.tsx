import { site } from "@/lib/content";

const WHATSAPP_NUMBER = site.whatsapp;
const PREFILL = "Hi SvaraCall AI, I'd like to talk about a pilot.";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.72a12.73 12.73 0 0 0 6.25 1.6h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.64Zm0 23.28h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SvaraCall AI on WhatsApp"
        className="wa-bubble relative hidden items-center gap-2 rounded-2xl bg-canvas px-4 py-2.5 shadow-lg ring-1 ring-black/5 sm:inline-flex"
      >
        <WhatsAppGlyph className="h-5 w-5 text-[#25D366]" />
        <span className="whitespace-nowrap text-sm font-semibold text-ink">
          Chat on WhatsApp
        </span>
        <span
          aria-hidden="true"
          className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-canvas"
        />
      </a>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SvaraCall AI on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-pill bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <WhatsAppGlyph className="relative h-7 w-7" />
      </a>
    </div>
  );
}
