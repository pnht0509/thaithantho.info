import { useEffect, useRef } from "react";

const NAV_HEIGHT = 64; // Navbar height from CSS

function BouncingImage({ src, alt, initialX, initialY, initialVX, initialVY, size = 100, minY = 0 }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const positionRef = useRef({ 
    x: typeof initialX === 'function' ? 0 : initialX, 
    y: typeof initialY === 'function' ? 0 : initialY, 
    vx: initialVX, 
    vy: initialVY,
    rotation: 0 // Rotation angle in degrees
  });
  const trailRef = useRef([]); // Store trail positions
  const imageLoadedRef = useRef(false);
  const isInitializedRef = useRef(false);
  const bounceCountRef = useRef(0); // Track number of bounces

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!img || !container || !canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Wait for image to load
    const handleImageLoad = () => {
      imageLoadedRef.current = true;
    };

    if (img.complete) {
      imageLoadedRef.current = true;
    } else {
      img.addEventListener('load', handleImageLoad);
    }

    // Initialize position based on window size if needed
    if (!isInitializedRef.current) {
      if (typeof initialX === 'function') {
        positionRef.current.x = initialX();
      }
      if (typeof initialY === 'function') {
        positionRef.current.y = initialY();
      }
      isInitializedRef.current = true;
    }

    const animate = () => {
      if (!imageLoadedRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const pos = positionRef.current;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imgWidth = size;
      const imgHeight = img.naturalHeight && img.naturalWidth 
        ? (img.naturalHeight / img.naturalWidth) * size 
        : size;

      // Update position - gradual movement
      pos.x += pos.vx;
      pos.y += pos.vy;

      // Track bounces
      let bounced = false;

      // Gradual bouncing off walls - smooth direction change
      if (pos.x <= 0) {
        pos.vx = -pos.vx; // Reverse direction
        pos.x = 0;
        bounced = true;
      } else if (pos.x + imgWidth >= windowWidth) {
        pos.vx = -pos.vx;
        pos.x = windowWidth - imgWidth;
        bounced = true;
      }

      // Gradual bouncing off top (respecting minY for navbar) and bottom
      if (pos.y <= minY) {
        pos.vy = -pos.vy; // Reverse direction
        pos.y = minY;
        bounced = true;
      } else if (pos.y + imgHeight >= windowHeight) {
        pos.vy = -pos.vy;
        pos.y = windowHeight - imgHeight;
        bounced = true;
      }

      // Increment bounce counter and reset trail after 3 bounces
      if (bounced) {
        bounceCountRef.current += 1;
        if (bounceCountRef.current >= 3) {
          // Clear canvas trail
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Clear trail array
          trailRef.current = [];
          // Reset bounce counter
          bounceCountRef.current = 0;
        }
      }

      // NO PHYSICS - no gravity, no friction, just gradual bouncing

      // Update rotation - random rotation
      // Randomly change rotation direction and speed
      if (Math.random() < 0.1) { // 10% chance to change rotation each frame
        pos.rotation += (Math.random() - 0.5) * 50; // Random rotation change between -5 and +5 degrees
      } else {
        pos.rotation += (Math.random() - 0.5) * 2; // Small random variation
      }
      
      // Keep rotation between 0 and 360
      if (pos.rotation >= 360) {
        pos.rotation -= 360;
      } else if (pos.rotation < 0) {
        pos.rotation += 360;
      }

      // Add current position to trail - ENDLESS (no limit)
      trailRef.current.push({ x: pos.x, y: pos.y, rotation: pos.rotation });

      // Update main image position and rotation
      img.style.left = `${pos.x}px`;
      img.style.top = `${pos.y}px`;
      img.style.transform = `rotate(${pos.rotation}deg)`;
      img.style.transformOrigin = 'center center';

      // Draw trail on canvas - much more performant than DOM elements
      // Draw every few positions to maintain performance while keeping trail visible
      if (trailRef.current.length % 3 === 0) {
        const centerX = pos.x + imgWidth / 2;
        const centerY = pos.y + imgHeight / 2;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((pos.rotation * Math.PI) / 180); // Convert to radians
        ctx.globalAlpha = 0.4;
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
        ctx.restore();
        ctx.globalAlpha = 1.0;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imgWidth = size;
      const imgHeight = img.naturalHeight && img.naturalWidth 
        ? (img.naturalHeight / img.naturalWidth) * size 
        : size;
      
      // Resize canvas
      resizeCanvas();
      
      // Keep image within bounds
      positionRef.current.x = Math.max(0, Math.min(windowWidth - imgWidth, positionRef.current.x));
      positionRef.current.y = Math.max(minY, Math.min(windowHeight - imgHeight, positionRef.current.y));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      img.removeEventListener('load', handleImageLoad);
    };
  }, [initialX, initialY, size, minY, src]);

  return (
    <div ref={containerRef}>
      {/* Canvas for trail rendering - much more performant */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9,
          pointerEvents: "none",
        }}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          position: "fixed",
          width: `${size}px`,
          height: "auto",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-bg-video" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <video
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://files.thaithantho.info/Timeline1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Bouncing image at top - below navbar */}
      <BouncingImage
        src="https://files.thaithantho.info/front.jpg"
        alt="Bouncing front"
        initialX={50}
        initialY={NAV_HEIGHT + 20}
        initialVX={2}
        initialVY={1.5}
        size={250}
        minY={NAV_HEIGHT}
      />
      
      {/* Bouncing image at bottom */}
      <BouncingImage
        src="https://files.thaithantho.info/back.jpg"
        alt="Bouncing back"
        initialX={() => typeof window !== 'undefined' ? window.innerWidth - 300 : 100}
        initialY={() => typeof window !== 'undefined' ? window.innerHeight - 300 : 100}
        initialVX={-2.5}
        initialVY={-2}
        size={300}
        minY={0}
      />
      
      <div className="contact-center">
        <h1 className="contact-title">GET IN TOUCH</h1>
        {/* <p className="contact-text">For collaborations, commissions, or inquiries:</p> */}
        <p className="contact-text">
          Email: <a href="mailto:pnht.work@gmail.com" className="contact-link">pnht.work@gmail.com</a>
        </p>
        <p className="contact-text">
          Instagram: <a href="https://www.instagram.com/pnhthai/" target="_blank" rel="noreferrer" className="contact-link">@pnhthai</a>
        </p>
        <p className="contact-text">
          LinkedIn: <a href="https://www.linkedin.com/in/pnht/" target="_blank" rel="noreferrer" className="contact-link">Thai Phan</a>
        </p>
        <p className="contact-text">
          CV: <a href="https://files.thaithantho.info/Thai%20Phan%20Resume.pdf" target="_blank" rel="noreferrer" className="contact-link">Resume.pdf</a>
        </p>
        <p className="contact-text">Melbourne, Australia</p>
      </div>
    </div>
  );
}
