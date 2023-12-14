export type NowPlayingResponse = {
  live: {
    is_live: boolean;
    streamer_name: string;
  };
  now_playing: {
    song: {
      title?: string;
    };
    streamer?: string;
  };
};
