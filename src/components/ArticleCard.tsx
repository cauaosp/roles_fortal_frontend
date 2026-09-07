import type { ArticleType, JornalType } from "../data/types";

interface JornalStrctureProps {
  data: JornalType;
}

interface ArticleCardProps {
  artigos: ArticleType[];
}

export function JournalStructure({ data }: JornalStrctureProps) {
  return (
    <>
      <div className="border border-dashed border-teal-950 text-teal-950 ml-4 w-fit p-4 font-serif text-shadow-md rounded-lg">
        <div className="w-fit">🗞️ Jornais: {Object.values(data).filter(artigos => artigos.length > 0).length}</div>
        <div className="w-fit">🧾 Artigos: {Object.values(data).flat().length}</div>
      </div>

      <div className="m-4 grid grid-cols-1 2xl:grid-cols-2 gap-6">
        {Object.entries(data).map(([jornal, artigos]) => (
          artigos.length > 0 && (
          <div
            key={jornal}
            className="border border-teal-950 text-teal-950 p-1 rounded-lg w-full"
          >
            <h2 className="font-bold ronded-lg m-1 shadow-sm">
              {jornal.toUpperCase()}
            </h2>
            <ArticleCard artigos={artigos} />
          </div>
          )
        ))}
      </div>
    </>
  );
}

export function ArticleCard({ artigos }: ArticleCardProps) {
  console.log(artigos)
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4 max-h-150 overflow-y-scroll scroll-smooth p-2 text-lime-200">
      {artigos.map((artigo) => (
        <div
          key={artigo.link}
          className="p-3 rounded-sm font-serif relative py-6 cursor-pointer grid gap-y-3 bg-teal-950 inset-shadow-sm hover:opacity-85 h-fit"
          onClick={() => window.open(artigo.link, "_blank")}
        >
          <div className="text-xs absolute text-lime-300 top-1.5 right-1 font-light">
            {Array.isArray(artigo.category)
              ? artigo.category[0]
              : artigo.category || "Notícia"}
          </div>
          <h3 className="text-justify font-bold tracking-tight border-b border-border pb-1 h-fit">
            {artigo.title}
          </h3>
          {artigo.subtitle && (
            <p className="text-justify self-start tracking-tighter border-b border-border pb-4">
              {artigo.subtitle.trim()}
            </p>
          )}

          {(artigo.author || artigo.publication_date) && <div className="flex text-lime-300 text-sm font-light text-justify items-center">
            <div className="mr-auto max-w-48">
              {artigo.author ?? ""}
            </div>
            {artigo.publication_date && (
              <div className="flex relative h-fit">
                <div>{new Date(artigo.publication_date).toLocaleDateString("pt-BR")}</div>
                <div className="absolute -bottom-3 text-xs">
                  {new Date(artigo.publication_date).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            )}
          </div>}
        </div>
      ))}
    </div>
  );
}
