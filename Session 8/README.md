## Test8-Eye Array and Raycast ##

#### Course Description ####
This session teachs us how to create mesh more efficiently by setting arrays and

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
![Image text](/pictures/ray.png)

#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
