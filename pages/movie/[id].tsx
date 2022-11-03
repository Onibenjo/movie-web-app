import MovieDetails from "@/components/Movies/MovieDetails";
import { getMovie } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const MovieDetailsPage = () => {
  const { query } = useRouter();
  const { id } = query as { id: string };
  const { data, isLoading } = useQuery(["movies", id], () => getMovie(id));

  return (
    <main>
      <Head>
        <title>Kontist Movie</title>
        <meta name="description" content="Movie streaming app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        {isLoading ? <div>Loading...</div> : <MovieDetails movie={data} />}
      </div>
    </main>
  );
};

export default MovieDetailsPage;
