## Test4-Cubes Array ##

#### Course Description ####
This session teachs us how to create mesh more efficiently by setting arrays.

#### Usage -- 1.5*5 Cubes ####
```html
<script src="build/three.js"></script>...
```
```javascript
var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;
...
controls = new THREE.OrbitControls(camera, renderer.domElement);
```

* The camera, mesh and some relevant elements here are same as the first code.
* Here it also use **OrbitControls** component so mouse can be used to change the perspective.

```javascript
for (var x = -5; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -5; y <= 10; y += 5) {
    for (var z = -5; z <= 10; z += 5) {
      console.log("X:" +x+",Y:" +y , );
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);

      if(x<=0 && y>0 && z>0){//WHITE OK
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      }
      else  if(x>0 && y<=0 && z<=0)
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF000});

      }
      else if(x>0 && y>0 && z>0)// BLUE OK
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0x000FF});

      }

      else if(x>0 && y>0 && z<=0)// deep green OK
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0x808000});
      }

      else if(x<=0 && y>0 && z<=0)// GOLD OK
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFD700});
      }

      else if(x<=0 && y<=0 && z>0)// deep RED OK
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0xE9967A});
      }

      else if(x>0 && y<=0 && z>0)// deep RED OK
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0x800000});
      }

      else
      {
        var boxMaterial = new THREE.MeshLambertMaterial({color: 0x0FFFF});

      }//OK LIGHT BLUE
```
![Image text](/pictures/cub.png)
![Image text](/pictures/zhou.png)
* The cubes can be divided into 8 parts.
* **LambertMaterial** is used to create dim but not bright surface.
* **&&** means 'and'.This means that any condition must be considered.

```javascript
function drawFrame(){
rot += 0.01;
cubes.forEach(function(c,i){
  c.rotation.x = rot;
})
```

* a loop array that acts on each object.

#### Usage -- 2.Cubes with different colors and speed. ####
```javascript
var renderer, scene, camera;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];
var rot = 0;
```
```javascript
for (var x = -35; x < 40; x += 5) {
for (var y = -35; y < 40; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    mesh.position.x = x;
    mesh.position.z = y;
    mesh.scale.y = 0.5;

    mesh.rotation.x = Math.random() * 2 *Math.PI;

    var randomValueX  = (Math.random() * 0.1) - 0.05;
    var randomValueY  = (Math.random() * 0.1) - 0.05;
    randomRotationX.push(randomValueX);
    randomRotationY.push(randomValueY);

    scene.add(mesh);
```
* Start from -35 and sequentially add one every 5 pixels. 15 in a row. 15 in a line.
* The color of the material is assigned a random color.
* Assign the value of **randomValueX** and **randomValueY** to **randomRotationX** and **randomRotationY**. Thier range is (-0.05,0.05)

```javascript
function drawFrame(){
cubes.forEach(function(c,i){
  c.rotation.x += randomRotationX[i];
  c.rotation.y += randomRotationY[i];
})
```
* Act on each square。
![Image text](/pictures/random.png)
#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
