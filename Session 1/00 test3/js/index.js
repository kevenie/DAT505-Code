//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
var geometry9, material9, mesh9;
var geometry10, material10, mesh10;
var geometry11, material11, mesh11;
var geometry12, material12, mesh12;
var geometry13, material13, mesh13;
var geometry14, material14, mesh14;
var geometry15, material15, mesh15;
var geometry16, material16, mesh16;
var geometry17, material17, mesh17;
var geometry18, material18, mesh18;
var geometry19, material19, mesh19;
var geometry20, material20, mesh20;
var geometry21, material21, mesh21;


function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 300, 10000 );

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
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.BoxGeometry(250, 50, 50);
  material1 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1500;

  // Add mesh to scene
  scene.add( mesh1 );

  geometry2 = new THREE.BoxGeometry(50, 250, 50);
  material2 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1500;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh2 );

  geometry3 = new THREE.BoxGeometry(50, 50, 250);
  material3 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1500;
  //mesh2.position.y = -100;

  // Add mesh to scene
  scene.add( mesh3 );

  geometry4 = new THREE.BoxGeometry(50, 50, 100);
  material4 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.x = -20;
  mesh4.position.y = -200;  //黄色
  mesh4.position.z = -1500;

  // Add mesh to scene
  scene.add( mesh4 );

  geometry5 = new THREE.BoxGeometry(50, 100, 50);
  material5 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.x = 0;
  mesh5.position.y = -190;  //蓝色
  mesh5.position.z = -1470;



  // Add mesh to scene
scene.add( mesh5 );

  geometry6 = new THREE.BoxGeometry(100, 50, 50);
  material6 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh6.position.x = 20;
  mesh6.position.y = -200;  //紫色
  mesh6.position.z = -1500;    //-1475


  // Add mesh to scene
  scene.add( mesh6 );

  geometry7 = new THREE.BoxGeometry(50, 100, 50);
  material7 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh7.position.x = 0;
  mesh7.position.y = 190;  //蓝色
  mesh7.position.z = -1470;



  // Add mesh to scene
scene.add( mesh7 );

geometry8 = new THREE.BoxGeometry(100, 50, 50);
material8 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh8 = new THREE.Mesh( geometry8, material8 );
mesh8.position.x = -17;
mesh8.position.y = 210;  //紫色
mesh8.position.z = -1425;    //-1475


// Add mesh to scene
scene.add( mesh8 );

geometry9 = new THREE.BoxGeometry(50, 50, 100);
material9 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh9 = new THREE.Mesh( geometry9, material9 );
mesh9.position.x = 20;
mesh9.position.y = 210;  //黄色 上
mesh9.position.z = -1425;    //-1475


// Add mesh to scene
scene.add( mesh9 );

geometry10 = new THREE.BoxGeometry(50, 50, 100);
material10 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh10 = new THREE.Mesh( geometry10, material10 );
mesh10.position.x = -175;
mesh10.position.y = -100;  //黄色 左下
mesh10.position.z = -1500;    //-1475


// Add mesh to scene
scene.add( mesh10 );

geometry11 = new THREE.BoxGeometry(50, 100, 50);
material11 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
mesh11 = new THREE.Mesh( geometry11, material11 );
mesh11.position.x = -194;
mesh11.position.y = -70;  //LAN色左下
mesh11.position.z = -1500;    //-1475


// Add mesh to scene
scene.add( mesh11 );


geometry12 = new THREE.BoxGeometry(100, 50, 50);
material12 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh12 = new THREE.Mesh( geometry12, material12 );
mesh12.position.x = -180;
mesh12.position.y = -80;  //ZI色左下
mesh12.position.z = -1550;    //-1475


// Add mesh to scene
scene.add( mesh12 );

geometry13 = new THREE.BoxGeometry(100, 50, 50);
material13 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh13 = new THREE.Mesh( geometry13, material13 );
mesh13.position.x = -180;
mesh13.position.y = 160;  //ZI色 zuo shang
mesh13.position.z = -1550;    //-1475


// Add mesh to scene
scene.add( mesh13 );

geometry14 = new THREE.BoxGeometry(50, 100, 50);
material14 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
mesh14 = new THREE.Mesh( geometry14, material14 );
mesh14.position.x = -194;
mesh14.position.y = 122;  //LAN色 zuo shang
mesh14.position.z = -1500;    //-1475

scene.add( mesh14 );

geometry15 = new THREE.BoxGeometry(50, 50, 100);
material15 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh15 = new THREE.Mesh( geometry15, material15 );
mesh15.position.x = -175;
mesh15.position.y = 135;  //黄色 左上
mesh15.position.z = -1475;    //-1475

scene.add( mesh15 );

geometry16 = new THREE.BoxGeometry(100, 50, 50);
material16 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh16 = new THREE.Mesh( geometry16, material16 );
mesh16.position.x = 178;
mesh16.position.y = 140;  //ZI色youshang
mesh16.position.z = -1475;    //-1475


