import TopMovies from "@/components/Movies/TopMovies";
import Head from "next/head";
import React from "react";

const TopTenMovies = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Top Ten Movies</title>
        <meta
          name="description"
          content="This are the top ten movies trending in the world right now"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <TopMovies />
      </main>
    </div>
  );
};

export default TopTenMovies;
