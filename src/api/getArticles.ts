import { shuffleNews } from "../lib/shuffle";
import { supabase } from "../lib/supabaseClient";
import type { ArticleType, GetArticlesResponse } from "../model/types";

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

  const list = data.map((article) => article.journal);

  return list;
}

export async function getNewsFromDB(): Promise<GetArticlesResponse> {
  const articles = await getArticlesFromDB();
  const journals = await getJournalsFromDB();

  return { articles, journals };
}