// Add mesh to scene
scene.add( mesh16 );

geometry17 = new THREE.BoxGeometry(50, 100, 50);
material17 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
mesh17 = new THREE.Mesh( geometry17, material17 );
mesh17.position.x = 194;
mesh17.position.y = 130;  //LAN色 you shang
mesh17.position.z = -1500;    //-1475

scene.add( mesh17 );

geometry18 = new THREE.BoxGeometry(50, 50, 100);
material18 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh18 = new THREE.Mesh( geometry18, material18 );
mesh18.position.x = 183;
mesh18.position.y = 168;  //黄色 youshang
mesh18.position.z = -1550;    //-1475

scene.add( mesh18 );

geometry19 = new THREE.BoxGeometry(50, 100, 50);
material19 = new THREE.MeshBasicMaterial( { color: "#00FFFF" } );
mesh19 = new THREE.Mesh( geometry19, material19 );
mesh19.position.x = 194;
mesh19.position.y = -70;  //LAN色 you shang
mesh19.position.z = -1500;    //-1475

scene.add( mesh19 );

geometry20 = new THREE.BoxGeometry(100, 50, 50);
material20 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh20 = new THREE.Mesh( geometry20, material20 );
mesh20.position.x = 178;
mesh20.position.y = -100;  //ZI色youshang
mesh20.position.z = -1500;    //-1475

scene.add( mesh20 );

geometry21 = new THREE.BoxGeometry(50, 50, 100);
material21 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh21 = new THREE.Mesh( geometry21, material21 );
mesh21.position.x = 180;
mesh21.position.y = -80;  //黄色 youshang
mesh21.position.z = -1550;    //-1475

scene.add( mesh21 );


}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x = 0; //Continuously rotate the mesh 最后为10
  mesh1.rotation.y = 40;
  mesh1.rotation.z = 0;

  mesh2.rotation.x = 10; //Continuously rotate the mesh
  mesh2.rotation.y = 40;
  mesh2.rotation.z = 0;

  mesh3.rotation.x = 10; //Continuously rotate the mesh
  mesh3.rotation.y = 40;
  mesh3.rotation.z = 0;

  mesh4.rotation.x = 10; //Continuously rotate the mesh
  mesh4.rotation.y = 40;
  mesh4.rotation.z = 0;

  mesh5.rotation.x = 10; //Continuously rotate the mesh
  mesh5.rotation.y = 40;
  mesh5.rotation.z = 0;

  mesh6.rotation.x = 10; //Continuously rotate the mesh
  mesh6.rotation.y = 40;
  mesh6.rotation.z = 0;           //6

  mesh7.rotation.x = 10; //Continuously rotate the mesh
  mesh7.rotation.y = 40;
  mesh7.rotation.z = 0;

  mesh8.rotation.x = 10; //Continuously rotate the mesh
  mesh8.rotation.y = 40;
  mesh8.rotation.z = 0;
//  mesh.rotation.z = -45;
  mesh9.rotation.x = 10; //Continuously rotate the mesh
  mesh9.rotation.y = 40;
  mesh9.rotation.z = 0;

  mesh10.rotation.x = 10; //Continuously rotate the mesh
  mesh10.rotation.y = 40;
  mesh10.rotation.z = 0;

  mesh11.rotation.x = 10; //Continuously rotate the mesh
  mesh11.rotation.y = 40;
  mesh11.rotation.z = 0;

  mesh12.rotation.x = 10; //Continuously rotate the mesh
  mesh12.rotation.y = 40;
  mesh12.rotation.z = 0;

  mesh13.rotation.x = 10; //Continuously rotate the mesh
  mesh13.rotation.y = 40;
  mesh13.rotation.z = 0;

  mesh14.rotation.x = 10; //Continuously rotate the mesh
  mesh14.rotation.y = 40;
  mesh14.rotation.z = 0;

  mesh15.rotation.x = 10; //Continuously rotate the mesh
  mesh15.rotation.y = 40;
  mesh15.rotation.z = 0;

  mesh16.rotation.x = 10; //Continuously rotate the mesh
  mesh16.rotation.y = 40;
  mesh16.rotation.z = 0;

  mesh17.rotation.x = 10; //Continuously rotate the mesh
  mesh17.rotation.y = 40;
  mesh17.rotation.z = 0;

  mesh18.rotation.x = 10; //Continuously rotate the mesh
  mesh18.rotation.y = 40;
  mesh18.rotation.z = 0;

  mesh19.rotation.x = 10; //Continuously rotate the mesh
  mesh19.rotation.y = 40;
  mesh19.rotation.z = 0;

  mesh20.rotation.x = 10; //Continuously rotate the mesh
  mesh20.rotation.y = 40;
  mesh20.rotation.z = 0;

  mesh21.rotation.x = 10; //Continuously rotate the mesh
  mesh21.rotation.y = 40;
  mesh21.rotation.z = 0;


  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
