import { shuffleArticles } from "../lib/shuffle";
import type { GetArticlesResponse, JournalProps } from "../model/types";

const DEFAULT_ARTICLES_URL =
  "https://cauaosp.github.io/roles_fortal_backend/data/artigos_ceara.json";

export async function getArticles(): Promise<GetArticlesResponse> {
  const url = import.meta.env.VITE_ARTICLES_URL ?? DEFAULT_ARTICLES_URL;
  console.log("url: ", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { articles, journals } = shuffleArticles(await response.json())

  if(articles.length === 0) {
    throw new Error("No articles found");
  }

  return { articles, journals };
}

export async function getStaticJornais(): Promise<JournalProps> {
  const response = await fetch("/articles.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<JournalProps>;
}
