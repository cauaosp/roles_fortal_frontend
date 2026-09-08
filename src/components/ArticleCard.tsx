import { formatJournal, journalColor } from "../lib/journals";
import type { ArticleType } from "../model/types";

type Props = {
  data: ArticleType[];
};

export function JournalStructure({ data }: Props) {
  const news = Object.values(data).flat();
  console.log(news)

  return (
    <div className="mosaic">
      {news.map((a) => (
        <ArticleCard
          key={a.link}
          articles={a}
        />
      ))}
    </div>

  );
}

export function ArticleCard({ articles }: { articles: ArticleType }) {
  const accent = journalColor(articles.journal || "");
  const date = articles.publication_date ? new Date(articles.publication_date) : null;

  return (
    <article
      className="mosaic-item group cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
      onClick={() => window.open(articles.link, "_blank", "noopener,noreferrer")}
    >
      <div className="h-1 w-full" style={{ backgroundColor: accent }} aria-hidden="true" />

      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]">
          <span
            className="rounded-sm px-1.5 py-0.5 text-ink"
            style={{ backgroundColor: `color-mix(in oklab, ${accent} 28%, transparent)` }}
          >
            {formatJournal(articles.journal)}
          </span>
          <span className="text-muted-foreground">{categoryOf(articles)}</span>
        </div>

        <h3 className="font-sans text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
          {decode(articles.title)}
        </h3>

        {articles.subtitle && (
          <p className="text-sm leading-relaxed text-muted-foreground">{decode(articles.subtitle.trim())}</p>
        )}

        {(articles.author || date) && (
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
            {articles.author && <span className="font-medium text-foreground/80">{articles.author}</span>}
            {articles.author && date && <span aria-hidden="true">·</span>}
            {date && (
              <span>
                {date.toLocaleDateString("pt-BR")}
                {" · "}
                {date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}


function decode(text: string): string {
  return text
    .replace(/&hellip;/g, "…")
    .replace(/&#215;/g, "×")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/\[\s*…\s*\]/g, "…");
}


function categoryOf(article: ArticleType): string {
  const c = Array.isArray(article.category) ? article.category[0] : article.category;
  return (c && c.trim()) || "Notícia";
}
