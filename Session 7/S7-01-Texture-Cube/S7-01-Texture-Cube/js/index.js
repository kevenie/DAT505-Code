//Setup the global variables
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubeNum = 10;
var cubes = [];
var speed = [];

function init() {
	// Create a scene
	scene = new THREE.Scene();

	// Create a geometry
	// 	Create a box (cube) of 10 width, length, and height
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

	// Load a texture
	//texture = new THREE.TextureLoader().load( "texture.jpg" );
	//texture2 = new THREE.TextureLoader().load( "(5).jpg" );
	let randomSelection = Math.round(Math.random()*4)+1;
	 //texture3 = new THREE.TextureLoader().load("texture" + randomSelection+".jpg");
 texture3 = new THREE.TextureLoader().load("texture2.jpg");
 texture1 = new THREE.TextureLoader().load("texture0.jpg");
  texture2 = new THREE.TextureLoader().load("texture1.jpg");
	// Create a MeshBasicMaterial with a loaded texture
	material = new THREE.MeshBasicMaterial( { map: texture3} );
	material2 = new THREE.MeshBasicMaterial( { map: texture1} );
	material3 = new THREE.MeshBasicMaterial( { map: texture2} );

	// Combine the geometry and material into a mesh
	mesh = new THREE.Mesh( geometry, material );
	mesh2 = new THREE.Mesh( geometry, material2 );
	mesh3 = new THREE.Mesh( geometry, material3 );
	for (let i=0; i<cubeNum; i++){
		let randomValue = Math.random()*0.5;
		speed.push(randomValue);
	}
//	mesh2 = new THREE.Mesh( geometry, material2 );
	// Add the mesh to the scene
	scene.add( mesh );
	cubes.push( mesh );
	scene.add( mesh2 );
	cubes.push( mesh2 );
	scene.add( mesh3 );
	cubes.push( mesh3 );

	// Create a camera
	// 	Set a Field of View (FOV) of 75 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;

	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
}

function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );

	// Rotate the x position of the mesh by 0.03
	mesh.rotation.x += 0.02;
	// Rotate the y position of the mesh by 0.02
	mesh.rotation.y += 0.01;

	//Move the mesh towards the bottom of the screen
	//mesh.position.y -= 0.2;

//	mesh2.position.x =15;
/*	mesh2.position.y -= 0.1;
	mesh2.rotation.x += 0.02;
	mesh2.rotation.y += 0.01;*/

	for (let i=0; i<cubes.length; i++) {
	  	cubes[i].rotation.x += 0.02;
			cubes[i].rotation.y += 0.01;
			cubes[i].position.y -= speed[i];

	//If the mesh passes the bottom of the screen,
	//make it appear on the top. Also x position is randomized

  if (cubes[i].position.y<-50){
		cubes[i].position.y = 30;
		cubes[i].position.x = (Math.random() * -40) +20;
		cubes[i].scale.x =(Math.random() * -2) + 1;
		cubes[i].scale.y =(Math.random() * -2) + 1;
		cubes[i].scale.z =(Math.random() * -2) + 1;
	}
}
	/*if (mesh.position.y <- 30){
		mesh.position.y = 35;
		mesh.position.x = (Math.random() * -20) +10;
	}*/

/*	if (mesh2.position.y <- 30){
		mesh2.position.y = 35;
		mesh2.position.x = (Math.random() * -20) +10;
	}*/

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

init();
animate();
