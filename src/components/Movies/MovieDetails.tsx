import React from "react";
import { StarRating } from "../common/StarRating";
import MovieReviews from "./MovieReviews";
import Storyline from "./Storyline";
import TopCast from "./TopCast";
import { IMovieDetails } from "./types";

const MovieDetails = ({ movie }: { movie?: IMovieDetails }) => {
  if (!movie) return null;

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={movie.images[0]}
          alt={movie.name}
          className="object-cover w-full h-[40vh]"
        />
        <div className="my-4 text-4xl font-bold px-8">{movie.name}</div>
      </div>
      <div className="px-8 mb-4">
        <div className="flex flex-col">
          <div className="italic font-medium mb-4">
            Directed by {movie.director}
          </div>
          <div className="rent">
            <div className="flex items-center">Rent: {movie.rentPrice}</div>
          </div>
          <div className="flex justify-between text-xl">
            <div className="flex items-center font-medium">
              <div className="mr-2">{movie.releaseYear}</div>
              <div className="mr-2">‧</div>
              <div className="mr-2">{movie.rating}/10</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">{movie.rating}</div>
              <StarRating rating={movie.rating / 2} />
            </div>
          </div>
        </div>
        <Storyline storyline={movie.storyline} />
        <TopCast casts={movie.topCast} />
        <MovieReviews reviews={movie.reviews} />
      </div>
    </div>
  );
};

export default MovieDetails;
