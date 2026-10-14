import Image from "next/image";
import type { Content } from "@/content/types";
import { ArrowIcon } from "@/components/ui/Icons";
import avatar from "../../../public/images/avatar.png";

type Props = { hero: Content["hero"] };

const corner = "pointer-events-none absolute size-3.5 border-ink";

export function Hero({ hero }: Props) {
  return (
    <section className="mx-auto flex max-w-[1376px] flex-wrap gap-12 px-4 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20">
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8">
        <span className="font-mono text-xs text-muted uppercase">{hero.label}</span>
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.88] font-extrabold tracking-[-0.045em] hyphens-manual">
          Valentin
          <br />
          Hassen&shy;forder
        </h1>
        <p className="max-w-[680px] text-xl leading-snug sm:text-[26px]">
          <strong className="font-medium">{hero.role}</strong> {hero.tagline}{" "}
          <span className="text-accent">{hero.taglineAccent}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-4 font-medium text-ground transition-transform duration-150 ease-[var(--ease-out-quint)] active:scale-[0.97] motion-reduce:transition-none"
          >
            {hero.ctaPrimary}
            <ArrowIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </a>
          <a
            href="#index"
            className="border border-ink px-6 py-4 font-medium transition-[transform,background-color] duration-150 ease-[var(--ease-out-quint)] hover:bg-hover active:scale-[0.97] motion-reduce:transition-none"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <aside className="flex flex-[1_1_340px] flex-col gap-5">
        <figure className="m-0">
          <div className="relative flex aspect-[4/3] items-center justify-center border border-rule bg-hover">
            <Image
              src={avatar}
              alt={hero.avatarAlt}
              priority
              sizes="(min-width: 1024px) 240px, 50vw"
              className="h-auto w-[58%]"
            />
            <span aria-hidden="true" className={`${corner} top-3 left-3 border-t border-l`} />
            <span aria-hidden="true" className={`${corner} top-3 right-3 border-t border-r`} />
            <span aria-hidden="true" className={`${corner} bottom-3 left-3 border-b border-l`} />
            <span aria-hidden="true" className={`${corner} right-3 bottom-3 border-r border-b`} />
            <span aria-hidden="true" className="absolute top-3 left-9 font-mono text-[11px] text-muted">
              {hero.avatarTag}
            </span>
          </div>
          <figcaption className="mt-2 font-mono text-[11px] text-muted">{hero.figCaption}</figcaption>
        </figure>

        <table className="w-full border-collapse text-[15px]">
          <caption className="pb-2 text-left font-mono text-xs text-muted uppercase">{hero.specsLabel}</caption>
          <tbody>
            {hero.specs.map((spec, i) => (
              <tr
                key={spec.label}
                className={`border-t ${i === 0 ? "border-ink" : "border-rule"} ${
                  i === hero.specs.length - 1 ? "border-b border-b-ink" : ""
                }`}
              >
                <th scope="row" className="w-[42%] py-2.5 pr-4 text-left align-top font-normal text-muted">
                  {spec.label}
                </th>
                <td
                  className={`py-2.5 ${spec.mono ? "font-mono text-[13px]" : ""} ${
                    spec.accent ? "font-medium text-accent" : ""
                  }`}
                >
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </aside>
    </section>
  );
}
