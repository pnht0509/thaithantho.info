export function About() {
  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <div style={{ marginTop: 16, maxWidth: 800, display: "grid", gap: 12 }}>
            <p>
            Thai Phan (also known as thaithantho) is a Vietnamese visual artist based in Melbourne who creates weird, glitchy, and occasionally beautiful things using 3D, VFX, or whatever tool happens to catch his curiosity that week.
            </p>
            <br />
            <p>
            The name thaithantho is a playful fusion of his name and the Vietnamese words “than thở” or “thẫn thờ,” rhythmic expressions loosely meaning “dull” or “complaining.” It’s a self-aware roast to his younger self, a perpetually bored kid who complained about everything. That spirit of delightful pessimism still runs through his work, which often delves into digital chaos, fractured identity, and the absurdity of modern life.
            </p>
            <br />
            <p>
            Driven by a love for visual storytelling and emerging technologies, Thai’s practice sits at the intersection of art, design, and experimentation. He plays with materials, motion, and glitches, constantly trying (and occasionally failing) to make sense of the world through images. His work also extends into film, photography, sound, and graphic design, mostly because he can’t sit still.
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
