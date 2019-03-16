//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();
// Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
// Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------


  var light1 = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 1);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  var geometry1 = new THREE.ConeGeometry(10, 20, 2);
  var geometry2 = new THREE.ConeGeometry(25, 50, 2);
  var geometry3 = new THREE.CylinderGeometry( 30, 30, 100, 32 );
  var geometry4 = new THREE.CylinderGeometry( 40, 30, 100, 32 );
  var geometry5 = new THREE.CylinderGeometry( 30, 40, 100, 32 );
  var geometry6 = new THREE.CylinderGeometry( 20, 30, 100, 32);
  var geometry7 = new THREE.CylinderGeometry( 10, 20, 100, 32);
    var geometry8 = new THREE.BoxGeometry( 1000,1000,1000);
  var material = new THREE.MeshBasicMaterial( { color: "#FFEFD5" } );
  var texture = new THREE.TextureLoader().load('texture/tree.jpg');
  var material2 = new THREE.MeshBasicMaterial({map: texture});
  var texture2 = new THREE.TextureLoader().load('texture/shuye.jpg');
  var material3 = new THREE.MeshBasicMaterial({map: texture2});
  var texture3 = new THREE.TextureLoader().load('texture/shu.jpg');
  var material4 = new THREE.MeshBasicMaterial({map: texture3});

  box = new THREE.Mesh( geometry8, material4 );
  box.position.z = -2000;
  cylinder = new THREE.Mesh( geometry3, material2 );
  cylinder.position.x = -50;
  cylinder.position.y = -210;
  cylinder.position.z = -1000;

  cylinder2 = new THREE.Mesh( geometry3, material2 );
  cylinder2.position.x = -36;
  cylinder2.position.y = -130;
  cylinder2.position.z = -1000;

  cylinder3 = new THREE.Mesh( geometry4, material2 );
  cylinder3.position.x = -30;
  cylinder3.position.y = -50;
  cylinder3.position.z = -1000;

  cylinder4 = new THREE.Mesh( geometry5, material2 );
  cylinder4.position.x = -60;
  cylinder4.position.y = 25;
  cylinder4.position.z = -1000;

  cylinder5 = new THREE.Mesh( geometry5, material2 );
  cylinder5.position.x = 40;
  cylinder5.position.y = -50;
  cylinder5.position.z = -1000;

  cylinder6 = new THREE.Mesh( geometry3, material2 );
  cylinder6.position.x = 120;
  cylinder6.position.y = -27;
  cylinder6.position.z = -1000;

  cylinder7 = new THREE.Mesh( geometry6, material2 );
  cylinder7.position.x = -120;
  cylinder7.position.y = 82;
  cylinder7.position.z = -1000;

  cylinder8 = new THREE.Mesh( geometry6, material2 );
  cylinder8.position.x = -30;
  cylinder8.position.y = 80;
  cylinder8.position.z = -1000;

  cylinder9 = new THREE.Mesh( geometry6, material2 );
  cylinder9.position.x = 150;
  cylinder9.position.y = 10;
  cylinder9.position.z = -1000;

  cylinder10 = new THREE.Mesh( geometry7, material2 );
  cylinder10.position.x = 10;
  cylinder10.position.y = 150;
  cylinder10.position.z = -1000;

  cylinder11 = new THREE.Mesh( geometry7, material2 );
  cylinder11.position.x = -190;
  cylinder11.position.y = 140;
  cylinder11.position.z = -1000;

  cylinder12 = new THREE.Mesh( geometry7, material2 );
  cylinder12.position.x = 210;
  cylinder12.position.y = 80;
  cylinder12.position.z = -1000;

  cylinder13 = new THREE.Mesh( geometry7, material2 );
  cylinder13.position.x = 210;
  cylinder13.position.y = 130;
  cylinder13.position.z = -1000;

  cylinder14 = new THREE.Mesh( geometry7, material2 );
  cylinder14.position.x = 210;
  cylinder14.position.y = -5;
  cylinder14.position.z = -1000;
  cone = new THREE.Mesh( geometry2, material3 );
  cone.position.x = -175;
  cone.position.y = 120;
  cone.position.z = -800;

  cone2 = new THREE.Mesh( geometry2, material3 );
  cone2.position.x = -120;
  cone2.position.y = 60;
  cone2.position.z = -800;

  cone3 = new THREE.Mesh( geometry2, material3 );
