## Test7-Array ##

#### Course Description ####
This session teachs us how to create mesh more efficiently by setting arrays.

#### Usage ####
```html
<script src="build/three.js"></script>...
```

* the camera, mesh and some relevant elements here are same as the first code.

```javascript
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubeNum = 10;
var cubes = [];
var speed = [];
```

* Define the arrays I need firstly.

```javascript
for (let i=0; i<cubeNum; i++){
  let randomValue = Math.random()*0.5;
  speed.push(randomValue);
}
```

* **Math.random()** means choose number  between 0 and 1.  
* I want each square has its own random speed which is calculated in the array.

```javascript
let randomSelection = Math.round(Math.random()*4)+1;
```
* **Math.round()** --select integer
* The selected number of object must a number that is a positive integer not zero.

```javascript
if (cubes[i].position.y<-50){
  cubes[i].position.y = 30;
  cubes[i].position.x = (Math.random() * -40) +20;
  cubes[i].scale.x =(Math.random() * -2) + 1;
  cubes[i].scale.y =(Math.random() * -2) + 1;
  cubes[i].scale.z =(Math.random() * -2) + 1;
}
```
* Set a border for cubes. Here is the legend.
![Image text](/pictures/pic.png)
#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
