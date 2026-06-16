import { useLoadArticle } from "../hook/useLoadArticle";
import { JournalStructure } from "../components/ArticleCard";

export default function Home() {
  const { data, loading, error } = useLoadArticle();
  console.log("url", data?.url);
  console.log("status", data?.status);
  console.log("response", data);

  return (
    <div className="scroll-smooth bg-yellow-200">
      {loading ? (
        <div className="flex justify-center items-center mt-5 h-screen">
          <div className="rounded-full size-32 border-10 border-double border-yellow-400 border-t-lime-500 animate-spin"></div>
        </div>
      ) : error ? (
        <div className="h-screen flex justify-center items-center">
          <div className="font-bold text-lg text-center p-3 rounded-lg border border-red-500 text-red-500">
            Houve um erro: {error}
          </div>
        </div>
      ) : data ? (
        <JournalStructure data={data} />
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="font-bold text-lg text-center p-3 rounded-lg border border-red-500 text-red-500">
            não há dados
          </div>
        </div>
      )}
    </div>
  );
}