cone3.position.x = -80;
  cone3.position.y = 100;
  cone3.position.z = -800;

  cone4 = new THREE.Mesh( geometry2, material3 );
  cone4.position.x = 30;
  cone4.position.y = 130;
  cone4.position.z = -800;

  cone5 = new THREE.Mesh( geometry2, material3 );

  cone5.position.z = -800;

  cone6 = new THREE.Mesh( geometry2, material3 );
  cone6.position.x = 80;
  cone6.position.y = -50;
  cone6.position.z = -800;

  cone7 = new THREE.Mesh( geometry2, material3 );
  cone7.position.x = 130;
  cone7.position.y = 35;
  cone7.position.z = -800;

  cone8 = new THREE.Mesh( geometry2, material3 );
  cone8.position.x = 190;
  cone8.position.y = -20;
  cone8.position.z = -800;

// ------------------------------------------------

// Add mesh to scene
//scene.add( mesh );
//scene.add( mesh2 );
scene.add( box );
scene.add( cone );
scene.add( cone2 );
scene.add( cone3 );
scene.add( cone4 );
scene.add( cone5 );
scene.add( cone6 );
scene.add( cone7 );
scene.add( cone8 );
scene.add( cylinder );
scene.add( cylinder2 );
scene.add( cylinder3 );
scene.add( cylinder4 );
scene.add( cylinder5 );
scene.add( cylinder6 );
scene.add( cylinder7 );
scene.add( cylinder8 );
scene.add( cylinder9 );
scene.add( cylinder10 );
scene.add( cylinder11 );
scene.add( cylinder12 );
scene.add( cylinder13 );
scene.add( cylinder14 );
}

// Render Loop
function render() {
  requestAnimationFrame( render );

  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.00;

  //mesh2.rotation.x += 0.01;
  //mesh2.rotation.y += 0.00;

  cone.rotation.y += de2ra(1);
  //cone2.rotation.y += de2ra(1);
//cone2.rotation.x += de2ra(5);
    cone2.rotation.x += 1

  cone3.rotation.y += de2ra(1);
  cone4.rotation.y += de2ra(1);
  cone5.rotation.y += de2ra(0.5);
cone6.rotation.y += de2ra(1);
  cone7.rotation.y += de2ra(0.5);
  cone8.rotation.y += de2ra(1);
  cylinder2.rotation.z = de2ra(-20);
  cylinder3.rotation.z = de2ra(15);
  cylinder4.rotation.z = de2ra(30);
  cylinder5.rotation.z = de2ra(-70);
  cylinder6.rotation.z = de2ra(-80);
  cylinder7.rotation.z = de2ra(60);
  cylinder8.rotation.z = de2ra(-20);
  cylinder9.rotation.z = de2ra(-30);
  cylinder10.rotation.z = de2ra(-40);
  cylinder11.rotation.z = de2ra(40);
  cylinder12.rotation.z = de2ra(-50);
  cylinder14.rotation.z = de2ra(-65);
//  cone.rotation.x += ;
  // Render the scene

/*  var newgroup = new THREE.Group();
  newgroup.position.x = 0;
  newgroup.position.z = -1000;
  newgroup.add(cone);
  newgroup.add(cone2);
  newgroup.add(cone3);
  newgroup.add(cone4);
  newgroup.add(cone5);
  newgroup.add(cone6);
  newgroup.add(cone7);
  newgroup.add(cone8);
  newgroup.add(cylinder2);
  newgroup.add(cylinder3);
  newgroup.add(cylinder4);
  newgroup.add(cylinder5);
  newgroup.add(cylinder6);
  newgroup.add(cylinder7);
  newgroup.add(cylinder8);
  newgroup.add(cylinder9);
  newgroup.add(cylinder10);
  newgroup.add(cylinder11);
  newgroup.add(cylinder12);
  newgroup.add(cylinder13);
  newgroup.add(cylinder14);*/




  renderer.render(scene, camera);
};

init();
geometry();
render();



//MATERIAL 2:
//var material = new THREE.MeshNormalMaterial();

//MATERIAL 3:
/*
var material = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
*/

//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):
/*
var material = new THREE.MeshLambertMaterial({
color: 0xF3FFE2,
lightMap: null,
lightMapIntensity: 1,
emissive: 0x000000,
emissiveMap: null,
emissiveIntensity: 1,
specularMap: null
});
*/

/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
color: 0xF3FFE2,
specular: 0xffffff,
shininess: 1000,
lightMap: null,
lightMapIntensity: 1,
bumpMap: null,
bumpScale: 1,
normalMap: null,
normalScale: 1,
displacementMap: null,
displacementScale: 1,
displacementBias: 0,
specularMap: null
});
*/

/*
//MATERIAL 7 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
color: 0xF3FFE2,
roughness: 0.5,
metalness: 0.5
});
*/

/*
//MATERIAL 8 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
color: 0xF3FFE2,
roughness: 0,
metalness: 0.5,
reflectivity: 0.5,
clearCoat: 0,
claerCoatRoughness: 0
});
*/
