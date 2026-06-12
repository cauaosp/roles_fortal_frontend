import type { JornalType } from "../data/types";

interface ArticleCardProps {
  data: JornalType;
}

export function JournalStructure({ data }: ArticleCardProps) {
  return (
    <div className="border border-red-500 grid grid-cols-1 gap-4">
      {Object.entries(data).map(([jornal, artigos]) => (
        <div key={jornal} className="border p-3 m-auto max-w-[1000px]">
          <h2 className="font-bold text-white ronded-lg m-1">
            {jornal.toUpperCase()}
          </h2>
          <pre>{JSON.stringify(artigos, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

export function ArticleCard({ data }: ArticleCardProps) {
  return (
    <div>
      {Object.entries(data).map(([jornal, artigos]) => (
        <div key={jornal}>
          <pre>{JSON.stringify(jornal, null, 2)}</pre>
          <pre>{JSON.stringify(artigos, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
