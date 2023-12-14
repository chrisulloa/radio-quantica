import Image from "next/image";
import Link from "next/link";

const DonationPopup = (props: {
  isVisible: boolean;
  onClick: (e: any) => any;
}) => {
  return (
    <div className={`${props.isVisible ? `` : `hidden`}`}>
      <div
        className="fixed z-[55] w-full h-full top-0 left-0 bg-black opacity-50"
        onClick={props.onClick}
      ></div>
      <div
        className={`fixed left-0 right-0 z-[100] w-5/6 sm:w-4/6 lg:w-5/12 mx-auto top-32 border-4 border-black rounded-lg bg-neon-green text-left text-black`}
      >
        <div className="cursor-pointer p-4" onClick={props.onClick}>
          <Image
            src="/x.svg"
            width={10}
            height={10}
            alt="Close Popup"
            className="absolute w-6 h-auto text-black top-3 right-3 text-2xl font-sans"
          ></Image>
        </div>
        <div className="flex justify-center mt-0">
          <Image
            src="/support_us_black.png"
            alt="Support us image"
            className={`w-3/4 h-auto brightness`}
            width={500}
            height={200}
          ></Image>
        </div>

        <div className="h-auto w-full bg-black text-neon-green mt-5 p-5">
          <div className="text-xl text-white">Like what you hear?</div>
          <div className="text-2xl text-neon-green">Support our station.</div>
          <p className="text-[#d5d5d5] mt-4">
            All of our shows are specially curated by hardworking DJs and
            artists. Help us cover maintenance costs and find a studio so that
            we can keep this project going.
          </p>
          <div className="flex justify-left mt-5">
            <Link
              target="_blank"
              className="border border-neon-green px-8 py-2 inline-block mr-6 hover:bg-neon-green hover:text-black rounded-md"
              href="https://www.gofundme.com/f/help-internet-radio-station-particle-fm-grow"
            >
              Donate
            </Link>
            <Link
              target="_blank"
              className="border border-neon-green px-8 py-2 inline-block hover:bg-neon-green hover:text-black rounded-md"
              href="https://particlefm.bandcamp.com/"
            >
              Merch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;
