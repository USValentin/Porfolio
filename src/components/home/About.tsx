import type { Content } from "@/content/types";

type Props = { about: Content["about"] };

const caption = "pb-4 text-left font-mono text-xs text-muted uppercase";
const cell = "py-3 pr-3 align-top";
const period = `${cell} font-mono text-[13px] whitespace-nowrap`;
const title = `${cell} text-[17px] font-bold`;
const org = `${cell} text-muted`;

/** Border of a table row: strong rule on the first and below the last, light in between. */
function rowBorder(i: number, length: number) {
  return `border-t ${i === 0 ? "border-ink" : "border-rule"} ${i === length - 1 ? "border-b border-b-ink" : ""}`;
}

export function About({ about }: Props) {
  const { revisions, education } = about;

  return (
    <section
      id="parcours"
      className="mx-auto flex max-w-[1376px] scroll-mt-4 flex-wrap gap-16 px-4 pt-8 pb-20 sm:px-8 sm:pb-26"
    >
      <div className="flex flex-[1_1_380px] flex-col gap-7">
        <span className="font-mono text-xs text-muted uppercase">{about.label}</span>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.15] font-bold tracking-[-0.02em]">
          {about.statement}
        </h2>
        <p className="max-w-[560px] text-lg leading-relaxed whitespace-pre-line">{about.body}</p>
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-[11px] font-normal text-muted uppercase">{about.toolsLabel}</h3>
          <ul className="flex flex-wrap gap-2">
            {about.tools.map((tool) => (
              <li key={tool} className="border border-ink px-3 py-1.5 font-mono text-xs">
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <p className="flex items-baseline gap-3 border-t border-rule pt-4">
          <span className="font-mono text-[11px] whitespace-nowrap text-muted uppercase">{about.offScreenLabel}</span>
          <span>{about.offScreen}</span>
        </p>
      </div>

      <div className="flex min-w-0 flex-[999_1_600px] flex-col gap-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <caption className={caption}>{revisions.label}</caption>
            <thead>
              <tr className="font-mono text-[11px] text-muted uppercase">
                {Object.values(revisions.columns).map((column) => (
                  <th key={column} scope="col" className="pr-3 pb-2 text-left font-normal">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {revisions.items.map((item, i) => (
                <tr key={item.rev} className={rowBorder(i, revisions.items.length)}>
                  <td className={`${cell} font-mono text-xs whitespace-nowrap text-accent`}>{item.rev}</td>
                  <td className={period}>{item.period}</td>
                  <td className={title}>{item.role}</td>
                  <td className={org}>{item.org}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <caption className={caption}>{education.label}</caption>
            <tbody>
              {education.items.map((item, i) => (
                <tr key={item.title} className={rowBorder(i, education.items.length)}>
                  <td className={period}>{item.period}</td>
                  <td className={title}>{item.title}</td>
                  <td className={org}>{item.school}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
