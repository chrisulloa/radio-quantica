import Link from "next/link";
import React, { useCallback, useState } from "react";
import { QuanticaLogo } from "./quanticaLogo";
import styles from "./navbar.module.css";

const navbarItems = [
  { text: "Shows", link: "/shows" },
  { text: "News", link: "/news" },
  { text: "About", link: "/about" },
  { text: "Schedule", link: "schedule" },
  { text: "Donate", link: "/donate" },
  {
    text: "Merch",
    link: "https://quanticaonline.bandcamp.com/merch",
    newTab: true,
  },
];

export function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const collapseClickHandler = useCallback(
    (e: React.MouseEvent<SVGElement>) => {
      setIsCollapsed(!isCollapsed);
      e.preventDefault();
    },
    [isCollapsed]
  );

  const collapseAfterClickHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isCollapsed) {
        setIsCollapsed(true);
      }
    },
    [isCollapsed]
  );

  return (
    <nav
      className={`flex ${
        isCollapsed ? "h-12" : "flex-wrap"
      } items-center justify-between w-full md:py-0 p-4 text-lg bg-white transition-all ease-in-out duration-200 
      `}
    >
      <div className="h-full pr-2 items-center sm:flex hidden">
        <Link
          href="/"
          className="w-full px-2 block text-lg text-black sm:hover:opacity-40"
        >
          QUÂNTICA
        </Link>
      </div>

      <Link href="/" className="text-black sm:hidden">
        QUÂNTICA
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer md:hidden block"
        onClick={collapseClickHandler}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`w-full ${
          isCollapsed ? "hidden h-full" : "py-0"
        } md:flex md:flex-grow md:w-auto`}
      >
        <ul className="text-lg h-full md:flex md:justify-between md:pt-0 items-center">
          {navbarItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.link}
                target={item.newTab ? "_blank" : ""}
                onClick={collapseAfterClickHandler}
                className="px-2 block h-full hover:bg-black hover:text-white"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="container w-[33px] h-[33px] hidden lg:block"
        id={styles.quanticaLogo}
      >
        <QuanticaLogo></QuanticaLogo>
      </div>
    </nav>
  );
}
