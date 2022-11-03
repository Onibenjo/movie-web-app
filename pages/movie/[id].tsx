import SEO from "@/components/common/SEO";
import MovieDetails from "@/components/Movies/MovieDetails";
import { getMovie } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const MovieDetailsPage = () => {
  const { query } = useRouter();
  const { id } = query as { id: string };
  const { data, isLoading } = useQuery(["movies", id], () => getMovie(id));

  return (
    <main>
      <SEO
        title={`${data ? data.name : ""} | Kontist Movie`}
        desc={data?.storyline.substring(0, 120) ?? ""}
        image={data?.images[0]}
      />
      <div className="container mx-auto">
        {isLoading ? <div>Loading...</div> : <MovieDetails movie={data} />}
      </div>
    </main>
  );
};

export default MovieDetailsPage;
