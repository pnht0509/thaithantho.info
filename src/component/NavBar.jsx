import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

/**
 * Simple text-scramble on hover.
 * Attaches handlers to each link. Uses a small interval to show random chars
 * and progressively reveal the original text. Cleans up on mouseleave.
 */

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}<>?/|\\~".split(
    ""
  );

function startScramble(el) {
  if (!el) return;
  const original = el.dataset.original ?? el.textContent;
  el.dataset.original = original;

  // prevent starting multiple intervals on same element
  if (el._scrambleId) clearInterval(el._scrambleId);

  let frame = 0;
  const revealFramesPerChar = 3; // higher = slower reveal
  const totalFrames = original.length * revealFramesPerChar;

  el._scrambleId = setInterval(() => {
    let out = "";
    for (let i = 0; i < original.length; i++) {
      const revealAt = (i + 1) * revealFramesPerChar;
      if (frame >= revealAt) {
        out += original[i];
      } else {
        out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
      }
    }
    el.textContent = out;
    frame++;
    if (frame > totalFrames) {
      clearInterval(el._scrambleId);
      el._scrambleId = null;
      el.textContent = original;
    }
  }, 30);
}

function stopScramble(el) {
  if (!el) return;
  if (el._scrambleId) {
    clearInterval(el._scrambleId);
    el._scrambleId = null;
  }
  if (el.dataset.original) el.textContent = el.dataset.original;
}

