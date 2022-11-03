import routes from "@/helpers/routes";
import Link from "next/link";
import React from "react";
import clsx from "classnames";
import { useRouter } from "next/router";

const style = "text-sm text-gray-600 hover:text-gray-900";

const Navbar = () => {
  const route = useRouter();
  const isActive = (currentRoute: string) => {
    return route.pathname === currentRoute ? "font-bold" : "font-medium";
  };
  return (
    <nav className="w-full shadow-sm">
      <div className="max-w-[90%] mx-auto w-full flex justify-between items-center py-6">
        <div className="logo">
          <Link href="/">
            <img src="/logo.svg" alt="Kontist Movie" />
          </Link>
        </div>

        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link
              href={routes.home}
              className={clsx(isActive(routes.home), style)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
