import { process } from "@/content/landing";
import { Section } from "./Section";

export function CoachingProcessSection() {
  return (
    <Section id="process" tone="paper-deep" width="wide">
      <h2 className="font-serif text-[clamp(1.5rem,5.5vw,2.2rem)] leading-tight tracking-tight">
        {process.title}
      </h2>
      <ol className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
        {process.steps.map((step, index) => (
          <li key={step.title} className="border-t border-line pt-6">
            <span className="font-serif text-sm text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif text-2xl leading-snug">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
