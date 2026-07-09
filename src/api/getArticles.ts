import type { JornalType } from "../data/types";

const DEFAULT_ARTICLES_URL =
  "https://cauaosp.github.io/roles_fortal_backend/artigos_ceara.json";

export async function getArticles(): Promise<JornalType> {
  const url = import.meta.env.VITE_ARTICLES_URL ?? DEFAULT_ARTICLES_URL;
  console.log("url: ", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<JornalType>;
}

export async function getStaticJornais(): Promise<JornalType> {
  const response = await fetch("/articles.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<JornalType>;
}
