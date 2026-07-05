import { links, telegram } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function TelegramSection() {
  return (
    <Section id="telegram">
      <h2 className="font-serif text-[clamp(1.5rem,5.5vw,2.2rem)] leading-tight tracking-tight text-balance">
        {telegram.headline}
      </h2>
      <div className="mt-8 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-muted">
        {telegram.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="mt-12">
        <CalmButton href={links.telegram} external>
          {telegram.button}
        </CalmButton>
      </div>
    </Section>
  );
}
