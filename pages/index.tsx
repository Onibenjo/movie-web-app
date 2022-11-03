import MovieCarousel from "@/components/Movies/MovieCarousel";
import MovieList from "@/components/Movies/MovieList";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Kontist Movie</title>
        <meta name="description" content="Movie streaming app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full overflow-x-hidden">
        <MovieCarousel />
        <MovieList />
      </main>
    </div>
  );
}
