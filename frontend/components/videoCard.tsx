import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { formatCompactShowDate } from "../lib/dates";

const VideoCard = (props: {
  video: {
    title: string;
    id?: string | null;
    videoId?: string | null;
    image?: { url?: string | null } | null;
    date?: string | null;
  };
}) => {
  const { video } = props;

  return (
    <div>
      <LiteYouTubeEmbed
        thumbnail={`${video.image?.url}`}
        aspectHeight={9}
        aspectWidth={16}
        id={`${video.videoId}`}
        title={video.title}
      ></LiteYouTubeEmbed>
      <div className="text-white font-space-mono justify-center w-full flex text-sm mt-2">
        {formatCompactShowDate(`${video.date}`)} - {video.title}
      </div>
    </div>
  );
};

export default VideoCard;
