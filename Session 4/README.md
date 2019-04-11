## Test4-Cubes Array ##

#### Course Description ####
This session teachs us how to create mesh more efficiently by setting arrays.

#### Usage ####
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


#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
