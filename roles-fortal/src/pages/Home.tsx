import { useLoadArticle } from "../hook/useLoadArticle";
import { JournalStructure } from "../components/ArticleCard";

export default function Home() {
  const { data, loading, error } = useLoadArticle();
  console.log("url", data?.url);
  console.log("status", data?.status);
  console.log("response", data);

  return (
    <div className="scroll-smooth bg-teal-500">
      {loading ? (
        <div className="flex justify-center items-center mt-5">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : data ? (
        <JournalStructure data={data} />
      ) : (
        <div className="font-bold text-center p-2 items-center border border-red-500 text-red-500">
          não há dados
        </div>
      )}
    </div>
  );
}
