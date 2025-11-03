import { useEffect, useState } from "react";

export function Home() {
  const [locationText, setLocationText] = useState("SYSTEM LOCATION");
  const [timeText, setTimeText] = useState("SYSTEM TIME");

  useEffect(() => {
    // Live time update
    const updateTime = () => {
      try {
        const now = new Date();
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        setTimeText(`${timeString} (${tz})`);
      } catch {
        setTimeText(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const id = setInterval(updateTime, 1000);

    // Geolocation + reverse geocoding
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const resp = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
              { headers: { "Accept": "application/json" } }
            );
            const data = await resp.json();
            const city = data?.address?.city || data?.address?.town || data?.address?.village || data?.address?.state;
            const country = data?.address?.country || "";
            setLocationText([city, country].filter(Boolean).join(", ") || `${latitude.toFixed(3)}, ${longitude.toFixed(3)}`);
          } catch {
            setLocationText(`${latitude.toFixed(3)}, ${longitude.toFixed(3)}`);
          }
        },
        () => {
          setLocationText("Location permission denied");
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
      );
    }

    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <h2>SYSTEM OVERVIEW</h2>
          <h1>THAITHANTHO IS A VISUAL ARTIST BASED IN MELBOURNE</h1>
          <div className="home-bottom-meta">
            <div className="meta-grid">
              <div className="label">SYSTEM LOCATION</div>
              <div className="value">{locationText}</div>
              <div className="label">SYSTEM TIME</div>
              <div className="value">{timeText}</div>
            </div>
          </div>
        </section>
        <aside className="home-side">
          <h2>THAITHANTHO</h2>
          <h2>VISUAL ARTIST</h2>
          <video
            className="home-side-video"
            autoPlay
            muted
            loop
            playsInline
            src="https://assets.mixkit.co/videos/3524/3524-720.mp4"
          />
        </aside>
      </div>
      <div className="home-footer">© thaithantho's portfolio. All Right Reserved</div>
    </div>
  );
}
