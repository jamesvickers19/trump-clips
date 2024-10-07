import "./App.css";
import { trumpVideos, Video } from "./TrumpVideos";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import useWindowDimensions from "./WindowDimensions";

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function App() {
  const setRandomTrumpVideo = () => {
    const unseenVideos = trumpVideos.filter((v) => !seenVideos.has(v.videoId));
    let videosToChooseFrom = unseenVideos;
    if (unseenVideos.length === 0) {
      setSeenVideos(new Set<string>());
      videosToChooseFrom = trumpVideos;
    }
    setSelectedVideo(getRandomElement(videosToChooseFrom));
  };
  const [seenVideos, setSeenVideos] = useState<Set<string>>(new Set<string>());
  const [selectedVideo, setSelectedVideo] = useState<Video>(
    getRandomElement(trumpVideos)
  );
  useEffect(() => {
    setSeenVideos(seenVideos.add(selectedVideo.videoId));
  }, [seenVideos, selectedVideo]);
  const { windowHeight, windowWidth } = useWindowDimensions();

  return (
    <div style={styles.container}>
      <h1 style={styles.description}>{selectedVideo.description}</h1>
      <button
        style={styles.newVideoButton}
        onClick={() => setRandomTrumpVideo()}
      >
        Play a new video
      </button>
      <YouTube
        videoId={selectedVideo.videoId}
        opts={{
          height: 0.75 * windowHeight,
          width: 0.9 * windowWidth,
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            start: selectedVideo.startSeconds,
            end: selectedVideo.endSeconds,
            autoplay: 1,
          },
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  description: {
    textAlign: "center" as const,
  },
  newVideoButton: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30,
  },
  sourceLink: {
    fontSize: 24,
  },
};

export default App;
