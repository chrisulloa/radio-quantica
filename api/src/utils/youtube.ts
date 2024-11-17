// eslint-disable-next-line import/prefer-default-export
export const youtubeVideoId = (url: string) => {
  const splitted = url.split('v=');
  const splittedAgain = splitted[1].split('&');
  return splittedAgain[0];
};

export const youtubeImageUrl = (videoId: string) =>
  `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;

export const youtubeLiveImageUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
