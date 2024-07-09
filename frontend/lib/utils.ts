const serverBaseURL =
  process.env.NODE_ENV !== "development"
    ? "https://squid-app-svk3v.ondigitalocean.app"
    : process.env.SERVER_BASE_URL || "http://localhost:3000";

export default serverBaseURL;