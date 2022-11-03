import routes from "@/helpers/routes";
import Link from "next/link";
import React from "react";
import { StarRating } from "../common/StarRating";
import { IMovie } from "./types";

const Movie = ({
  movie,
  showActions = false,
}: {
  movie: IMovie;
  showActions?: boolean;
}) => {
  return (
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
      {showActions && (
        <div className="flex space-x-2 mt-2 justify-between">
          <Link
            href={routes.movieDetails(movie.id)}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm font-medium">
            See More...
          </Link>
          <Link
            href={routes.subscriptions}
            className="bg-green-300 text-white px-2 py-1 rounded-md text-sm font-medium">
            Subscribe
          </Link>
        </div>
      )}
    </Link>
  );
};

export default Movie;
