import SEO from "@/components/common/SEO";
import TopMovies from "@/components/Movies/TopMovies";
import React from "react";

const TopTenMovies = () => {
  return (
    <div className="container mx-auto">
      <SEO
        title="Top Ten Movies | Kontist Movie"
        desc="This are the top ten movies trending in the world right now"
      />

      <main className="w-full py-8">
        <TopMovies />
      </main>
    </div>
  );
};

export default TopTenMovies;
