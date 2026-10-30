import { useMemo, useState } from "react";
import { JournalStructure } from "../components/ArticleCard";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/SiteHeader";
import { useLoadArticle } from "../hook/useLoadArticle";
import type { ArticleType } from "../model/types";

export default function Home() {
  const { data, loading, error } = useLoadArticle();
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("pt-BR");

    if (!query) {
      return data.articles;
    }

    return data.articles.filter((article: ArticleType) => {
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
  }, [data.articles, search]);

  return (
    <div className="scroll-smooth bg-background min-h-screen grid grid-rows-[auto_1fr_auto]">
      <SiteHeader jornais={data.journals} totalArtigos={data.articles.length} />
      <main className="mx-auto max-w-350 p-5 md:px-8 md:py-14 w-full">
        {loading ? (
          <div className="flex justify-center items-center mt-5 h-72 md:h-96">
            <div className="rounded-full size-32 border-10 border-dotted border-brand-sun border-t-brand-ocean animate-spin"></div>
          </div>
        ) : error ? (
          <div className="h-72 md:h-96 flex justify-center items-center">
            <div className="font-bold text-lg text-center p-3 rounded-lg border border-brand-coral text-brand-coral">
              Houve um erro na busca. Reinicie a página!
              <br />
              {error}
            </div>
          </div>
        ) : data ? (
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
              <JournalStructure key={search} data={filteredArticles} />
            ) : (
              <p className="py-10 text-center text-muted-foreground">
                Nenhum artigo encontrado para "{search}".
              </p>
            )}
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <div className="font-bold text-lg text-center p-3 rounded-lg border border-red-500 text-red-500">
              não há dados
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
