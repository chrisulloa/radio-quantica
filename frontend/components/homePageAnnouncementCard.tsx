import Link from "next/link";
import Image from "next/image";
import { getHomePageData } from "../lib/homePage";

type HomePageData = NonNullable<Awaited<ReturnType<typeof getHomePageData>>>;
type AnnouncementCard = NonNullable<HomePageData["announcementCards"]>[number];

const HomePageAnnouncementCard = ({ cards }: { cards: AnnouncementCard[] }) => {
  return (
    <div className="lg:fixed lg:w-[175px] xl:w-[220px] flex flex-col gap-6">
      {cards.map((card, i) => (
        <div key={i} className="text-white p-3 border flex flex-col">
          {card.image?.url && (
            <div className="flex justify-center h-[90px]">
              <Image
                src={card.image.url}
                alt={card.image.alt || card.title || "Rádio Quântica"}
                height={90}
                width={220}
                className="object-scale-down"
              ></Image>
            </div>
          )}
          {card.subtitle && (
            <p className="mx-auto font-space-mono text-sm px-1 text-center mt-3">
              {card.subtitle}
            </p>
          )}
          {card.title && card.url && (
            <Link
              href={card.url}
              target={card.newTab ? "_blank" : undefined}
              className="border px-3 py-2 text-sm w-full block text-center mt-4 hover:text-black hover:bg-white"
            >
              {card.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePageAnnouncementCard;
