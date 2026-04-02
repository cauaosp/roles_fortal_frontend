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

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{article.titulo}</h3>
      <p>{article.subtitulo}</p>
      <small>{article.dataPublicacao}</small>
    </div>
  );
}
