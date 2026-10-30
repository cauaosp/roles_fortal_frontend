import { useMemo, useState } from "react";
import type { ArticleType } from "../model/types";
import { ArticleCard } from "./ArticleCard";

const ARTICLES_PER_PAGE = 50;

export function JournalStructure({ data }: { data: ArticleType[] }) {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("pt-BR");

    if (!query) {
      return data;
    }

    return data.filter((article: ArticleType) => {
      const category = Array.isArray(article.category)
        ? article.category.join(" ")
        : (article.category ?? "");

      const searchableText = [
        article.title,
        article.subtitle,
        article.author,
        article.journal,
        category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("pt-BR");

      return searchableText.includes(query);
    });
  }, [data, search]);

  const visibleArticles = data.slice(0, visibleCount);
  const hasMore = visibleArticles.length < data.length;

  function handleLoadMore() {
    setVisibleCount((current: number) =>
      Math.min(current + ARTICLES_PER_PAGE, data.length),
    );
  }

  return (
    <div className="space-y-4">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar notícias por título, jornal, autor..."
        aria-label="Buscar notícias"
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-brand-cyan"
      />

      <p className="text-sm text-muted-foreground">
        {filteredArticles.length}{" "}
        {filteredArticles.length === 1
          ? "artigo encontrado"
          : "artigos encontrados"}
      </p>

      {filteredArticles.length > 0 ? (
        <>
          <div className="mosaic">
            {visibleArticles.map((a) => (
              <ArticleCard key={a.link} articles={a} />
            ))}
          </div>
          {hasMore && (
            <button
              className="mx-auto mt-10 px-5 py-3 cursor-pointer rounded-sm font-sans uppercase font-bold border border-brand-cyan/50 text-brand-cyan bg-brand-cyan/5 hover:bg-brand-leaf/20 hover:border-brand-leaf hover:text-brand-leaf shadow block"
              onClick={handleLoadMore}
            >
              Carregar Mais
            </button>
          )}
        </>
      ) : (
        <p className="py-10 text-center text-muted-foreground">
          Nenhum artigo encontrado para "{search}".
        </p>
      )}
    </div>
  );
}
