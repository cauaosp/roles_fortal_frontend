import { shuffleArticles, shuffleNews } from "../lib/shuffle";
import { deduplicateArticles } from "../lib/utils";
import type { GetArticlesResponse, JournalProps, ArticleType } from "../model/types";
import { supabase } from "../lib/supabaseClient";

const DEFAULT_ARTICLES_URL =
  "https://cauaosp.github.io/roles_fortal_backend/data/artigos_ceara.json";

export async function getArticles(): Promise<GetArticlesResponse> {
  const url = import.meta.env.VITE_ARTICLES_URL ?? DEFAULT_ARTICLES_URL;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { articles, journals } = shuffleArticles(await response.json());

  if (articles.length === 0) {
    throw new Error("No articles found");
  }

  const uniqueArticles = deduplicateArticles(articles);

  return { articles: uniqueArticles, journals };
}

export async function getStaticJornais(): Promise<JournalProps> {
  const response = await fetch("/articles.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<JournalProps>;
}

export async function getArticlesFromDB(): Promise<ArticleType[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  if (!data || data.length === 0) {
    throw new Error("No articles found");
  }

  const articles = shuffleNews(data);

  return articles;
}

export async function getJournalsFromDB(): Promise<string[]> {
  const { data, error } = await supabase.from("journals").select("journal");

  if (error) {
    throw new Error(error.message);
  }

  if (!data || data.length === 0) {
    throw new Error("No journals found");
  }

  const list = data.map((article) => article.journal)

  return list;
}

export async function getNewsFromDB(): Promise<GetArticlesResponse> {
  const articles = await getArticlesFromDB();
  console.log("Artigos qtde: ", articles.length)
  const journals = await getJournalsFromDB();
  console.log("Journals qtde: ", journals.length)

  return { articles, journals };
}
