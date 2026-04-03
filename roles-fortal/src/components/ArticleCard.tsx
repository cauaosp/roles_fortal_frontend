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
    <a href={article.link}>
      <div className="break-inside-avoid-column mb-2 border border-gray-300 p-4 grid grid-flow-row gap-2 bg-gray-50/5 rounded-xl">
        <h2 className="text-lg text-left font-bold leading-tight relative py-1">
          <div className="text-xs absolute -top-2 right-0 font-light">
            {article.categoria}
          </div>
          {article.titulo}
        </h2>
        <p className="text-sm text-left line-clamp-2 self-start">
          {article.subtitulo}
        </p>
        <div className="flex gap-0 text-left text-xs">
          <div>
            {article.dataPublicacao.split(" ")[1].slice(0, 5)}&nbsp;|&nbsp;
          </div>
          <div> {article.dataPublicacao.split(" ")[0]}</div>
          <div className="ml-auto">Por: {article.autor}</div>
        </div>
      </div>
    </a>
  );
}
