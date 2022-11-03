import React from "react";
import Title from "../common/Title";
import { ITopCast } from "./types";

const TopCast = ({ casts }: { casts: ITopCast[] }) => {
  return (
    <div className="my-4">
      <Title>
        <p>Top Cast</p>
        <span className="ml-4 text-lg">({casts.length})</span>
      </Title>
      <div className="flex flex-wrap gap-x-4">
        {casts.map((cast, idx) => (
          <div
            className="p-4 md:border border-gray-200 my-4 md:rounded-lg flex items-center"
            key={`cast-${idx}`}>
            <div className="mr-2">
              <div className="rounded-full h-20 w-20 bg-black" />
            </div>
            <div className="">
              <div className="font-medium text-lg">{cast.name}</div>
              <div className="text-gray-500 mt-2">{cast.roleName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCast;
