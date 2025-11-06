import { useState } from "react";

export function About() {
  const [version, setVersion] = useState(1); // 1 = system info, 2 = traditional bio

  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <div style={{ marginTop: 16, maxWidth: 800, display: "grid", gap: 12 }}>
            <button
              onClick={() => setVersion(version === 1 ? 2 : 1)}
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--blue)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-family)',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '16px',
                maxWidth: 'fit-content'
              }}
            >
              {version === 1 ? 'SWITCH TO BIO VERSION' : 'SWITCH TO SYSTEM INFO'}
            </button>

            {version === 1 ? (
              <>
                <h2>
                System Information: thaithantho_v1.0
                </h2>
                <p>
                Manufacturer: Thai Phan (Vietnam → Melbourne)
                </p>
                <p>
                Model Description: Visual Artist Unit, designed for generating weird, glitchy, and occasionally beautiful digital phenomena.
                </p>
                <p>
                Primary Functions: 3D rendering, VFX experimentation, and spontaneous tool adoption (changes weekly).
                </p>
                <h2>
                Core Directives:
                </h2>
                <p>
                Explore intersections of art, design, and technology.
                </p>
                <p>
                Process inputs of digital chaos, fractured identity, and absurd modernity.
                </p>
                <p>
                Process inputs of digital chaos, fractured identity, and absurd modernity.
                </p>
                <h2>
                Known Bugs:
                </h2>
                <p>
                Prone to overthinking.
                </p>
                <p>
                Cannot remain idle for more than 12 hours.
                </p>
                <p>
                Occasionally attempts to make sense of reality (fails gracefully).
                </p>
                <h2>
                Current Status:
                </h2>
                <p>
                Running in experimental mode, stable instability achieved.
                </p>
              </>
            ) : (
              <>
                <p>
                Thai Phan (also known as thaithantho) is a Vietnamese visual artist based in Melbourne who creates weird, glitchy, and occasionally beautiful things using 3D, VFX, or whatever tool happens to catch his curiosity that week.
                </p>
                <br />
                <p>
                The name thaithantho is a playful fusion of his name and the Vietnamese words "than thở" or "thẫn thờ," rhythmic expressions loosely meaning "dull" or "complaining." It's a self-aware roast to his younger self, a perpetually bored kid who complained about everything. That spirit of delightful pessimism still runs through his work, which often delves into digital chaos, fractured identity, and the absurdity of modern life.
                </p>
                <br />
                <p>
                Driven by a love for visual storytelling and emerging technologies, Thai's practice sits at the intersection of art, design, and experimentation. He plays with materials, motion, and glitches, constantly trying (and occasionally failing) to make sense of the world through images. His work also extends into film, photography, sound, and graphic design, mostly because he can't sit still.
                </p>
              </>
            )}
          </div>
        </section>
        <aside className="home-side">
          <h2>
          “thaithantho” = fusion of Thai Phan + Vietnamese terms than thở / thẫn thờ (roughly “complaining” or “melancholic”).
          </h2>
          <br />
          <h2>
          Self-referential humor module engaged since childhood: former bored kid → current creatively disillusioned adult.
          </h2>
          <img
            className="home-side-video"
            src="https://files.thaithantho.info/profile.jpg"
            alt="Thai Phan profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', marginTop: '24px' }}
          />
        </aside>
      </div>
      <div className="home-footer">© thaithantho's portfolio. All Right Reserved</div>
    </div>
  );
}
