import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deviceIsMobile } from "../lib/deviceInfo";

const _encode = (v: string) => {
  if (v === undefined || v === null) return "";
  return encodeURIComponent(v);
};

const queryString = (params: { [key: string]: string }) =>
  Object.keys(params)
    .map((key) => _encode(key) + "=" + _encode(params[key]))
    .join("&");

const socialNetworks = ["Facebook", "Twitter", "WhatsApp", "Telegram"] as const;
type SocialNetworkTuple = typeof socialNetworks;
type SocialNetwork = SocialNetworkTuple[number];

const twitterIntentInfo = (text: string, currentUrl: string) => ({
  text,
  url: currentUrl,
  via: "particlefm",
  hashtags: "internetradio",
});

const telegramLinkInfo = (text: string, currentUrl: string) => ({
  url: currentUrl,
  text: `${text} ${currentUrl}`,
});

const whatsAppLinkInfo = (text: string, currentUrl: string) => ({
  text: text,
  url: currentUrl,
});

const webShareInfo = (text: string, currentUrl: string) => ({
  title: `PARTICLE.FM`,
  text,
  url: currentUrl,
});

//telegram.me/share/url?url=https://refugeworldwide.com/radio/the-move-78-show-aver-05-jan-2023&text=Refuge%20Worldwide%20is%20a%20community%20radio%20station%20and%20fundraising%20platform%20based%20in%20Berlin.

const SocialLink = (props: {
  fullTitle: string;
  network: SocialNetwork;
  currentUrl: string;
  black?: boolean;
}) => {
  const { network, fullTitle, currentUrl } = props;

  let url;
  switch (network) {
    case "Facebook":
      url = `https://www.facebook.com/sharer/sharer.php?${queryString({
        u: currentUrl,
      })}`;
      break;
    case "Telegram":
      url = `https://t.me/share/url?${queryString(
        telegramLinkInfo(fullTitle, currentUrl)
      )}`;
      break;
    case "Twitter":
      url = `https://twitter.com/intent/tweet?${queryString(
        twitterIntentInfo(fullTitle, currentUrl)
      )}`;
      break;
    case "WhatsApp":
      url = `https://wa.me/?${queryString(
        whatsAppLinkInfo(fullTitle, currentUrl)
      )}`;
      break;
    default:
      break;
  }

  if (props.black) {
    return (
      <a
        className="block hover:bg-white hover:text-black px-2 w-full leading-snug"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {props.network}
      </a>
    );
  }

  return (
    <a
      className="block hover:bg-black hover:text-white px-2 w-full leading-snug"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {props.network}
    </a>
  );
};

const ShareButton = (props: { text: string; black?: boolean }) => {
  const router = useRouter();
  const currentUrl = `https://particle.fm${router.asPath}`;

  // Enable web share if available
  const webShare = () => {
    if (navigator.share) {
      const info = webShareInfo(props.text, currentUrl);
      navigator
        .share(info)
        .then(() => {})
        .catch((error) => console.log("Error sharing", error));
    }
  };

  // Disable drop down for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(deviceIsMobile());
  }, []);

  const hoverEffect = !isMobile ? "group-hover:scale-100" : "";

  return (
    <button
      className="group hover:cursor-default drop-shadow"
      onClick={webShare}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${props.black ? "bg-black" : "bg-white"} rounded ${
          props.black ? "text-white border border-white" : "text-black"
        } px-2 py-1 my-9 justify-center absolute scale-0 transition-all ${hoverEffect}`}
      >
        <ul>
          {socialNetworks.map((social) => {
            return (
              <li key={social}>
                <SocialLink
                  fullTitle={props.text}
                  currentUrl={currentUrl}
                  network={social}
                  black={props.black}
                ></SocialLink>
              </li>
            );
          })}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${props.black ? "stroke-black" : "stroke-white"} w-7 h-9`}
      >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    </button>
  );
};

export default ShareButton;