function GlitchLogo({ src, alt }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    imageRef.current = img;

    let glitchIntensity = 0;
    let lastChaosTime = 0;
    let baseImageData = null;

    const setupCanvas = () => {
      img.onload = () => {
        // Set canvas size to match image aspect ratio, max 200px width
        const maxWidth = 200;
        const aspectRatio = img.height / img.width;
        const displayHeight = 20;
        const displayWidth = displayHeight / aspectRatio;
        
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.width = `${Math.min(displayWidth, maxWidth)}px`;
        canvas.style.height = `${displayHeight}px`;
        
        // Store base image data
        ctx.drawImage(img, 0, 0);
        baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        startGlitch();
      };
    };

    const startGlitch = () => {
      const animate = (timestamp) => {
        if (!imageRef.current || !imageRef.current.complete || !baseImageData) {
          animationFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        // Random chaos bursts - EXTREME frequency and intensity
        const timeSinceLastChaos = timestamp - lastChaosTime;
        if (timeSinceLastChaos > 20 + Math.random() * 80) {
          glitchIntensity = 0.6 + Math.random() * 0.4; // 0.6 to 1.0 - always intense
          lastChaosTime = timestamp;
        }

        // Continuous base glitch - much more intense
        const baseGlitch = 0.15 + Math.sin(timestamp * 0.008) * 0.15 + Math.random() * 0.1;
        glitchIntensity = Math.max(baseGlitch, glitchIntensity * 0.88); // Slower decay = more chaos

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Apply EXTREME chaotic glitch effects
        applyRGBShift(ctx, baseImageData, glitchIntensity, timestamp);
        applyPixelDisplacement(ctx, baseImageData, glitchIntensity, timestamp);
        applyNoise(ctx, baseImageData, glitchIntensity);
        applyScanlines(ctx, canvas.width, canvas.height, glitchIntensity, timestamp);
        applyDigitalNoise(ctx, canvas.width, canvas.height, glitchIntensity);
        applyColorInversion(ctx, canvas.width, canvas.height, glitchIntensity);
        applyRotation(ctx, canvas.width, canvas.height, glitchIntensity);

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const applyRGBShift = (ctx, imageData, intensity, time) => {
      if (intensity < 0.05) {
        ctx.putImageData(imageData, 0, 0);
        return;
      }

      // EXTREME RGB shifts - much larger
      const shift = Math.floor(intensity * 50 * (0.5 + Math.random() * 0.5));
      const redShift = Math.random() > 0.5 ? shift : -shift;
      const blueShift = -redShift;
      // Add vertical shift too for more chaos
      const greenShiftY = Math.floor((Math.random() - 0.5) * intensity * 10);
      
      const data = imageData.data;
      const width = imageData.width;
      const height = imageData.height;
      
      // Create output image data with RGB channel separation
      const outputData = ctx.createImageData(width, height);
      
      // Copy original data first
      for (let i = 0; i < data.length; i++) {
        outputData.data[i] = data[i];
      }
      
      // Apply RGB shifts by reading from shifted positions - with vertical shift too
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          
          // Get red from shifted position (horizontal + random vertical)
          const redX = Math.max(0, Math.min(width - 1, x + redShift));
          const redY = Math.max(0, Math.min(height - 1, y + Math.floor((Math.random() - 0.5) * intensity * 5)));
          const redIndex = (redY * width + redX) * 4;
          outputData.data[index] = data[redIndex];
          
          // Green with vertical shift
          const greenY = Math.max(0, Math.min(height - 1, y + greenShiftY));
          const greenIndex = (greenY * width + x) * 4;
          outputData.data[index + 1] = data[greenIndex];
          
          // Get blue from shifted position (horizontal + random vertical)
          const blueX = Math.max(0, Math.min(width - 1, x + blueShift));
          const blueY = Math.max(0, Math.min(height - 1, y + Math.floor((Math.random() - 0.5) * intensity * 5)));
          const blueIndex = (blueY * width + blueX) * 4;
          outputData.data[index + 2] = data[blueIndex];
          
          // Alpha stays the same
          outputData.data[index + 3] = data[index + 3];
        }
      }
      
      ctx.putImageData(outputData, 0, 0);
    };

    const applyPixelDisplacement = (ctx, imageData, intensity, time) => {
      if (intensity < 0.1) return;
      
      const width = imageData.width;
      const height = imageData.height;
      
      // EXTREME horizontal slices displacement - much more chaotic
      const sliceCount = Math.floor(intensity * 30) + 5;
      for (let i = 0; i < sliceCount; i++) {
        const y = Math.floor(Math.random() * height);
        const sliceHeight = Math.floor(Math.random() * 15) + 1;
        const offset = Math.floor((Math.random() - 0.5) * intensity * 80);
        const verticalOffset = Math.floor((Math.random() - 0.5) * intensity * 10);
        
        const sliceData = ctx.getImageData(0, y, width, sliceHeight);
        ctx.putImageData(sliceData, offset, y + verticalOffset);
      }
      
      // Random vertical slices - always active and more intense
      const vSliceCount = Math.floor(intensity * 12) + 2;
      for (let i = 0; i < vSliceCount; i++) {
        const x = Math.floor(Math.random() * width);
        const sliceWidth = Math.floor(Math.random() * 10) + 1;
        const offset = Math.floor((Math.random() - 0.5) * intensity * 40);
        const verticalOffset = Math.floor((Math.random() - 0.5) * intensity * 5);
        
        const sliceData = ctx.getImageData(x, 0, sliceWidth, height);
        ctx.putImageData(sliceData, x + offset, verticalOffset);
      }
    };

    const applyNoise = (ctx, imageData, intensity) => {
      if (intensity < 0.1) return;
      
      const currentData = ctx.getImageData(0, 0, imageData.width, imageData.height);
      const data = currentData.data;
      // EXTREME noise - much more pixels
      const noiseAmount = Math.floor(intensity * 150);
      
      for (let i = 0; i < noiseAmount; i++) {
        const x = Math.floor(Math.random() * imageData.width);
        const y = Math.floor(Math.random() * imageData.height);
        const index = (y * imageData.width + x) * 4; // Fixed: should be * 4, not * 10
        
        // Random color noise - sometimes full brightness for more chaos
        if (Math.random() > 0.7) {
          data[index] = 255;     // R - full brightness
          data[index + 1] = 255; // G
          data[index + 2] = 255; // B
        } else {
          data[index] = Math.random() * 255;     // R
          data[index + 1] = Math.random() * 255; // G
          data[index + 2] = Math.random() * 255; // B
        }
      }
      
      ctx.putImageData(currentData, 0, 0);
    };

    const applyScanlines = (ctx, width, height, intensity, time) => {
      if (intensity < 0.1) return;
      
      // EXTREME scanlines - bright and many
      ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 0.8})`;
      ctx.lineWidth = Math.floor(intensity * 3) + 1;
      
      const lineCount = Math.floor(intensity * 20) + 3;
      for (let i = 0; i < lineCount; i++) {
        const y = Math.floor(Math.random() * height);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Add colored scanlines too
      if (intensity > 0.5) {
        const colorLineCount = Math.floor(intensity * 10);
        for (let i = 0; i < colorLineCount; i++) {
          const y = Math.floor(Math.random() * height);
          ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${intensity * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }
    };

    const applyDigitalNoise = (ctx, width, height, intensity) => {
      if (intensity < 0.2) return;
      
      // EXTREME digital artifacts - many and large
      const artifactCount = Math.floor(intensity * 25) + 5;
      for (let i = 0; i < artifactCount; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const w = Math.floor(Math.random() * 20) + 3;
        const h = Math.floor(Math.random() * 20) + 3;
        
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${intensity * 0.7})`;
        ctx.fillRect(x, y, w, h);
      }
    };

    const applyColorInversion = (ctx, width, height, intensity) => {
      if (intensity < 0.4 || Math.random() > 0.3) return; // Random inversion bursts
      
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      // Invert random regions
      const regionCount = Math.floor(intensity * 5);
      for (let r = 0; r < regionCount; r++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const w = Math.floor(Math.random() * width * 0.3) + 5;
        const h = Math.floor(Math.random() * height * 0.3) + 5;
        
        for (let py = y; py < Math.min(height, y + h); py++) {
          for (let px = x; px < Math.min(width, x + w); px++) {
            const index = (py * width + px) * 4;
            data[index] = 255 - data[index];     // R
            data[index + 1] = 255 - data[index + 1]; // G
            data[index + 2] = 255 - data[index + 2]; // B
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const applyRotation = (ctx, width, height, intensity) => {
      if (intensity < 0.5 || Math.random() > 0.4) return; // Random rotation bursts
      
      const centerX = width / 2;
      const centerY = height / 2;
      const angle = (Math.random() - 0.5) * intensity * 0.2; // Small chaotic rotations
      
      // Get current image
      const imageData = ctx.getImageData(0, 0, width, height);
      
      // Create temp canvas for rotation
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext("2d");
      
      // Draw rotated image
      tempCtx.translate(centerX, centerY);
      tempCtx.rotate(angle);
      tempCtx.translate(-centerX, -centerY);
      tempCtx.putImageData(imageData, 0, 0);
      
      // Copy back
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(tempCanvas, 0, 0);
    };

    setupCanvas();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      alt={alt}
      style={{
        height: '20px',
        width: 'auto',
        maxWidth: '200px',
        imageRendering: 'pixelated'
      }}
    />
  );
}

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <GlitchLogo src={logo} alt="thaithantho logo" />
      </div>
      <div className="nav-links-row">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <a
              href="#exit"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className="nav-item"
              data-nav-item
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                try {
                  window.open('', '_self');
                  window.close();
                  setTimeout(() => {
                    try { window.close(); } catch {}
                    try { window.location.replace('about:blank'); } catch {}
                  }, 50);
                } catch {
                  try { window.location.replace('about:blank'); } catch {}
                }
              }}
            >
              EXIT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
