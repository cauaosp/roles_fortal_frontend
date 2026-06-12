import type { JornalType, ArticleType } from "../data/types";

export async function getArticles(): Promise<ArticleType[]> {
  try {
    const response = await fetch("/opovo");
    const data = (await response.json()) as ArticleType[];

    return data;
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
}

export async function getStaticJornais(): Promise<JornalType> {
  const response = await fetch("/articles.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<JornalType>;
}
