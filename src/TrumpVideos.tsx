// export interface Video {
//   description: string;
//   videoId: string;
//   startSeconds?: number;
//   endSeconds?: number;
// }

// export const trumpVideos: Video[] = [
//   //   {
//   //     description:
//   //       "If an electric boat is sinking, do you choose to get electrocuted or eaten by a shark?",
//   //     startSeconds: 64,
//   //     endSeconds: 119,
//   //     videoId: "dh_Fo8XoS1A",
//   //   },
//   //   {
//   //     description: "I have a better beach body than Sleepy Joe",
//   //     videoId: "-Isn2i8vm9Y",
//   //   },
//   {
//     description: "I said 'no way' to Vladimir Putin'",
//     videoId: "b4b9Ong-URI",
//     startSeconds: 28,
//     endSeconds: 43,
//   },
// ];

export interface Video {
  description: string;
  sourceUrl: string;
  videoUrl: string;
}

export const trumpVideos: Video[] = [
  {
    description: "I said 'no way' to Vladimir Putin'",
    sourceUrl: "https://youtu.be/b4b9Ong-URI?si=7J8Disob8T1ufNOA&t=28",
    videoUrl:
      "https://drive.google.com/file/d/1wvqlJ0b3AOZGevkuPlUeuG78E-bzqgAZ/preview",
  },
  {
    description:
      "If an electric boat is sinking, do you choose to get electrocuted or eaten by a shark?",
    sourceUrl: "https://youtu.be/dh_Fo8XoS1A?si=kdSNH5lM39rNM10B&t=63",
    videoUrl:
      "https://drive.google.com/file/d/1MI3NRy5KGzH7prmfZq72s05m4si6PJYA/preview",
  },
  {
    description: "They're eating the dogs!  They're eating the cats!",
    sourceUrl: "https://www.youtube.com/watch?v=5llMaZ80ErY",
    videoUrl:
      "https://drive.google.com/file/d/1LDfQin5JLeg_jDaeFHA873Y_GRzroEVu/preview",
  },
];
