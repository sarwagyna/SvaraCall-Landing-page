"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";

export default function HeroEyebrow() {
  return (
    <p className="eyebrow">
      <EncryptedText
        text="Outbound voice AI for Indian businesses"
        encryptedClassName="text-white/60"
        revealedClassName="text-white/85"
        revealDelayMs={50}
      />
    </p>
  );
}
