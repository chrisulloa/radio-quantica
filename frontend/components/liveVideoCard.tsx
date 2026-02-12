const LiveVideoCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <iframe
        className="w-full aspect-video"
        src="https://owncast.radioquantica.com/embed/video"
        title="Owncast"
        referrerPolicy="origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveVideoCard;
