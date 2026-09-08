import type { ArticleType, JournalProps } from "../model/types";

export function shuffleArticles(data: JournalProps): {articles: ArticleType[]; journals: string[]} {
  const articles: ArticleType[] = shuffle(Object.values(data).flat()) ?? [];
  const journals: string[] = Object.keys(data) ?? [];

  return {articles, journals};
}

export function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
