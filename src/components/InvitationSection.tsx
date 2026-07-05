import { invitation, links } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function InvitationSection() {
  return (
    <Section id="invitation" tone="night">
      <span aria-hidden className="block w-10 border-t border-night-line" />
      <h2 className="mt-10 font-serif text-[clamp(1.6rem,6vw,2.6rem)] leading-[1.25] tracking-tight text-balance">
        {invitation.headline}
      </h2>
      <div className="mt-8 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-ivory-muted">
        {invitation.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="mt-12">
        <CalmButton href={links.booking} variant="ivory-solid" external>
          {invitation.button}
        </CalmButton>
      </div>
    </Section>
  );
}
