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
      <h1>Pick a video:</h1>
      <div style={styles.videoListContainer}>
        {trumpVideos.map((v) => {
          return (
            <button
              onClick={() => setSelectedVideo(v)}
              style={styles.linkButton}
            >
              {v.description}
            </button>
          );
        })}
      </div>
      <div style={styles.contactUsContainer}>
        <a href="mailto:trumpbeinginsane@gmail.com" style={styles.emailLink}>
          Contact us
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  contactUsContainer: {
    borderTop: "2px solid #ccc",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "center" as const,
  },
  emailLink: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "18px",
  },
  linkButton: {
    background: "none",
    color: "blue",
    fontSize: 24,
    textDecoration: "underline",
    border: "none",
    padding: 0,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  newVideoButton: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30,
  },
  videoListContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: "20px",
    paddingBottom: 50,
  },
};

export default App;
