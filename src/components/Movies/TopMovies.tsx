import { getMovieCarousel, getMovies, getTop10Movies } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StarRating } from "../common/StarRating";
import Movie from "./Movie";

const TopMovies = () => {
  const { data } = useQuery(["top movies"], getTop10Movies);
  console.log(data);
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl my-4">Top 10 Movies</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] overflow-x-auto gap-x-4 gap-y-8">
        {data?.map((movie) => (
          <li key={movie.id} className="">
            <Movie movie={movie} showActions />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMovies;
