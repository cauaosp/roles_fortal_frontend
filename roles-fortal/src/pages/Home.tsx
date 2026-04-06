import ArticleCard from "../components/ArticleCard";
import getArticles from "../api/get_articles";
import type { Article } from "../data/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <>
      {articles.length === 0 ? (
        <div className="flex items-center justify-center h-screen size-full">
          <p>Nenhum artigo encontrado. 😔</p>
        </div>
      ) : (
        <div className="p-5 border border-gray-50 rounded-xl my-5">
          <h1 className="text-4xl font-bold mb-5">Opovo</h1>

          <div className="columns-1 md:columns-3 gap-2">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
