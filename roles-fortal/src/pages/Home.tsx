import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles.json";

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
    <>
      <div className="p-5 border border-gray-50 rounded-xl my-5">
        <h1 className="text-4xl font-bold mb-5">Opovo</h1>

        <div className="columns-1 md:columns-3 gap-2">
          {typedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
