const LiveVideoCard = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-ratio py-4 px-4"
        src="https://owncast.radioquantica.com/embed/video"
        title="Owncast"
        height="800px"
        width="550px"
        referrerPolicy="origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveVideoCard;
