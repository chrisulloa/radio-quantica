import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./player.module.css";
import useSWR from "swr";
import axios from "axios";
import { NowPlayingResponse } from "../lib/services/azuracast";
import serverBaseURL from "../lib/utils";
import { DateTime } from "luxon";

function VolumeButton({ volume }: { volume: number }) {
  let file;
  switch (true) {
    case volume === 0:
      file = "/volume-x.svg";
      break;
    case volume && volume < 0.33:
      file = "/volume.svg";
      break;
    case volume && volume >= 0.33 && volume <= 0.66:
      file = "/volume-1.svg";
      break;
    case volume && volume > 0.66:
      file = "/volume-2.svg";
      break;
    default:
      file = "/volume.svg";
      break;
  }

  return <Image src={file} alt="Volume Button" fill={true} sizes="4vw"></Image>;
}

function PauseOrPlayButton({
  isPaused,
  className,
  onClick,
}: {
  isPaused: boolean;
  className: string;
  onClick: (e: any) => void;
}) {
  return (
    <Image
      onClick={onClick}
      src={isPaused ? "/play.svg" : "/pause.svg"}
      alt="Pause/Play Button"
      className={className}
      width={12}
      height={12}
    />
  );
}

// Handle adding infinite marquee when width is less than 420px
function CurrentShow({
  showName,
  viewportWidth,
}: {
  showName: string;
  viewportWidth: number | undefined;
}) {
  const showElement =
    viewportWidth && viewportWidth < 420 ? (
      <div className="flex justify-between">
        <div>&nbsp;&nbsp;{showName}&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;{showName}&nbsp;&nbsp;</div>
      </div>
    ) : (
      <div>{showName}</div>
    );
  return <div className={`${styles["banner-scroll"]}`}>{showElement}</div>;
}

function Player({
  isLive,
  nowPlaying,
  isPaused,
  volume,
  viewportWidth,
  volumeSliderHandler,
  volumeClickHandler,
  pauseClickHandler,
}: {
  isLive: boolean;
  nowPlaying: string;
  isPaused: boolean;
  volume: number;
  viewportWidth: number | undefined;
  volumeSliderHandler: (e: any) => void;
  volumeClickHandler: (e: any) => void;
  pauseClickHandler: (e: any) => void;
}) {
  return (
    <nav className="flex w-screen h-16 items-center justify-between bg-black border-t text-white">
      <PauseOrPlayButton
        className="ml-4 mr-6 relative cursor-pointer w-[.93rem] justify-center"
        isPaused={isPaused}
        onClick={pauseClickHandler}
      ></PauseOrPlayButton>

      <div className="text-2xl grow flex items-center w-full truncate overflow-hidden relative font-space-mono uppercase">
        <CurrentShow viewportWidth={viewportWidth} showName={nowPlaying} />
      </div>

      {isLive ? (
        <div className="flex grow justify-center items-center ml-4 mr-4 sm:mx-5 md:m-0 h-full">
          <svg
            className="block m-auto animate-pulse h-full"
            height="25"
            width="25"
          >
            <circle cx="50%" cy="50%" r="6" fill="red" />
          </svg>
          <div className="text-xs invisible sm:visible h-full flex items-center w-0 sm:ml-2 sm:w-full">
            LIVE
          </div>
        </div>
      ) : (
        <div className="ml-5 sm:ml-0"></div>
      )}

      <div className="md:flex ml-5 mr-5 hidden">
        <div className="hidden group relative md:flex justify-center cursor-pointer">
          <button className="mr-12 h-6" onClick={volumeClickHandler}>
            <VolumeButton volume={volume}></VolumeButton>
          </button>
          <div className="p-5 bottom-6 justify-center absolute scale-0 transition-all group-hover:scale-100">
            <label htmlFor={styles.slider} className="invisible">
              Volume Slider
            </label>
            <input
              id={styles.slider}
              onChange={volumeSliderHandler}
              value={volume * 100}
              type="range"
              className="rounded-lg appearance-none cursor-pointer"
            ></input>
          </div>
        </div>
      </div>
    </nav>
  );
}

const fetcher = (url: string) =>
  axios.get<NowPlayingResponse>(url).then((res) => res.data);

const initializeAudio = (
  setPause: React.Dispatch<React.SetStateAction<boolean>>,
  setVolume: React.Dispatch<React.SetStateAction<number>>
) => {
  const audio = new Audio("https://stream.radioquantica.com:8443/stream");
  audio.addEventListener("play", () => {
    setPause(false);
  });

  audio.addEventListener("pause", () => {
    setPause(true);
  });

  audio.addEventListener("volumechange", (e: any) => {
    setVolume(audio.volume);
  });
  return audio;
};

const PlayerView = () => {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPaused, setPause] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);

  const { data, error, isLoading } = useSWR(
    `${serverBaseURL}/api/live-info`,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    window.addEventListener("resize", () =>
      setViewportWidth(window.innerWidth)
    );
  }, []);

  useEffect(() => {
    if (data) {
      const show = data.currentShow[0]?.name || data.current?.name;
      const nextShow = data.nextShow[0];
      const nextShowName = nextShow.name;
      const nextShowStartTime = nextShow.start_timestamp;
      if (show) {
        setDisplay(`NOW: ${show}`);
      } else if (nextShow && nextShowName && nextShowStartTime) {
        const nextShowStartTimeFormatted = DateTime.fromFormat(
          nextShowStartTime,
          "yyyy-MM-dd HH:mm:ss"
        ).toFormat("M/d HH:mm");
        setDisplay(`NEXT SHOW: ${nextShowName} ${nextShowStartTimeFormatted}`);
      } else {
        setDisplay("Offline");
      }
    }
    if (error) setDisplay("Offline");
  }, [data, error]);

  const pauseClickHandler = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (!audioRef.current) {
        audioRef.current = initializeAudio(setPause, setVolume);
      }
      const audio = audioRef.current;
      if (audio && isPaused) audio.play();
      if (audio && !isPaused) audio.pause();

      e.preventDefault();
    },
    [audioRef, isPaused, setPause, setVolume]
  );

  const volumeSliderHandler = useCallback(
    (e: any) => {
      if (!audioRef.current) {
        audioRef.current = initializeAudio(setPause, setVolume);
      }
      const audio = audioRef.current;
      if (audio) audio.volume = e.currentTarget.value / 100;

      e.preventDefault();
    },
    [audioRef]
  );

  const volumeClickHandler = useCallback(
    (e: any) => {
      if (!audioRef.current) {
        audioRef.current = initializeAudio(setPause, setVolume);
      }
      const audio = audioRef.current;
      if (audio) audio.volume = audio.volume === 0 ? 1 : 0;

      e.preventDefault();
    },
    [audioRef]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.title = `${display} - Rádio Quântica`;
  }, [audioRef, display]);

  return (
    <Player
      isLive={false}
      nowPlaying={display}
      isPaused={isPaused}
      volume={volume}
      viewportWidth={viewportWidth}
      volumeSliderHandler={volumeSliderHandler}
      volumeClickHandler={volumeClickHandler}
      pauseClickHandler={pauseClickHandler}
    ></Player>
  );
};

export default PlayerView;
