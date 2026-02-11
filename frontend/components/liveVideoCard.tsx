const LiveVideoCard = () => {
  return (
    <iframe
      className="w-full aspect-ratio py-4 px-4"
      src="https://owncast.radioquantica.com/embed/video"
      title="Owncast"
      height="650px"
      width="550px"
      referrerPolicy="origin"
      allowFullScreen
    ></iframe>
  );
};

export default LiveVideoCard;
