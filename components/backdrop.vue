<script setup lang="ts">
import * as THREE from "three";
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
const container = document.createElement("div");
console.log("HIJAAA", container);

container.classList.add("sick-bg");
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
const aspectRatio = WIDTH / HEIGHT;
const fieldOfView = 75;
const nearPlane = 1;
const farPlane = 1000;
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane
);
let geometry: THREE.Geometry;
let starStuff: THREE.PointsMaterial;
let materialOptions: THREE.PointsMaterialParameters;
let stars: THREE.Points;

init();
animate();

function init() {
  document.body.appendChild(container);

  camera.position.z = farPlane / 2;

  scene.fog = new THREE.FogExp2(0x000000, 0.0003);

  // The wizard's about to get busy.
  starForge();

  renderer.setClearColor(0x000011, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);

  // stats = new Stats();
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.top = "0px";
  // stats.domElement.style.right = "0px";
  // container.appendChild(stats.domElement);

  window.addEventListener("resize", onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.position.x += (90 - camera.position.x) * 0.005;
  camera.position.y += (-10 - camera.position.y) * 0.005;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function onWindowResize() {
  // Everything should resize nicely if it needs to!
  var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(WIDTH, HEIGHT);
}

function starForge() {
  /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
			are you really surprised at this point?
													*/
  var starQty = 45000;
  geometry = new THREE.SphereGeometry(1000, 100, 50);

  materialOptions = {
    size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
    opacity: 0.7,
  };

  starStuff = new THREE.PointsMaterial(materialOptions);

  // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

  for (var i = 0; i < starQty; i++) {
    var starVertex = new THREE.Vector3();
    starVertex.x = Math.random() * 2000 - 1000;
    starVertex.y = Math.random() * 2000 - 1000;
    starVertex.z = Math.random() * 2000 - 1000;

    geometry.vertices.push(starVertex);
  }

  stars = new THREE.Points(geometry, starStuff);
  scene.add(stars);
}
</script>
