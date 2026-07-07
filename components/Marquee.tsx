type MarqueeProps = {
  items: string[];
  label?: string;
};

export default function Marquee({ items, label }: MarqueeProps) {
  return (
    <div>
      {label ? (
        <p className="eyebrow mb-4 text-center text-mute">{label}</p>
      ) : null}

      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max flex-nowrap gap-3">
          {/* Two identical groups: first is read by AT, second is decorative */}
          {[0, 1].map((group) => (
            <ul
              key={group}
              className="flex flex-nowrap gap-3"
              aria-hidden={group === 1 ? true : undefined}
            >
              {items.map((item) => (
                <li
                  key={`${group}-${item}`}
                  className="whitespace-nowrap rounded-pill border border-ink/15 bg-canvas px-5 py-2 text-sm font-semibold text-ink shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
