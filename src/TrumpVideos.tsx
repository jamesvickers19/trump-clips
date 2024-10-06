export interface Video {
  description: string;
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
}

export const trumpVideos: Video[] = [
  {
    description:
      "If an electric boat is sinking, do you choose to get electrocuted or eaten by a shark?",
    startSeconds: 64,
    endSeconds: 119,
    videoId: "dh_Fo8XoS1A",
  },
  {
    description: "I have a better beach body than Sleepy Joe",
    videoId: "-Isn2i8vm9Y",
  },
  {
    description: "I said 'no way' to Vladimir Putin'",
    videoId: "b4b9Ong-URI",
    startSeconds: 28,
    endSeconds: 43,
  },
  {
    description: "They're eating the dogs!  They're eating the cats!",
    videoId: "5llMaZ80ErY",
  },
];
