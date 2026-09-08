import { formatJournal, journalColor } from "../lib/journals";

type Props = {
  jornais:string[];
  totalArtigos: number;
};

export function SiteHeader({ jornais, totalArtigos }: Props) {
  return (
    <header className="border-b border-border bg-surface-raised">
      <div className="rule-gradient h-1 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-350 px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl leading-none text-foreground md:text-5xl">Rolê Fortal</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Cultura, lazer e notícias do Ceará reunidas em um só lugar, direto dos principais
              jornais do estado.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Stat label="Jornais" value={jornais.length} />
            <Stat label="Artigos" value={totalArtigos} />
          </div>
        </div>

        {jornais.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {jornais.map((j) => (
              <li
                key={j}
                className="flex items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: journalColor(j) }}
                  aria-hidden="true"
                />
                {formatJournal(j)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 text-center">
      <div className="font-display text-2xl leading-none text-foreground">{value}</div>
      <div className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
