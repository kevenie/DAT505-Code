## Test8-Eye Array and Raycast ##

#### Course Description ####
This session teachs us how to create mesh more efficiently by setting arrays and tellus how to load modle in code.

#### Usage -- 1.Eye Interaction ####
```javascript
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
```

* the camera, mesh and some relevant elements here are similar as the (Session4) code.

```javascript
var material = new THREE.MeshPhongMaterial( {
  color: 0xffffff,
  specular: 0x050505,
  shininess: 50,
  map: THREE.ImageUtils.loadTexture('images/eye.png'),
});
```

* **MeshPhongMaterial** This material responds to light and is used to create bright, metallic objects.
* Load 'eye' texture.

```javascript
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
  mesh.scale.x = randSize*0.6;
  mesh.scale.y = randSize*0.6;
  mesh.scale.z = randSize*0.6;

  scene.add( mesh );
  eyes.push( mesh );
}
```

* Set array to **Instantiate** eyes and make thier scale randomly.
* **window.innerHeight** is the height of the document display area of the return window.
* **window.innerWidth** is the widtht of the document display area of the return window.

```javascript
for (var i = 0; i < eyesNum; i++) {

      eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
      eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);
  //LD
      if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
      else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
      if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
      else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);
  //LU
      if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
      else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
      if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
      else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
  //RU
      if (mouseX< 590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
      else eyes[4].rotation.y = map_range(mouseX, 590 , window.innerWidth, -0.69 , 0.2);
      if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
      else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
  //RD
      if (mouseX < 590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
      else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.69, 0.2);
      if (mouseY < 810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
      else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);
}
renderer.render( scene, camera );
```
* Actually, this code divide the whole screen into 9 parts.

![Image text](/pictures/eye.png)
![Image text](/pictures/DA.png)

```javascript
mouseX = event.clientX;
mouseY = event.clientY;
```
* Use mouse to control perspective.

#### Usage -- 2.Raycast ####
```javascript
var mouse = new THREE.Vector2(), INTERSECTED;
var	raycaster = new THREE.Raycaster();
```
* If the ray cast by mouse get intersected with object， the code below will work.

![Image text](/pictures/ray2.png)
```javascript
var listener = new THREE.AudioListener();
// create a global audio source
var sound = new THREE.Audio( listener );
// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
...
audioLoader.load( 'audio/A.mp3', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( false );
  sound.setVolume( 0.5 );
  sound.play();
});
```
* Add a audio component. Adjust volume and set it only play once.

```javascript
for (var i=0; i<20; i++){

var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("Blocks.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("hhh.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*400-200, Math.random()*400-200, Math.random()*400-200);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh);
    });
  });
}
```
* Set array because we want to create ship in random position and size.
* **var mtlLoader** and **var objLoader** let atom to read the modle made by modeling software.
* Add to the array so that we can access for raycasting

![Image text](/pictures/ray.png)


#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
