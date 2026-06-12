import type { JornalType, ArticleType } from "../data/types";

interface JornalStrctureProps {
  data: JornalType;
}

interface ArticleCardProps {
  artigos: ArticleType[];
}

export function JournalStructure({ data }: JornalStrctureProps) {
  return (
    <div className="border border-red-500 grid grid-cols-1 gap-4 mt-5">
      {Object.entries(data).map(([jornal, artigos]) => (
        <div key={jornal} className="border p-3 m-auto max-w-[90%]">
          <h2 className="font-bold text-white ronded-lg m-1">
            {jornal.toUpperCase()}
          </h2>
          <ArticleCard artigos={artigos} />
        </div>
      ))}
    </div>
  );
}

export function ArticleCard({ artigos }: ArticleCardProps) {
  return (
    <div>
      {artigos.map((artigo) => (
        <div
          key={artigo.link}
          className="border p-3 m-auto max-w-[90%] max-h-96 cursor-pointer w-96"
          onClick={() => window.open(artigo.link, "_blank")}
        >
          {artigo.titulo}
        </div>
      ))}
    </div>
  );
}
