import { getTop10Movies } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TopMovies = () => {
  const { data } = useQuery(["top movies"], () => getTop10Movies());
  console.log(data);
  return <div>TopMovies</div>;
};

export default TopMovies;
