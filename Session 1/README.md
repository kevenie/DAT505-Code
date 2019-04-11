## Test1-1     geometry combination ##
#### Course  Description ####
This chapter teaches students how to place a few simple shapes on the screen, including objects'
 position and movement.
 *Different section has different emphasis.*

#### Usage -- 1.impossible figure ####
```html
<script src="build/three.js"></script>
```

* I need to add the *'three.js'* component in my work in order to use its function.

```javascript
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
```
* geometry + material = mesh
* Name each mesh to make them easy to remember.

* Use *var cubes = [];/(array)*  is a better choice. I don't need to define so many geometrys which are in the same shape.

```javascript
function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );
}
```

* Create environment(scene,camera,renderer)
Set the size and color.

```javascript
geometry1 = new THREE.BoxGeometry(250, 50, 50);
material1 = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.z = -1500;
scene.add( mesh1 );


geometry4 = new THREE.BoxGeometry(50, 50, 100);
material4 = new THREE.MeshBasicMaterial( { color: "#FFFF00" } );
mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.position.x = -20;
mesh4.position.y = -200;  //黄色
mesh4.position.z = -1500;

// Add mesh to scene
scene.add( mesh4 );
```

* Here I mention two eamples to explain that I want to create some cubes with different sizes and colors.

```javascript
mesh1.rotation.x = 10;
mesh1.rotation.y = 40;
mesh1.rotation.z = 0;
```

* The writing of rotation angle here can be more efficient. By using the conversion can make the angle easier to understand.
* var de2ra = function(degree) {
  return degree*(Math.PI/180);
};
![Image text](/pictures/impossible.png)

#### Usage -- 2.wireframe sphere ####
```javascript
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```
* Based on the code above, set the light.

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0;
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0;
  mesh2.rotation.z += 0.5;

  renderer.setClearColor("#000000");
  renderer.render(scene, camera);
};
```
* += (Continuously rotate the mesh)
![Image text](/pictures/round.png)
#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
