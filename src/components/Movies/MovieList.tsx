import { getMovieCarousel, getMovies } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StarRating } from "../common/StarRating";

const MovieList = () => {
  const { data } = useQuery(["movies"], getMovies);
  console.log(data);
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl my-4">Movies</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] overflow-x-auto gap-x-4 gap-y-8">
        {data?.map((movie) => (
          <li key={movie.id} className="">
            <Link href={`movie/${movie.id}`}>
              <img
                src={movie.poster}
                alt={movie.name}
                className="object-cover w-full h-[30vh] rounded-2xl shadow-md"
              />
              <div className="mt-2 font-medium">{movie.name}</div>
              <div className="space-x-1 text-sm opacity-90">
                <span>{movie.releaseYear}</span>
                <span>‧</span>
                <span>{movie.rating}/10</span>
                <StarRating rating={movie.rating / 2} />
              </div>
              <div className="text-sm">
                <span>Directed by {movie.director}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
