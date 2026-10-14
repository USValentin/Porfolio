import type { Content } from "@/content/types";
import { ArrowIcon } from "@/components/ui/Icons";

type Props = { construction: Content["construction"]; email: string; projectTitle: string };

/** Shown on every project whose write-up is not finished yet. */
export function ConstructionNotice({ construction, email, projectTitle }: Props) {
  const subject = encodeURIComponent(`${projectTitle} — portfolio`);
  return (
    <aside className="flex flex-col gap-4 border border-dashed border-ink p-5 sm:p-6">
      <div className="flex items-center gap-2 font-mono text-[11px] text-accent uppercase">
        <span aria-hidden="true" className="size-1.5 animate-pulse bg-accent motion-reduce:animate-none" />
        {construction.tag}
      </div>
      <p className="text-2xl leading-tight font-bold tracking-[-0.01em]">{construction.title}</p>
      <p className="max-w-[60ch] leading-relaxed text-muted">{construction.body}</p>
      <a
        href={`mailto:${email}?subject=${subject}`}
        className="group inline-flex w-fit items-center gap-2 bg-accent px-5 py-3 font-medium text-ground transition-transform duration-150 ease-[var(--ease-out-quint)] active:scale-[0.97] motion-reduce:transition-none"
      >
        {construction.cta}
        <ArrowIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </a>
    </aside>
  );
}
