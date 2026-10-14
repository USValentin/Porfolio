import type { Content } from "@/content/types";
import { ArrowIcon } from "@/components/ui/Icons";

type Props = { contact: Content["contact"] };

export function Contact({ contact }: Props) {
  return (
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
                className="group flex items-center justify-between py-4 hover:text-accent"
              >
                <span>{link.label}</span>
                <ArrowIcon className="size-4 transition-transform duration-150 ease-[var(--ease-out-quint)] group-hover:translate-x-1 motion-reduce:transition-none" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
