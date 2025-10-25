import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VideoBackground({
  src = "https://assets.mixkit.co/videos/4111/4111-720.mp4",
}) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ensure we have a sensible size
    const getSize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      return { w, h };
    };

    // --- Setup renderer, scene, camera
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const { w, h } = getSize();
    renderer.setSize(w, h, false);
    renderer.domElement.className = "webgl-canvas";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    camera.position.z = 1;

    // --- Video element and texture
    const video = document.createElement("video");
    video.src = src;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    // try to start; may be blocked until user interaction
    video.play().catch(() => {});

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    // --- Shader material
    const uniforms = {
      u_texture: { value: texture },
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5 * w, 0.5 * h) }, // pixel coords
      u_resolution: { value: new THREE.Vector2(w, h) },
    };

    const vertex = `
      varying vec2 v_uv;
      void main() {
        v_uv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragment = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      void main() {
        vec2 uv = v_uv;
        // convert mouse from pixel -> normalized [0,1]
        vec2 mouse = u_mouse / u_resolution;
        float dist = distance(uv, mouse);
        float ripple = sin((dist * 30.0) - (u_time * 3.0)) * 0.03;
        vec2 dir = normalize(uv - mouse + 0.0001); // small bias to avoid zero-length
        vec2 offset = dir * ripple * (0.6 / (dist + 0.02));
        vec4 color = texture2D(u_texture, uv + offset);
        gl_FragColor = color;
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- mouse handling (pixel coords)
    function onPointerMove(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      uniforms.u_mouse.value.set(x, rect.height - y); // flip Y to shader's origin
    }
    window.addEventListener("pointermove", onPointerMove);

    // --- resize handling
    function onResize() {
      const { w: newW, h: newH } = getSize();
      renderer.setSize(newW, newH, false);
      uniforms.u_resolution.value.set(newW, newH);
    }
    window.addEventListener("resize", onResize);

    // --- render loop
    let rafId;
    const clock = new THREE.Clock();
    function animate() {
      uniforms.u_time.value += clock.getDelta();
      if (texture) texture.needsUpdate = true;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    animate();

    // cleanup
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      try {
        geometry.dispose();
        material.dispose();
        texture.dispose();
        // release GL context
        renderer.forceContextLoss && renderer.forceContextLoss();
        renderer.domElement && renderer.domElement.remove();
      } catch (err) {
        // ignore dispose errors
      }
      try {
        video.pause();
        video.src = "";
      } catch (err) {}
    };
  }, [src]); // <--- run effect when src changes

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: -1 }}
    />
  );
}
