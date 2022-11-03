import React from "react";
import { MdCheck } from "react-icons/md";
import clsx from "classnames";

const plans = [
  {
    name: "Easy",
    description: "All the basics for businesses that are just getting started.",
    price: {
      monthly: 29,
      annually: 29 * 12 - 199,
    },
    features: ["One project", "Your dashboard"],
  },
  {
    name: "Basic",
    description: "Better for growing businesses that want more customers.",
    price: {
      monthly: 59,
      annually: 59 * 12 - 100,
    },
    features: [
      "Two projects",
      "Your dashboard",
      "Components included",
      "Advanced charts",
    ],
  },
  {
    name: "Custom",
    description: "Advanced features for pros who need more customization.",
    price: {
      monthly: 139,
      annually: 139 * 12 - 100,
    },
    features: [
      "Unlimited projects",
      "Your dashboard",
      "+300 Components",
      "Chat support",
    ],
  },
];

const SubscriptionPlans = () => {
  const [billPlan, setSelectedPlan] = React.useState("monthly");
  return (
    <>
      <div className="container mx-auto antialiased text-gray-900 bg-white">
        <main className="mx-4 my-16">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
              Our <span className="font-semibold">plans</span> for your{" "}
              <span className="font-semibold">entertainment</span>
            </h1>
            <p className="text-sm font-normal text-gray-400">
              See below our main three plans
            </p>
            <p className="text-sm font-normal text-gray-400">
              It start from here! You can watch any movie.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 space-x-4">
            <span className="text-base font-medium">Bill Monthly</span>
            <button
              className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                setSelectedPlan(billPlan == "monthly" ? "annually" : "monthly");
              }}>
              <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
              <div
                className={clsx(
                  "absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1",
                  billPlan == "monthly" && "translate-x-0",
                  billPlan == "annually" && "translate-x-8"
                )}></div>
            </button>
            <span className="text-base font-medium">Bill Annually</span>
          </div>
          <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
            {plans.map((plan) => (
              <section
                className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md"
                key={plan.price.monthly}>
                <div className="flex-shrink-0">
                  <span
                    className={clsx(
                      "text-4xl font-medium tracking-tight",
                      plan.name == "Basic" ? "text-green-500" : ""
                    )}>
                    $
                    {billPlan == "monthly"
                      ? plan.price.monthly
                      : plan.price.annually}
                  </span>
                  <span className="text-gray-400">
                    {billPlan == "monthly" ? "/month" : "/year"}
                  </span>
                </div>

                <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                  <h2 className="text-2xl font-normal">{plan.name}</h2>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li className="flex items-start" key={feature}>
                      <svg
                        className="w-6 h-6 text-green-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex-shrink-0 pt-4">
                  <button
                    className={clsx(
                      "inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      plan.name == "Basic"
                        ? "bg-indigo-500 text-white hover:bg-indigo-700"
                        : "hover:bg-indigo-500 hover:text-white"
                    )}>{`Get ${plan.name}`}</button>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default SubscriptionPlans;
