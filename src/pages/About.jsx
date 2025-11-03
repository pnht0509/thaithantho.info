export function About() {
  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <h2>ABOUT</h2>
          <h1>WHO I AM</h1>
          <div style={{ marginTop: 16, maxWidth: 800, display: "grid", gap: 12 }}>
            <p>
              I'm a creative professional exploring the boundaries of visual communication through
              design, motion graphics, and interactive experiences. My work blends technical
              expertise with artistic vision to create meaningful connections between brands and
              their audiences.
            </p>
            <p>
              With a passion for innovation and storytelling, I craft experiences that resonate
              deeply and leave lasting impressions. Each project is an opportunity to push creative
              boundaries and explore new possibilities in the digital realm.
            </p>
          </div>
        </section>
        <aside className="home-side">
          <h2>USE ARROWS OR MOUSE TO NAVIGATE</h2>
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
