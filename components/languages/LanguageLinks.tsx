import Link from "next/link";
import Reveal from "@/components/Reveal";
import { languagePages } from "@/lib/languagePages";

type LanguageLinksProps = {
  currentSlug: string;
};

export default function LanguageLinks({ currentSlug }: LanguageLinksProps) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-mute">
            Explore other languages
          </p>
        </Reveal>
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {languagePages
            .filter((page) => page.slug !== currentSlug)
            .map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/languages/${page.slug}`}
                  className="inline-flex h-10 items-center rounded-pill border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/languages"
              className="inline-flex h-10 items-center rounded-pill bg-primary-soft px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            >
              All languages
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
