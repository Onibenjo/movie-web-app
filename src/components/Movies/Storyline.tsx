import React from "react";
import Title from "../common/Title";
import { ITopCast } from "./types";

const Storyline = ({ storyline }: { storyline: string }) => {
  return (
    <div className="my-4">
      <Title>
        <p>Storyline</p>
      </Title>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="">{storyline}</div>
      </div>
    </div>
  );
};

export default Storyline;
