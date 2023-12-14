import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | undefined>(undefined);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex space-x-8 items-center">
      <div className="text-dos-grey text-sm font-mono">&copy; {year}</div>
      <Link href="https://instagram.com/particlefm" target="_blank">
        <Image
          alt="Instagram Icon"
          src="/instagram.svg"
          width={23}
          height={23}
        ></Image>
      </Link>
      <Link href="https://mixcloud.com/particlefm" target="_blank">
        <Image
          alt="Mixcloud Icon"
          src="/mixcloud.svg"
          width={28}
          height={28}
        ></Image>
      </Link>
      <Link href="https://soundcloud.com/particlefm" target="_blank">
        <Image
          alt="Soundcloud Icon"
          src="/soundcloud.svg"
          width={28}
          height={28}
        ></Image>
      </Link>
      <Link href="https://twitter.com/particlefm" target="_blank">
        <Image
          alt="Twitter Icon"
          src="/twitter.svg"
          width={22}
          height={22}
        ></Image>
      </Link>
      <Link
        href="https://www.gofundme.com/f/help-internet-radio-station-particle-fm-grow"
        target="_blank"
      >
        <Image
          alt="GoFundMe Icon"
          src="/gofundme.svg"
          width={21}
          height={21}
        ></Image>
      </Link>
    </footer>
  );
}
