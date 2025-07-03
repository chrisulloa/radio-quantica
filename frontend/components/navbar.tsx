import Link from "next/link";
import React, { useCallback, useState } from "react";
import QuanticaLogo from "./icons/quanticaLogo";
import styles from "./navbar.module.css";
import { FacebookIcon } from "./icons/facebookIcon";
import { InstagramIcon } from "./icons/instagramIcon";
import { TwitterIcon } from "./icons/twitterIcon";
import { YoutubeIcon } from "./icons/youtubeIcon";
import IconButton from "./icons/iconButton";
import MixcloudIcon from "./icons/mixcloudIcon";

const navbarItems = [
  { text: "Streams", link: "/streams" },
  { text: "News", link: "/news" },
  { text: "Schedule", link: "/schedule" },
  { text: "Shows", link: "/shows" },
  { text: "About", link: "/about" },
  { text: "Donate", link: "/donate" },
  { text: "Chat", link: "/chat" },
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
        isCollapsed ? "h-12" : "flex-wrap pt-3"
      } items-center justify-between w-full md:py-0 px-4 md:p-4 text-lg bg-white
      `}
    >
      <Link
        href="/"
        className="flex items-center w-fit md:hover:opacity-50"
        id={styles.logoLink}
      >
        <div
          className="container w-[33px] h-[33px] hidden lg:block mb-1 mr-3"
          id={styles.quanticaLogo}
        >
          <QuanticaLogo></QuanticaLogo>
        </div>
        <div className="flex h-full gap-x-3 align-middle">
          <div
            className="container w-[16px] h-[16px] my-auto md:hidden"
            id={styles.quanticaLogoSmall}
          >
            <QuanticaLogo></QuanticaLogo>
          </div>

          <div className="flex align-middle my-auto pr-3 pt-1 md:pt-0">
            <div className="w-full h-full flex text-black">QUÂNTICA</div>
          </div>
        </div>
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
          isCollapsed ? "hidden h-full" : ""
        } md:flex md:grow md:w-auto justify-between`}
      >
        <ul className="text-lg h-full md:flex md:pt-0 items-center ml-2 mt-2 md:ml-0 md:mt-0">
          {navbarItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.link}
                target={item.newTab ? "_blank" : ""}
                onClick={collapseAfterClickHandler}
                className="block h-full hover:bg-black hover:text-white md:px-2"
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li>
            <div className="align-middle flex justify-start gap-x-4 my-2 md:hidden">
              <IconButton
                label={"YouTube"}
                url="https://www.youtube.com/channel/UCrJUlunwq20no8FY9oczb_A"
              >
                <YoutubeIcon></YoutubeIcon>
              </IconButton>
              <IconButton
                label={"Instagram"}
                url="https://www.instagram.com/quanticaonline"
              >
                <InstagramIcon></InstagramIcon>
              </IconButton>
              <IconButton label={"Twitter"} url="https://x.com/quanticaonline">
                <TwitterIcon></TwitterIcon>
              </IconButton>
              <IconButton
                label={"Facebook"}
                url="https://www.facebook.com/quanticaonline"
              >
                <FacebookIcon></FacebookIcon>
              </IconButton>
              <IconButton
                label={"Mixcloud"}
                url="https://www.mixcloud.com/quanticaonline/"
              >
                <MixcloudIcon></MixcloudIcon>
              </IconButton>
            </div>
          </li>
        </ul>
        <div className="align-middle lg:flex justify-start gap-x-3 my-2 hidden">
          <IconButton
            label={"YouTube"}
            url="https://www.youtube.com/channel/UCrJUlunwq20no8FY9oczb_A"
          >
            <YoutubeIcon></YoutubeIcon>
          </IconButton>
          <IconButton
            label={"Instagram"}
            url="https://www.instagram.com/quanticaonline"
          >
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton label={"Twitter"} url="https://x.com/quanticaonline">
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton
            label={"Facebook"}
            url="https://www.facebook.com/quanticaonline"
          >
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton
            label={"Mixcloud"}
            url="https://www.mixcloud.com/quanticaonline/"
          >
            <MixcloudIcon></MixcloudIcon>
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
