/**
 * Hero particle simulation (three.js).
 * ~5k particles spring toward a sequence of target shapes — the name, a Unity-style
 * cube, a globe and a wave — and are repelled by the cursor.
 * Pauses when off-screen; renders one still frame when reduced motion is requested.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  NormalBlending,
  PerspectiveCamera,
  Plane,
  Points,
  PointsMaterial,
  Raycaster,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

type Shape = { name: string; pts: Float32Array; spin: boolean };

export function initHeroScene(canvas: HTMLCanvasElement, label?: HTMLElement | null) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.innerWidth < 768;
  const N = small ? 1800 : 5200;

  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // ---------- target shapes ----------
  const textShape = (word: string): Float32Array => {
    const c = document.createElement('canvas');
    const W = 900, H = 300;
    c.width = W; c.height = H;
    const g = c.getContext('2d')!;
    g.fillStyle = '#fff';
    g.font = '900 250px Inter Variable, Inter, system-ui, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(word, W / 2, H / 2 + 10);
    const data = g.getImageData(0, 0, W, H).data;
    const cand: number[] = [];
    for (let y = 0; y < H; y += 3) for (let x = 0; x < W; x += 3) if (data[(y * W + x) * 4 + 3] > 128) cand.push(x, y);
    const out = new Float32Array(N * 3);
    const scale = 6.4 / W;
    for (let i = 0; i < N; i++) {
      const k = (Math.floor(Math.random() * (cand.length / 2))) * 2;
      out[i * 3] = (cand[k] - W / 2) * scale + (Math.random() - 0.5) * 0.02;
      out[i * 3 + 1] = -(cand[k + 1] - H / 2) * scale + (Math.random() - 0.5) * 0.02;
      out[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }
    return out;
  };

  const cubeShape = (): Float32Array => {
    const out = new Float32Array(N * 3);
    const s = 1.55;
    for (let i = 0; i < N; i++) {
      // points on cube edges (60%) and faces (40%) — reads as a wireframe "Unity" cube
      let x = (Math.random() * 2 - 1) * s, y = (Math.random() * 2 - 1) * s, z = (Math.random() * 2 - 1) * s;
      const axis = Math.floor(Math.random() * 3);
      if (Math.random() < 0.6) {
        const a = Math.random() < 0.5 ? -s : s, b = Math.random() < 0.5 ? -s : s;
        if (axis === 0) { y = a; z = b; } else if (axis === 1) { x = a; z = b; } else { x = a; y = b; }
      } else {
        const f = Math.random() < 0.5 ? -s : s;
        if (axis === 0) x = f; else if (axis === 1) y = f; else z = f;
      }
      out.set([x, y, z], i * 3);
    }
    return out;
  };

  const sphereShape = (): Float32Array => {
    const out = new Float32Array(N * 3);
    const r = 2.1;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      // latitude bands for a "globe" feel
      const band = Math.abs(Math.sin(y * 9)) > 0.2 ? 1 : 1.04;
      out.set([Math.cos(th) * rad * r * band, y * r * band, Math.sin(th) * rad * r * band], i * 3);
    }
    return out;
  };

  const waveShape = (): Float32Array => {
    const out = new Float32Array(N * 3);
    const side = Math.ceil(Math.sqrt(N));
    for (let i = 0; i < N; i++) {
      const gx = (i % side) / side - 0.5, gz = Math.floor(i / side) / side - 0.5;
      const x = gx * 7, z = gz * 7;
      out.set([x, Math.sin(x * 1.3) * 0.45 + Math.cos(z * 1.6) * 0.45 - 0.3, z], i * 3);
    }
    return out;
  };

  // On phones the name is already the headline, so the particles become an ambient
  // 3D object in the top corner instead of spelling it out.
  const compact = window.innerWidth < 1024;
  const shapes: Shape[] = [
    ...(compact ? [] : [{ name: 'name.render()', pts: textShape('ROEY'), spin: false }]),
    { name: 'unity.cube', pts: cubeShape(), spin: true },
    { name: 'earth.globe', pts: sphereShape(), spin: true },
    { name: 'terrain.wave', pts: waveShape(), spin: true },
  ];

  // ---------- particles ----------
  const pos = new Float32Array(N * 3);
  const vel = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 18;
  if (reduced) pos.set(shapes[0].pts);

  const colors = new Float32Array(N * 3);
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('color', new BufferAttribute(colors, 3));

  const sprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d')!;
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.35, 'rgba(255,255,255,0.85)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    return new CanvasTexture(c);
  })();

  const mat = new PointsMaterial({ size: small ? 0.07 : 0.055, map: sprite, vertexColors: true, transparent: true, depthWrite: false });
  const points = new Points(geo, mat);
  scene.add(points);

  const applyTheme = () => {
    const css = getComputedStyle(document.documentElement);
    const dark = document.documentElement.getAttribute('data-theme') !== 'light';
    const a = new Color(css.getPropertyValue('--accent').trim() || '#8b8bff');
    const b = new Color(css.getPropertyValue('--accent-2').trim() || '#38d6f5');
    const tmp = new Color();
    for (let i = 0; i < N; i++) {
      tmp.copy(a).lerp(b, Math.random());
      if (Math.random() < 0.08) tmp.lerp(new Color(dark ? '#ffffff' : '#0d1020'), 0.6);
      colors.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    geo.attributes.color.needsUpdate = true;
    mat.blending = dark ? AdditiveBlending : NormalBlending;
    mat.opacity = dark ? 0.95 : 0.85;
    mat.needsUpdate = true;
  };
  applyTheme();
  new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // ---------- layout ----------
  let offsetX = 0;
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const visW = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z * camera.aspect;
    const visH = visW / camera.aspect;
    if (w >= 1024) {
      offsetX = visW * 0.22;
      points.position.set(offsetX, 0, 0);
      points.scale.setScalar(1);
    } else {
      offsetX = visW * 0.34;
      points.position.set(offsetX, visH * 0.3, 0);
      points.scale.setScalar(Math.min(0.85, visW / 5.5));
    }
  };
  resize();
  window.addEventListener('resize', resize);

  // ---------- pointer ----------
  const mouse = new Vector2(9, 9);
  const mouseWorld = new Vector3(99, 99, 0);
  const ray = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  let parallaxX = 0, parallaxY = 0;
  window.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    parallaxX = mouse.x; parallaxY = mouse.y;
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => mouse.set(9, 9));

  // ---------- loop ----------
  let current = 0;
  let lastSwitch = performance.now();
  const HOLD = 4200;
  const setLabel = () => { if (label) label.textContent = shapes[current].name; };
  setLabel();

  let running = true;
  let raf = 0;
  const tmpV = new Vector3();

  const tick = (t: number) => {
    raf = requestAnimationFrame(tick);
    if (!running) return;

    if (t - lastSwitch > (current === 0 ? HOLD * 1.4 : HOLD)) {
      current = (current + 1) % shapes.length;
      lastSwitch = t;
      setLabel();
      // little burst on transition
      for (let i = 0; i < N * 3; i++) vel[i] += (Math.random() - 0.5) * 0.06;
    }

    // mouse in points-local space
    ray.setFromCamera(mouse, camera);
    if (ray.ray.intersectPlane(plane, tmpV)) {
      points.worldToLocal(mouseWorld.copy(tmpV));
    }

    const target = shapes[current].pts;
    const spin = shapes[current].spin;
    const rotY = points.rotation.y;
    const cos = Math.cos(-rotY), sin = Math.sin(-rotY);
    const mx = mouseWorld.x * cos - mouseWorld.z * sin;
    const R = 0.9;

    for (let i = 0; i < N; i++) {
      const ix = i * 3;
      let ax = (target[ix] - pos[ix]) * 0.018;
      let ay = (target[ix + 1] - pos[ix + 1]) * 0.018;
      let az = (target[ix + 2] - pos[ix + 2]) * 0.018;
      const dx = pos[ix] - mx, dy = pos[ix + 1] - mouseWorld.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < R * R) {
        const f = (1 - Math.sqrt(d2) / R) * 0.09;
        ax += dx * f; ay += dy * f; az += f * 0.6;
      }
      vel[ix] = (vel[ix] + ax) * 0.88;
      vel[ix + 1] = (vel[ix + 1] + ay) * 0.88;
      vel[ix + 2] = (vel[ix + 2] + az) * 0.88;
      pos[ix] += vel[ix]; pos[ix + 1] += vel[ix + 1]; pos[ix + 2] += vel[ix + 2];
    }
    geo.attributes.position.needsUpdate = true;

    if (spin) points.rotation.y += 0.0035;
    else points.rotation.y += (Math.sin(t * 0.0004) * 0.12 + parallaxX * 0.25 - points.rotation.y) * 0.05;
    points.rotation.x += (-parallaxY * 0.15 + (shapes[current].name === 'terrain.wave' ? 0.35 : 0) - points.rotation.x) * 0.05;

    renderer.render(scene, camera);
  };

  if (reduced) {
    renderer.render(scene, camera);
    return;
  }
  raf = requestAnimationFrame(tick);

  new IntersectionObserver(([e]) => { running = e.isIntersecting; }).observe(canvas);
  document.addEventListener('visibilitychange', () => { running = !document.hidden; });
  return () => cancelAnimationFrame(raf);
}
