import type { JornalType } from "../data/types";

export async function getArticles(): Promise<JornalType> {
  const response = await fetch("/opovo");

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
