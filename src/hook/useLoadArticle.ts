import { useEffect, useState } from "react";
import { getNewsFromDB } from "../api/getArticles";
import type { GetArticlesResponse } from "../model/types";

export function useLoadArticle() {
  const [data, setData] = useState<GetArticlesResponse>({
    articles: [],
    journals: [],
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const { articles, journals } = await getNewsFromDB();

        setData({ articles, journals });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido!");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return { data, loading, error };
}
