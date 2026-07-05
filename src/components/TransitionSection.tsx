import { transition } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function TransitionSection() {
  return (
    <Section id="transition" tone="paper-deep">
      <h2 className="font-serif text-[clamp(1.6rem,6vw,2.6rem)] leading-tight tracking-tight text-balance">
        {transition.title}
      </h2>
      <div className="mt-10 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-muted">
        {transition.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="mt-12">
        <CalmButton href="#video">{transition.button}</CalmButton>
      </div>
    </Section>
  );
}
