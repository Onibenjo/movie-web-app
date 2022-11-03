import React from "react";
import { IReview } from "./types";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Title from "../common/Title";

const MovieReviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className="my-4">
      <Title>
        <p>User Reviews</p>
        <span className="ml-4 text-lg">({reviews.length})</span>
      </Title>
      <div className="">
        {reviews.map((review, idx) => (
          <div
            className="p-4 border border-gray-200 my-4 rounded-lg"
            key={`review-${idx}`}>
            <div className="font-medium text-lg">{review.userName}</div>
            <div className="text-gray-700 my-2">{review.review}</div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <AiOutlineLike />
                {review.likes}
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineDislike />
                {review.dislikes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;
