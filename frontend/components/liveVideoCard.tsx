import LiteYouTubeEmbed from "react-lite-youtube-embed";

const LiveVideoCard = (props: { videoId: string; imageUrl: string }) => {
  const { videoId, imageUrl } = props;
  return (
    <div className="w-full">
      <LiteYouTubeEmbed
        thumbnail={`${imageUrl}`}
        aspectHeight={9}
        aspectWidth={16}
        id={`${videoId}`}
        title={"Live now!"}
      ></LiteYouTubeEmbed>
    </div>
  );
};

export default LiveVideoCard;
