import "./App.css";
import { trumpVideos, Video } from "./TrumpVideos";
import { useEffect, useState } from "react";

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function App() {
  const setRandomTrumpVideo = () => {
    const unseenVideos = trumpVideos.filter((v) => !seenVideos.has(v.videoUrl));
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
    setSeenVideos(seenVideos.add(selectedVideo.videoUrl));
  }, [selectedVideo]);

  return (
    <div style={styles.container}>
      <h1 style={styles.description}>{selectedVideo.description}</h1>
      <a
        style={styles.sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        href={selectedVideo.sourceUrl}
      >
        (source)
      </a>
      <button
        style={styles.newVideoButton}
        onClick={() => setRandomTrumpVideo()}
      >
        Click here or refresh the page to get a new video
      </button>
      <iframe
        title=""
        src={selectedVideo.videoUrl}
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
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
