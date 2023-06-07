import * as THREE from 'three';
const material = new THREE.LineDashedMaterial({
  color: 0xffffff,
  linewidth: 3,
  scale: 1,
  dashSize: 5,
  gapSize: 5,
});
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

export default line;
