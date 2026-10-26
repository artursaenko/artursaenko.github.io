<template>
  <canvas ref="canvas" class="network" aria-hidden="true"></canvas>
</template>

<script setup>
// Slowly drifting nodes that connect when they come close, like devices in a network.
// Static when the visitor prefers reduced motion, paused when off screen or in a background tab.
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref(null);
let frame = 0;
let running = false;
let nodes = [];
let observer;
let width = 0;
let height = 0;
let ctx;

const LINK_DISTANCE = 130;

function resize() {
  const el = canvas.value;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = el.clientWidth;
  height = el.clientHeight;
  el.width = width * ratio;
  el.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.round(Math.min(60, Math.max(18, (width * height) / 16000)));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < LINK_DISTANCE) {
        ctx.strokeStyle = `rgba(138, 148, 161, ${0.45 * (1 - d / LINK_DISTANCE)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  ctx.fillStyle = "rgba(138, 148, 161, 0.8)";
  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function step() {
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > width) n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
  }
  draw();
  if (running) frame = requestAnimationFrame(step);
}

function start() {
  if (running || reducedMotion() || document.hidden) return;
  running = true;
  frame = requestAnimationFrame(step);
}

function stop() {
  running = false;
  cancelAnimationFrame(frame);
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const onVisibility = () => (document.hidden ? stop() : start());
const onResize = () => {
  resize();
  draw();
};

onMounted(() => {
  ctx = canvas.value.getContext("2d");
  resize();
  draw();
  observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
  observer.observe(canvas.value);
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  stop();
  observer?.disconnect();
  document.removeEventListener("visibilitychange", onVisibility);
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped>
.network {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  pointer-events: none;
}
</style>
