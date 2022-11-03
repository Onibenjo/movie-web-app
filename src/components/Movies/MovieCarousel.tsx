import { getMovieCarousel } from "@/helpers/api";
import routes from "@/helpers/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { StarRating } from "../common/StarRating";

const MovieCarousel = () => {
  const { data } = useQuery(["movie carousel"], () => getMovieCarousel());
  console.log(data);
  return (
    <div className="w-full max-w-[100vw]">
      <h2 className="font-bold text-2xl my-4">Trending</h2>
      <ul className="grid grid-cols-[repeat(5,minmax(250px,1fr))] gap-x-6 overflow-x-auto flex-nowrap grid-rows-1 carousel">
        {data?.map((movie) => (
          <li key={movie.id} className="w-[250px]">
            <>
              <img
                src={movie.image}
                alt={movie.name}
                className="object-cover w-full h-[30vh] rounded-2xl shadow-md"
              />
              <div className="flex flex-col">
                <div className="flex-1">
                  <div className="mt-2 font-medium">{movie.name}</div>
                  <div className="space-x-1 text-sm opacity-90">
                    <span>{movie.rating}/10</span>
                    <StarRating rating={movie.rating / 2} />
                  </div>
                </div>

                <div className="grid mt-2 gap-2">
                  <Link
                    href={routes.movieDetails(movie.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm font-medium w-full">
                    See More...
                  </Link>
                  <Link
                    href={routes.subscriptions}
                    className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-medium w-full">
                    Subscribe
                  </Link>
                </div>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCarousel;
