import Link from "next/link";
import Reveal from "@/components/Reveal";
import FlowingMenu from "@/components/FlowingMenu";
import { languageMenuItems } from "@/lib/languages";

type LanguageBandProps = {
  title: string;
  body: string;
};

export default function LanguageBand({ title, body }: LanguageBandProps) {
  return (
    <section className="bg-[#0b1110]">
      <div className="mx-auto max-w-3xl px-5 pt-16 text-center md:pt-24">
        <Reveal>
          <h2 className="display display-h2 text-white">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">{body}</p>
        </Reveal>
      </div>

      <div className="relative mt-12 h-[min(70vh,640px)] w-full">
        <FlowingMenu
          items={[...languageMenuItems]}
          speed={12}
          textColor="#f2f7f0"
          bgColor="#0b1110"
          marqueeBgColor="#9fe870"
          marqueeTextColor="#09100b"
          borderColor="rgba(242, 247, 240, 0.12)"
        />
      </div>

      <p className="px-5 py-10 text-center">
        <Link
          href="/languages"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Explore all languages →
        </Link>
      </p>
    </section>
  );
}
