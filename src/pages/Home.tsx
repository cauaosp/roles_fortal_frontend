import { JournalStructure } from "../components/ArticleCard";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/SiteHeader";
import { useLoadArticle } from "../hook/useLoadArticle";

export default function Home() {
  const { data, loading, error } = useLoadArticle();

  return (
    <div className="scroll-smooth bg-background min-h-screen grid grid-rows-[auto_1fr_auto]">
      <SiteHeader jornais={data.journals} totalArtigos={data.articles.length} />
      <main className="mx-auto max-w-350 p-5 md:px-8 md:py-14 w-full">
        {loading ? (
          <div className="flex justify-center items-center mt-5 h-72 md:h-96">
            <div className="rounded-full size-32 border-10 border-dotted border-brand-sun border-t-brand-ocean animate-spin"></div>
          </div>
        ) : error ? (
          <div className="h-72 md:h-96 flex justify-center items-center">
            <div className="font-bold text-lg text-center p-3 rounded-lg border border-brand-coral text-brand-coral">
              Houve um erro na busca. Reinicie a página!
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
