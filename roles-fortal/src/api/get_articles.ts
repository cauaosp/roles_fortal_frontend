import type { Article } from "../data/types";

export default async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch("http://127.0.0.1:5001/opovo");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
}
