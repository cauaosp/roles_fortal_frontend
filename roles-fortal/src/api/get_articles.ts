import type { Article } from "../data/types";

export default async function getArticles(): Promise<Article[]> {
  try {
    const backendUrl = import.meta.env.VITE_URL_BACKEND;

    if (!backendUrl) {
      throw new Error("VITE_URL_BACKEND não definida");
    }

    const response = await fetch(backendUrl);

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
}
