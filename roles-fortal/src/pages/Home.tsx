import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";

type Article = {
  titulo: string;
  subtitulo: string | null;
  categoria: string;
  autor: string;
  dataPublicacao: string;
  link: string;
  jornal: string;
  createdAt: string;
};

export default function Home() {
  const typedArticles = articles as Article[];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Artigos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {typedArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
