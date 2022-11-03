import SEO from "@/components/common/SEO";
import MovieCarousel from "@/components/Movies/MovieCarousel";
import MovieList from "@/components/Movies/MovieList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <SEO title="Kontist Movie" desc="Movie streaming app" />

      <main className="w-full overflow-x-hidden max-w-[100vw] px-8">
        <MovieCarousel />
        <MovieList />
      </main>
    </div>
  );
}
