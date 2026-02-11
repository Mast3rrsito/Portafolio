//////////////////////////
// ESCENA
//////////////////////////

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(6,6,6);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;

document.body.appendChild(renderer.domElement);

//////////////////////////
// ILUMINACIÓN
//////////////////////////

scene.add(new THREE.AmbientLight(0xffffff, 0.35));

const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
mainLight.position.set(-12, 8, 5);
scene.add(mainLight);

const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
rimLight.position.set(5, -5, -5);
scene.add(rimLight);

//////////////////////////
// RUBIK 3x3
//////////////////////////

const rubik = new THREE.Group();
scene.add(rubik);

const pieceSize = 0.95;
const offset = 1;

const material = new THREE.MeshStandardMaterial({
  color: 0x1a1a1a,
  metalness: 1,
  roughness: 0.18
});

let pieces = [];

for(let x=-1;x<=1;x++){
  for(let y=-1;y<=1;y++){
    for(let z=-1;z<=1;z++){

      const geo = new THREE.BoxGeometry(pieceSize,pieceSize,pieceSize);
      const cube = new THREE.Mesh(geo, material.clone());
      cube.position.set(x*offset,y*offset,z*offset);

      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({color:0x000000})
      );
      cube.add(line);

      rubik.add(cube);
      pieces.push(cube);
    }
  }
}

//////////////////////////
// MOUSE ROTATION SUAVE
//////////////////////////

let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", e => {
  const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

  targetY = mouseX * 0.6;
  targetX = mouseY * 0.6;
});

//////////////////////////
// GIRO DE CARAS
//////////////////////////

let rotating = false;
let rotationGroup;

function rotateFace(axis, layer){

  if(rotating) return;
  rotating = true;

  rotationGroup = new THREE.Group();
  rubik.add(rotationGroup);

  pieces.forEach(piece => {
    if(Math.round(piece.position[axis]) === layer){
      rotationGroup.attach(piece);
    }
  });

  let angle = 0;

  function animateRotation(){
    angle += 0.08;
    rotationGroup.rotation[axis] = angle;

    if(angle >= Math.PI/2){
      rotationGroup.rotation[axis] = Math.PI/2;

      while(rotationGroup.children.length > 0){
        rubik.attach(rotationGroup.children[0]);
      }

      rubik.remove(rotationGroup);
      rotating = false;
      return;
    }

    requestAnimationFrame(animateRotation);
  }

  animateRotation();
}

setInterval(()=>{
  const axes = ["x","y","z"];
  const axis = axes[Math.floor(Math.random()*3)];
  const layer = [-1,0,1][Math.floor(Math.random()*3)];
  rotateFace(axis, layer);
},3000);

//////////////////////////
// LOOP
//////////////////////////

function animate(){
  requestAnimationFrame(animate);

  rubik.rotation.y += (targetY - rubik.rotation.y) * 0.05;
  rubik.rotation.x += (targetX - rubik.rotation.x) * 0.05;

  renderer.render(scene,camera);
}

animate();

window.addEventListener("resize", ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
