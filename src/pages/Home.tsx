import { JournalStructure } from "../components/ArticleCard";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/SiteHeader";
import { useLoadArticle } from "../hook/useLoadArticle";

export default function Home() {
  const { data, loading, error } = useLoadArticle();
  console.log(data, loading, error);

  return (
    <div className="scroll-smooth bg-background h-screen overflow-auto">
      <SiteHeader jornais={data.journals} totalArtigos={data.articles.length} />
      <main className="mx-auto max-w-350 px-5 py-10 md:px-8 md:py-14">
        {loading ? (
          <div className="flex justify-center items-center mt-5 h-screen">
            <div className="rounded-full size-32 border-10 border-double border-yellow-400 border-t-lime-500 animate-spin"></div>
          </div>
        ) : error ? (
          <div className="h-screen flex justify-center items-center">
            <div className="font-bold text-lg text-center p-3 rounded-lg border border-red-500 text-red-500">
              Houve um erro na busca, reinicie a página!
              <br />
              {error}
            </div>
          </div>
        ) : data ? (
          <JournalStructure data={data.articles} />
        ) : (
          <div className="h-screen flex justify-center items-center">
            <div className="font-bold text-lg text-center p-3 rounded-lg border border-red-500 text-red-500">
              não há dados
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
