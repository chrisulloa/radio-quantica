const serverBaseURL =
  process.env.NODE_ENV !== "development"
    ? "https://api.particle.fm"
    : process.env.SERVER_BASE_URL || "http://localhost:3000";

export default serverBaseURL;
