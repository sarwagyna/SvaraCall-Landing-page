import Link from "next/link";
import type { Crumb } from "@/lib/schema";

// `tone` should match the background of the section that follows the
// breadcrumb so the bar blends seamlessly instead of showing a stray band.
export default function Breadcrumbs({
  trail,
  tone = "soft",
}: {
  trail: Crumb[];
  tone?: "soft" | "canvas";
}) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return (
    <nav
      aria-label="Breadcrumb"
      className={tone === "canvas" ? "bg-canvas" : "bg-canvas-soft"}
    >
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-5 pt-6 text-sm text-mute">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-ink"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
