import type { ArticleType } from "../model/types";

export function deduplicateArticles(data: ArticleType[]): ArticleType[] {
  const uniqueArticles = Array.from(
    new Map(data.map((article) => [article.link, article])).values(),
  );

  return uniqueArticles;
}
