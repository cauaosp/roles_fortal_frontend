import type { JornalType, ArticleType } from "../data/types";

interface JornalStrctureProps {
  data: JornalType;
}

interface ArticleCardProps {
  artigos: ArticleType[];
}

export function JournalStructure({ data }: JornalStrctureProps) {
  return (
    <div className="m-1 grid grid-cols-1 2xl:grid-cols-2 gap-3">
      {Object.entries(data).map(([jornal, artigos]) => (
        <div
          key={jornal}
          className="border-2 text-slate-50 p-1 rounded-lg m-auto"
        >
          <h2 className="font-bold ronded-lg m-1 shadow-md">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-120 overflow-y-scroll scroll-smooth p-2">
      {artigos.map((artigo) => (
        <div
          key={artigo.link}
          className="p-3 rounded-lg font-serif relative pt-6 cursor-pointer grid gap-y-1 bg-slate-900/60 inset-shadow-sm"
          onClick={() => window.open(artigo.link, "_blank")}
        >
          <h3 className="text-justify rounded-xl font-bold tracking-tight">
            {artigo.titulo}
          </h3>
          {artigo.subtitulo && (
            <p className="text-left line-clamp-3 self-start tracking-tighter">
              {artigo.subtitulo?.replace(/<[^>]*>/g, "") || ""}
            </p>
          )}
          <div className="flex gap-0 text-slate-300 text-left text-sm font-light">
            <div className="mr-auto max-w-52">
              Por: {artigo.autor || "Desconhecido"}
            </div>
            {artigo.dataPublicacao && (
              <div>
                {new Date(artigo.dataPublicacao).toLocaleDateString("pt-BR")}
                &nbsp;|&nbsp;
                {new Date(artigo.dataPublicacao).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            )}
          </div>
          <div className="text-xs absolute text-slate-300 top-1.5 right-1 font-light">
            {Array.isArray(artigo.categoria)
              ? artigo.categoria[0]
              : artigo.categoria || "Notícia"}
          </div>
        </div>
      ))}
    </div>
  );
}
