import type { Content } from "@/content/types";

type Props = { contact: Content["contact"]; footer: Content["footer"] };

export function Contact({ contact, footer }: Props) {
  return (
    <>
      <section
        id="contact"
        className="mx-auto flex max-w-[1376px] scroll-mt-4 flex-wrap items-end gap-12 px-4 pt-20 pb-12 sm:px-8 sm:pt-24"
      >
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
          <span className="font-mono text-xs text-muted uppercase">{contact.label}</span>
          <h2 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em]">
            {contact.title}
            <br />
            <span className="text-accent">{contact.titleAccent}</span>
          </h2>
        </div>
        <ul className="flex flex-[1_1_340px] flex-col border-t border-ink text-lg">
          {contact.links.map((link, i) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.label} className={`border-b ${i === contact.links.length - 1 ? "border-ink" : "border-rule"}`}>
                <a
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex justify-between py-4 hover:text-accent"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-[var(--ease-out-quint)] group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <footer className="mx-auto flex max-w-[1376px] flex-wrap justify-between gap-3 px-4 pt-6 pb-10 font-mono text-[11px] text-muted uppercase sm:px-8">
        <span>{footer.copyright}</span>
        <span>{footer.end}</span>
      </footer>
    </>
  );
}
