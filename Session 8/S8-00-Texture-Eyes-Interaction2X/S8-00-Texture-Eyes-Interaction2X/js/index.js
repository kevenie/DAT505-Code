// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer, mesh;
var image;
var mouseX = 0, mouseY = 0;
var container;

var eyesNum = 7;
var eyes = [];
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );
		var geometry2 = new THREE.CubeGeometry( 500, 500, 500 );
		texturex = new THREE.TextureLoader().load("texture.jpg");
		materialx = new THREE.MeshBasicMaterial( { map: texturex} );
		mesh2 = new THREE.Mesh( geometry2, materialx );
		scene.add( mesh2 );

	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});


  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}

	for (var i = 0; i < eyesNum; i++) {
		mesh = new THREE.Mesh( geometry, material );

		xPos[i] = Math.random() * 100 - 50;
		yPos[i] = Math.random() * 100 - 50;

		xPos [0] = 0;
		yPos [0] = 0;

		xPos [1] = -50;
		yPos [1] = -50;

		xPos [2] = 50;
		yPos [2] = -50;

		xPos [3] = -50;
		yPos [3] = 50;

		xPos [4] = 50;
		yPos [4] = 50;

		xPos [5] = 25;//
		yPos [5] = 25;//

		xPos [6] = -25;//
		yPos [6] = -25;//

		xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
		yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

		//console.log(xPosMap[1]);

		mesh.position.x = xPos[i];
		mesh.position.y = yPos[i];

		var randSize = Math.random() * 1;
		mesh.scale.x = randSize*0.5;
		mesh.scale.y = randSize*0.5;
		mesh.scale.z = randSize*0.5;

		scene.add( mesh );
		eyes.push( mesh );
	}

	//console.log(mesh);

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
	//mesh2.rotation.z = -300;
}

function render() {
	console.log(mouseY)
	for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

		if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);//left down

		if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);//left up

		if (mouseX<280) eyes[4].rotation.y = map_range(mouseX, 0, 280, -0.2, 0.25);
		else eyes[4].rotation.y = map_range(mouseX, 140, window.innerWidth, -1.5, 0.25);
		if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

		if (mouseX<280) eyes[5].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[5].rotation.y = map_range(mouseX, 140, window.innerWidth, -1.8, 1.14);
		if (mouseY<10) eyes[5].rotation.x = map_range(mouseY, 0, 300, 0, 0.25);
		else eyes[5].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
  }
	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	//mouseX = event.clientX - windowHalfX;
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
