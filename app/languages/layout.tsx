import {
  Noto_Sans_Bengali,
  Noto_Sans_Devanagari,
  Noto_Sans_Gujarati,
  Noto_Sans_Gurmukhi,
  Noto_Sans_Kannada,
  Noto_Sans_Malayalam,
  Noto_Sans_Tamil,
  Noto_Sans_Telugu,
} from "next/font/google";

const notoTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoGurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-noto-gurmukhi",
  subsets: ["gurmukhi"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoKannada = Noto_Sans_Kannada({
  variable: "--font-noto-kannada",
  subsets: ["kannada"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoMalayalam = Noto_Sans_Malayalam({
  variable: "--font-noto-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const notoGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

export default function LanguagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        notoTelugu.variable,
        notoDevanagari.variable,
        notoGurmukhi.variable,
        notoBengali.variable,
        notoTamil.variable,
        notoKannada.variable,
        notoMalayalam.variable,
        notoGujarati.variable,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
