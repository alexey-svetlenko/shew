import { video, youtubeVideoId } from "@/content/landing";
import { CalmButton } from "./CalmButton";
import { Section } from "./Section";

export function VideoSection() {
  return (
    <Section id="video">
      {/* Видео шире текстовой колонки на больших экранах, но не ломает ее левый край */}
      <div className="overflow-hidden rounded-2xl border border-line bg-paper-deep sm:-mx-16 lg:-mx-28">
        {youtubeVideoId ? (
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
            title="Видео о том, как устроена наша работа"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-4">
            <span
              aria-hidden
              className="flex size-14 items-center justify-center rounded-full border border-line text-muted"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.5 2.9v10.2c0 .5.55.8.97.53l7.9-5.1a.63.63 0 0 0 0-1.06l-7.9-5.1a.63.63 0 0 0-.97.53Z" />
              </svg>
            </span>
            <p className="text-sm text-muted">{video.placeholderNote}</p>
          </div>
        )}
      </div>
      <h2 className="mt-14 font-serif text-[clamp(1.5rem,5.5vw,2.2rem)] leading-tight tracking-tight">
        {video.title}
      </h2>
      <div className="mt-8 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-muted">
        {video.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="mt-12">
        <CalmButton href="#q-1">{video.button}</CalmButton>
      </div>
    </Section>
  );
}
