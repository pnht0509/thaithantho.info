import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VideoBackground({
  src = "https://assets.mixkit.co/videos/4111/4111-720.mp4",
}) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Utility: get container size ---
    const getSize = () => ({
      w: container.clientWidth || window.innerWidth,
      h: container.clientHeight || window.innerHeight,
    });

    // --- Renderer setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const { w, h } = getSize();
    renderer.setSize(w, h, false);
    renderer.domElement.className = "webgl-canvas";
    renderer.domElement.style.cssText = `
      width: 100%;
      height: 100%;
      display: block;
    `;
    container.appendChild(renderer.domElement);

    // --- Scene and camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    camera.position.z = 1;

    // --- Video setup ---
    const video = document.createElement("video");
    Object.assign(video, {
      src,
      crossOrigin: "anonymous",
      loop: true,
      muted: true,
      playsInline: true,
      autoplay: true,
    });
    video.play().catch(() => {
      console.warn("Autoplay prevented. User interaction required.");
    });

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    // --- Shader uniforms ---
    const uniforms = {
      u_texture: { value: texture },
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(w / 2, h / 2) },
      u_resolution: { value: new THREE.Vector2(w, h) },
    };

    // --- Vertex Shader ---
    const vertexShader = `
      varying vec2 v_uv;
      void main() {
        v_uv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // --- Fragment Shader ---
    const fragmentShader = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      void main() {
        vec2 uv = v_uv;
        vec2 mouse = u_mouse / u_resolution;

        float dist = distance(uv, mouse);
        float ripple = sin(dist * 25.0 - u_time * 2.0) * 0.02;
        vec2 dir = normalize(uv - mouse + 0.0001);
        vec2 offset = dir * ripple / (dist + 0.03);

        vec4 color = texture2D(u_texture, uv + offset);
        gl_FragColor = color;
      }
    `;

    // --- Create mesh ---
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Mouse movement ---
    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.height - (e.clientY - rect.top); // flip Y
      uniforms.u_mouse.value.set(x, y);
    };
    window.addEventListener("pointermove", onPointerMove);

    // --- Resize handling ---
    const onResize = () => {
      const { w: newW, h: newH } = getSize();
      renderer.setSize(newW, newH, false);
      uniforms.u_resolution.value.set(newW, newH);
    };
    window.addEventListener("resize", onResize);

    // --- Animation loop ---
    const clock = new THREE.Clock();
    let rafId;

    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      if (texture) texture.needsUpdate = true;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose?.();
      renderer.forceContextLoss?.();
      renderer.domElement?.remove();

      video.pause();
      video.src = "";
      video.load();
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}
    />
  );
}
