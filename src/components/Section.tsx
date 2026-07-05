const tones = {
  paper: "bg-paper text-ink",
  "paper-deep": "bg-paper-deep text-ink",
  night: "bg-night text-ivory",
} as const;

const widths = {
  narrow: "max-w-2xl",
  wide: "max-w-4xl",
} as const;

type SectionProps = {
  id?: string;
  tone?: keyof typeof tones;
  width?: keyof typeof widths;
  /** Секция-«комната» высотой в экран с центрированным содержимым */
  room?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = "paper",
  width = "narrow",
  room = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${room ? "flex min-h-svh items-center" : ""}`}
    >
      <div
        className={`mx-auto w-full ${widths[width]} px-6 sm:px-8 ${
          room ? "py-16 sm:py-24" : "py-24 sm:py-36"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
