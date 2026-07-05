import { faq } from "@/content/landing";
import { Section } from "./Section";

export function FAQSection() {
  return (
    <Section id="faq">
      <h2 className="font-serif text-[clamp(1.5rem,5.5vw,2.2rem)] leading-tight tracking-tight">
        {faq.title}
      </h2>
      <div className="mt-10 border-t border-line">
        {faq.items.map((item) => (
          <details key={item.question} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 font-serif text-lg leading-snug transition-colors duration-200 hover:text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden
                className="shrink-0 text-xl font-light text-muted transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="max-w-prose space-y-3 pb-8 leading-relaxed text-muted">
              {item.answer.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
