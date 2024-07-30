export type NowPlayingResponse = {
  currentShow: {
    name: string;
  }[];
  nextShow: {
    name: string;
    start_timestamp: string;
  }[];
  current: {
    name: string;
  };
};
