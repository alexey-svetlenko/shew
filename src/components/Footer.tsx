import { footer } from "@/content/landing";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-8">
        <p className="font-serif text-lg">{footer.name}</p>
        <nav aria-label="Ссылки и документы" className="mt-6">
          <ul className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-8">
            {footer.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-10 text-sm text-muted">
          © {new Date().getFullYear()} {footer.name}
        </p>
      </div>
    </footer>
  );
}
