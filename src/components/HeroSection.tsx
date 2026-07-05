import { hero } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function HeroSection() {
  return (
    <Section room>
      <div className="animate-rise">
        <h1 className="font-serif text-[clamp(1.75rem,7vw,3.4rem)] leading-[1.18] tracking-tight text-balance">
          {hero.headline}
        </h1>
        <p className="mt-8 border-l-2 border-line pl-5 font-serif text-[clamp(1.125rem,4.2vw,1.375rem)] leading-relaxed text-ink-soft">
          {hero.subheadline}
        </p>
        <div className="mt-8 max-w-prose space-y-3.5 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
          {hero.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="mt-10">
          <CalmButton href="#video">{hero.button}</CalmButton>
        </div>
      </div>
    </Section>
  );
}
