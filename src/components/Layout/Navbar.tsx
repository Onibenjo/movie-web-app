import routes from "@/helpers/routes";
import Link from "next/link";
import React from "react";
import clsx from "classnames";
import { useRouter } from "next/router";

const style =
  "px-4 py-2 text-base font-medium  transition-colors rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-700";

const Navbar = () => {
  const [isNavOpen, setIsOpen] = React.useState(false);
  const route = useRouter();
  const isActive = (currentRoute: string) => {
    return route.pathname === currentRoute ? "text-gray-900" : "text-gray-400";
  };

  const renderLinks = (
    <>
      <li>
        <Link href={routes.home} className={clsx(isActive(routes.home), style)}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href={routes.subscriptions}
          className={clsx(isActive(routes.subscriptions), style)}>
          Landing page
        </Link>
      </li>
      <li>
        <Link
          href={routes.topTen}
          className={clsx(isActive(routes.topTen), style)}>
          Top 10 Movies
        </Link>
      </li>
    </>
  );

  return (
    <nav className="w-full shadow-sm">
      <div className="max-w-[90%] mx-auto w-full flex justify-between items-center py-6">
        <div className="flex items-center justify-start w-1/4">
          <Link href={routes.home}>
            <span className="sr-only">Home</span>
            <span className="text-2xl font-semibold">
              <span className="text-indigo-500">Kon</span>tist{" "}
            </span>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isNavOpen)}
          className="inline-flex items-center justify-center text-gray-400 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isNavOpen ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>

          {!isNavOpen ? (
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* <!-- Desktop links --> */}
        <ul className="items-center justify-between hidden lg:flex">
          {renderLinks}
        </ul>
      </div>
      {/* <!-- Mobile menu --> */}
      {isNavOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col items-center space-y-3 lg:hidden pb-6"
          // @click.away="isNavOpen = false"
        >
          {renderLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
