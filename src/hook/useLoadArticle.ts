import { useEffect, useState } from "react";
import { getArticles } from "../api/getArticles";
import type { JornalType } from "../data/types";

export function useLoadArticle() {
  const [data, setData] = useState<JornalType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        console.log("carregando...");

        const jornais = await getArticles();

        setData(jornais);
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
