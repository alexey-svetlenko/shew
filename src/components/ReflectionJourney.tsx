import { reflectionButtons, reflectionQuestions } from "@/content/landing";
import { CalmButton } from "./CalmButton";

/**
 * Семь тихих комнат. Каждый вопрос — отдельная секция высотой в экран,
 * без счетчиков, прогресса и полей ввода. Навигация — обычные якорные
 * ссылки с плавной прокруткой средствами CSS.
 */
export function ReflectionJourney() {
  return (
    <div id="reflection">
      {reflectionQuestions.map((question, index) => {
        const isLast = index === reflectionQuestions.length - 1;
        const nextHref = isLast ? "#completion" : `#${reflectionQuestions[index + 1].id}`;

        return (
          <section
            key={question.id}
            id={question.id}
            className="flex min-h-svh items-center bg-night text-ivory"
          >
            <div className="mx-auto w-full max-w-2xl px-6 py-24 sm:px-8">
              <span aria-hidden className="block w-10 border-t border-night-line" />
              <h2 className="mt-10 font-serif text-[clamp(1.6rem,6.5vw,2.9rem)] leading-[1.25] tracking-tight text-balance">
                {question.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              {question.support.length > 0 && (
                <div className="mt-8 space-y-1.5 text-[1.0625rem] leading-relaxed text-ivory-muted">
                  {question.support.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}
              <div className="mt-14">
                <CalmButton href={nextHref} variant="ivory">
                  {isLast ? reflectionButtons.last : reflectionButtons.next}
                </CalmButton>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
