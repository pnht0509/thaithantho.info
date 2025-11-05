import { useEffect, useRef } from "react";

export function Contact() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load Cloudflare Stream SDK script
    const script = document.createElement('script');
    script.src = 'https://embed.cloudflarestream.com/embed/sdk.latest.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize Stream player after script loads
      if (iframeRef.current && window.Stream) {
        const player = window.Stream(iframeRef.current);
        
        playerRef.current = player;

        player.addEventListener('play', () => {
          console.log('playing!');
        });

        player.play().catch(() => {
          console.log('playback failed, muting to try again');
          player.muted = true;
          player.loop = true;
          player.autoplay = true;
          player.preload = 'auto';
          player.controls = false;
          player.play();
        });
        player.addEventListener('loadedmetadata', () => {
          // Set to the highest quality
          player.quality = 'source'; 
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (playerRef.current) {
        try {
          playerRef.current.removeEventListener('play', () => {});
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-bg-video" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            ref={iframeRef}
            id="stream-player"
            src="https://customer-y5wgl1yi7h7mp8sa.cloudflarestream.com/96d0da695566266b50c8aeb4070b181e/iframe"
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
            title="Contact background video"
          />
        </div>
      </div>
      <div className="contact-center">
        <h1 className="contact-title">GET IN TOUCH</h1>
        {/* <p className="contact-text">For collaborations, commissions, or inquiries:</p> */}
        <p className="contact-text">
          <a href="mailto:pnht.work@gmail.com" className="contact-link">pnht.work@gmail.com</a>
        </p>
        <p className="contact-text">
          <a href="https://www.instagram.com/pnhthai/" target="_blank" rel="noreferrer" className="contact-link">@pnhthai</a>
        </p>
        <p className="contact-text">
          <a href="https://www.linkedin.com/in/pnht/" target="_blank" rel="noreferrer" className="contact-link">Linkedin</a>
        </p>
        <p className="contact-text">Melbourne, Australia</p>
      </div>
    </div>
  );
}
