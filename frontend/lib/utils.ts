export const serverBaseURL =
  process.env.NODE_ENV !== "development"
    ? "https://api.radioquantica.com"
    : process.env.SERVER_BASE_URL || "http://localhost:3000";

export const libretimeServerURL = "https://libretime.radioquantica.com";

export const defaultOgImage =
  "https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg";
