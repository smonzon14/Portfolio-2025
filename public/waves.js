import * as THREE from "https://esm.sh/three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const amountX = 24;
const amountY = 60;
const spacer = 40;
const particlesCount = amountX * amountY;
let particles = 0;
let count = 0;

// Additional parameters for dynamic waves
const waveFrequencyX = 0.17;
const waveFrequencyY = 0.3;
const waveAmplitude = 90;
const waveSpeed = 0.02;


function init() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth * 1.2, window.innerHeight);
  document.getElementById("waves-canvas").appendChild(renderer.domElement);

  camera.position.x = 750;
  camera.lookAt(scene.position);

  const positions = new Float32Array(particlesCount * 3);

  let i = 0;
  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i] = ix * spacer - (amountX * spacer) / 2; // x
      positions[i + 1] = 0; // y
      positions[i + 2] = iy * spacer - (amountY * spacer) / 2; // z

      i += 3;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  particles = new THREE.Points(geometry); // add material here

  scene.add(particles);

  renderer.render(scene, camera);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {
  const positions = particles.geometry.attributes.position.array;

  let i = 0;
  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i + 1] =
        Math.sin((ix + count) * waveFrequencyX) * waveAmplitude +
        Math.sin((iy + count) * waveFrequencyY) * waveAmplitude;

      i += 3;
    }
  }

  particles.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);

  count += waveSpeed;
}

init();
