"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default function LightboxImage({
  src,
  fullSrc,
  alt,
  width,
  height,
  quality,
  className,
  sizes,
  blurDataURL,
  priority,
}: {
  src: string;
  fullSrc: string;
  alt: string;
  width: number;
  height?: number;
  quality?: number;
  className?: string;
  sizes?: string;
  blurDataURL?: string;
  priority?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // The inline thumbnail's width/height cap how large a plain <img> is
  // allowed to render even with `max-w-full`/`h-auto` CSS — browsers won't
  // scale past the declared intrinsic size. Scale both dimensions up
  // together so the full-size render can actually fill the lightbox while
  // keeping the same aspect ratio.
  const FULL_WIDTH = 1920;
  const fullHeight = height
    ? Math.round((height / width) * FULL_WIDTH)
    : undefined;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-zoom-in border-0 bg-transparent p-0 block w-full h-full"
        aria-label={`Expand image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          className={cn("w-full h-auto block", className)}
          sizes={sizes}
          blurDataURL={blurDataURL}
          priority={priority}
        ></Image>
      </button>
      {isOpen && (
        <>
          <div
            className="fixed z-55 w-full h-full top-0 left-0 bg-black opacity-90 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="fixed z-100 inset-2 sm:inset-6 flex items-center justify-center cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="cursor-pointer p-4 absolute top-0 right-0 z-10 border-0 bg-transparent"
            >
              <Image
                src="/x.svg"
                width={10}
                height={10}
                alt=""
                className="w-6 h-auto invert"
              ></Image>
            </button>
            {/* Intrinsically sized (not `fill`) so this element's box matches
                the visible photo exactly — clicks landing in the empty flex
                space around it (not on the photo itself) reach the
                container's onClick above and close the lightbox. */}
            <Image
              src={fullSrc}
              alt={alt}
              width={FULL_WIDTH}
              height={fullHeight}
              className="max-w-full max-h-full w-auto h-auto object-contain cursor-default"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            ></Image>
          </div>
        </>
      )}
    </>
  );
}
