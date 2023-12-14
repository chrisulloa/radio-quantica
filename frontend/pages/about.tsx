import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import GoBackLink from "../components/goBack";

const descriptionOne =
  "Established in 2021 by a diverse group of artists, DJs, and music nerds, Particle FM is a DIY community internet radio station based in San Diego.";

const descriptionTwo =
  "We represent an intersection of cultures, identities, and musical styles. Our focus is on building a platform for women, LBGTQ, black, latino, asian, indigenous, immigrant, and underrepresented artists to showcase their work.";

const descriptionThree =
  "We are working to secure a space to broadcast from and to run workshops/classes centered around DJing, music production, music journalism, LGBTQ issues, and more.";

function AboutUsLargeImages() {
  return (
    <div className="flex-wrap justify-center overflow-hidden sm:pb-5 hidden sm:flex">
      <Image
        alt="Particle FM DJ picture"
        src="https://cdn.particle.fm/socials/about_us_1.jpg"
        className="shrink sm:w-1/3 h-auto p-2"
        width={800}
        height={800}
      ></Image>
      <Image
        alt="Particle FM DJ picture"
        src="https://cdn.particle.fm/socials/about_us_5.jpg"
        className="shrink sm:w-1/3 h-auto p-2"
        width={800}
        height={800}
      ></Image>
      <Image
        alt="Particle FM DJ picture"
        src="https://cdn.particle.fm/socials/about_us_2.jpg"
        className="shrink sm:w-1/3 h-auto p-2"
        width={800}
        height={800}
      ></Image>
    </div>
  );
}

function AboutUsSmallImage(props: { url: string; priority: boolean }) {
  return (
    <div className="flex justify-center sm:p-0">
      <Image
        alt="Particle FM DJ picture"
        src={props.url}
        className="grow w-[200px] h-auto sm:hidden sm:p-0"
        width={400}
        priority={props.priority}
        height={400}
      ></Image>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-4 sm:ml-8">
      <Head>
        <title>Our project and mission - PARTICLE.FM</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@particlefm" />
        <meta name="twitter:title" content="PARTICLE.FM | About Us" />
        <meta
          name="twitter:description"
          content="Particle FM's project and mission"
        />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="PARTICLE.FM"></meta>
        <meta property="og:title" content="Particle FM | About Us"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://particle.fm/about"></meta>
        <meta
          property="og:description"
          content="Particle FM's project and mission"
        />
        <meta
          property="og:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        ></meta>
        <meta
          property="og:image:secure_url"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta
          property="og:image:alt"
          content="Particle FM Social Media Banner"
        ></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
      </Head>
      <div className="md:w-5/6 lg:w-3/4 xl:w-2/4 w-full text-[18px] text-[#bfbfbf] px-5">
        <h2 className="text-white text-xl sm:pt-0 sm:hidden tracking-wider">
          PARTICLE.FM
        </h2>
        <hr className="my-4 mb-6 sm:m-0 sm:hidden"></hr>
        <AboutUsSmallImage
          url="https://cdn.particle.fm/socials/about_us_1.jpg"
          priority={true}
        ></AboutUsSmallImage>
        <h2 className="text-white pt-4 sm:pt-0">ABOUT US</h2>
        <hr className="my-4"></hr>
        <AboutUsLargeImages></AboutUsLargeImages>
        <p className="pb-5 sm:pb-0">{descriptionOne}</p>
        <AboutUsSmallImage
          url="https://cdn.particle.fm/socials/about_us_5.jpg"
          priority={false}
        ></AboutUsSmallImage>
        <br></br>
        <p className="pb-5 sm:pb-0">{descriptionTwo}</p>
        <AboutUsSmallImage
          url="https://cdn.particle.fm/socials/about_us_2.jpg"
          priority={false}
        ></AboutUsSmallImage>
        <br></br>
        <p className="pb-5 sm:pb-0">{descriptionThree}</p>

        <AboutUsSmallImage
          url="https://cdn.particle.fm/socials/about_us_4.jpg"
          priority={false}
        ></AboutUsSmallImage>
        <h2 className="text-white my-4 sm:my-4">PRESS</h2>
        <hr className="my-4"></hr>
        <Link
          className="text-white hover:text-black hover:bg-white"
          target="_blank"
          href="https://www.sandiegomagazine.com/features/particle-fm-radio/article_4934f8d8-1a7a-11ed-8ae3-2feace02224e.html"
        >
          San Diego Magazine
        </Link>
        <br></br>
        <Link
          className="text-white hover:text-black hover:bg-white"
          target="_blank"
          href="https://www.kpbs.org/events/2023/07/22/compressed-a-zine-and-music-fair"
        >
          KPBS Editor&apos;s Pick: COMPRESSED
        </Link>
        <br></br>
        <Link
          className="text-white hover:text-black hover:bg-white"
          target="_blank"
          href="https://www.sandiegouniontribune.com/lifestyle/people/story/2023-09-02/drop-the-beat-online-radio-show-sharing-global-music-preserving-culture-from-displaced-communities"
        >
          San Diego Union-Tribune: Borders of Sound
        </Link>
        <br></br>
        <Link
          className="text-white hover:text-black hover:bg-white"
          target="_blank"
          href="http://mixmag.com.cn/%e6%88%91%e4%bb%ac%e6%89%be%e5%88%b0%e4%b8%80%e4%b8%aa%e7%be%8e%e5%9b%bd%e7%9a%84%e5%9c%b0%e4%b8%8b%e7%94%b5%e5%ad%90%e9%9f%b3%e4%b9%90%e7%a4%be%e5%8c%ba%e7%94%b5%e5%8f%b0%e8%81%8a%e4%ba%86%e8%81%8a/"
        >
          Mixmag China
        </Link>
        <h2 className="text-white my-4">CONTACT</h2>
        <hr className="my-4"></hr>
        <a
          className="text-white hover:text-black hover:bg-white"
          href="mailto: info@particle.fm"
        >
          info@particle.fm
        </a>
        <br></br>
      </div>
      <div className="my-8">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
