import { getMovieCarousel, getMovies } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StarRating } from "../common/StarRating";
import Movie from "./Movie";

const MovieList = () => {
  const { data } = useQuery(["movies"], getMovies);
  console.log(data);
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl my-4">Movies</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] overflow-x-auto gap-x-4 gap-y-8">
        {data?.map((movie) => (
          <li key={movie.id} className="">
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
