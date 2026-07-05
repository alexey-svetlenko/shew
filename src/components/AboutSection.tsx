import { about } from "@/content/landing";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about">
      {/*
        Заглушка портрета. Чтобы поставить настоящее фото, положите файл
        в public/portrait.jpg и замените этот блок на next/image:
        <Image src="/portrait.jpg" alt="Вера" width={96} height={96}
               className="size-24 rounded-full object-cover" />
      */}
      <div
        aria-hidden
        className="flex size-24 items-center justify-center rounded-full border border-line bg-paper-deep font-serif text-3xl text-muted"
      >
        В
      </div>
      <h2 className="mt-10 font-serif text-[clamp(1.5rem,5.5vw,2.2rem)] leading-tight tracking-tight">
        {about.title}
      </h2>
      <div className="mt-8 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-muted">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Section>
  );
}
