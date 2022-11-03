import SubscriptionPlans from "@/components/Movies/SubscriptionPlans";
import Head from "next/head";
import React from "react";

const TopTenMovies = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title>Subscriptions</title>
        <meta name="description" content="Flexible plans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <SubscriptionPlans />
      </main>
    </div>
  );
};

export default TopTenMovies;
