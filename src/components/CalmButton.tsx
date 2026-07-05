const variants = {
  /** Заливка чернилами — для светлых секций */
  ink: "bg-ink text-paper hover:bg-ink-soft focus-visible:outline-ink",
  /** Тихий контур — для темных секций */
  ivory:
    "border border-night-line text-ivory hover:border-ivory-muted hover:bg-night-soft focus-visible:outline-ivory",
  /** Заливка айвори — главное приглашение на темном фоне */
  "ivory-solid": "bg-ivory text-ink hover:bg-white focus-visible:outline-ivory",
} as const;

type CalmButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
  children: React.ReactNode;
};

export function CalmButton({ href, variant = "ink", external = false, children }: CalmButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-block rounded-full px-8 py-4 text-base leading-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
