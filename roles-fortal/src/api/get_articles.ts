import type { Article } from "../data/types";

export default async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch("/opovo");

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
}
