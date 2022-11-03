import { getMovieCarousel } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const MovieCarousel = () => {
  const { data } = useQuery(["movie carousel"], () => getMovieCarousel());
  console.log(data);
  return (
    <div className="w-full">
      <ul className="flex space-x-6 overflow-x-auto flex-nowrap">
        {data?.map((movie) => (
          <li
            key={movie.id}
            className="w-[350px] border border-gray-600 rounded-xl">
            <img
              src={movie.image}
              alt={movie.name}
              className="object-cover h-[30vh] w-[350px]"
            />
            <div className="px-4 py-8">{movie.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCarousel;
