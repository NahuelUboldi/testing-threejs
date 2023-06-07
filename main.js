import WebGL from 'three/addons/capabilities/WebGL.js'; // WebGL compatibility check

import renderer from './basic/renderer';
import camera from './basic/camera';
import scene from './basic/scene';
import resize from './basic/resize';
import line from './basic/shapes/line';
import cube from './basic/shapes/cube';
import light from './basic/lights/light';
import directionalLight from './basic/lights/directionaLight';

scene.add(cube);
scene.add(light);
scene.add(directionalLight);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  const mousePosition = {
    x: (e.clientX - window.innerWidth / 2) / 100,
    y: ((e.clientY - window.innerHeight / 2) / 100) * -1,
  };

  cube.position.set(mousePosition.x, mousePosition.y, 0);

  console.log({ ...mousePosition });
});

// animation function
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
resize.start(renderer);

// WebGL compatibility check
// some devices or browsers may still not support WebGL.
if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
