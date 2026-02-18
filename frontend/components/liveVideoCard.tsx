const LiveVideoCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto md:p-4 md:-mb-16">
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
