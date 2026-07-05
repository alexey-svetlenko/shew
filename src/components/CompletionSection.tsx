import { completion } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function CompletionSection() {
  return (
    <Section id="completion" room>
      <h2 className="font-serif text-[clamp(2.4rem,10vw,4rem)] leading-none tracking-tight">
        {completion.headline}
      </h2>
      <div className="mt-10 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-muted">
        {completion.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="mt-12">
        <CalmButton href="#invitation">{completion.button}</CalmButton>
      </div>
    </Section>
  );
}
