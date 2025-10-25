import { Navbar } from "../component/NavBar";
import { VideoBackground } from "../component/VideoBackground";

export function Home() {
  return (
    <div className="home-container">
      {/* Navbar removed (now in App.jsx) */}
      <VideoBackground src="https://assets.mixkit.co/videos/4111/4111-720.mp4" />
      <div className="content-container">
        <video className="center-video" autoPlay muted loop playsInline>
          <source
            src="https://assets.mixkit.co/videos/41576/41576-720.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
