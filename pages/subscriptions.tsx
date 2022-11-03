import SEO from "@/components/common/SEO";
import SubscriptionPlans from "@/components/Movies/SubscriptionPlans";
import React from "react";

const TopTenMovies = () => {
  return (
    <div className="mx-auto">
      <SEO title="Subscriptions | Kontist Movie" desc="Flexible plans" />

      <main className="w-full">
        <SubscriptionPlans />
      </main>
    </div>
  );
};

export default TopTenMovies;
