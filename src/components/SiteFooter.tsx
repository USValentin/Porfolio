import type { Content } from "@/content/types";

export function SiteFooter({ footer }: { footer: Content["footer"] }) {
  return (
    <footer className="mx-auto flex max-w-[1376px] flex-wrap justify-between gap-3 px-4 pt-6 pb-10 font-mono text-[11px] text-muted uppercase sm:px-8">
      <span>{footer.copyright}</span>
      <span>{footer.end}</span>
    </footer>
  );
}
