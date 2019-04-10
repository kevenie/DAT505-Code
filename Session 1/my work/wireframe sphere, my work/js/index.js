var scene, camera, renderer;
var geometry1, material1, line1, mesh1;
var geometry2, material2, mesh2;
var light, helper;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

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

  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  geometry1 = new THREE.IcosahedronGeometry( 200,1);
  material1 = new THREE.MeshBasicMaterial( {wireframe: true,color:"#00FFFF"} );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1 = new THREE.EdgesHelper( mesh1,0xffff00 );
  mesh1.position.z = -900;
  mesh1.position.y = -50;

  geometry2 = new THREE.IcosahedronGeometry( 100,1);
  material2 = new THREE.MeshBasicMaterial( {color:"#ff0000"});

  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2 = new THREE.EdgesHelper( mesh2, 0xffff00);
  mesh2.position.z = -900;
  mesh2.position.y = -50;

 //light = new THREE.DirectionalLight( 0xFFFFFF );

// helper = new THREE.DirectionalLightHelper( light, 5 );

scene.add( helper );

// Add mesh to scene

  scene.add( mesh1 );
  scene.add( mesh2 );

  //scene.add( border9 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0; //Continuously rotate the mesh
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0; //Continuously rotate the mesh
  mesh2.rotation.z += 0.5;


  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
