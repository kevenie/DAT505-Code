## Test2-texture ##

#### Course Description ####
This session teachs us how to load pictures to make materials for the meshes.

#### Usage ####
```html
<script src="build/three.js"></script>...
```

* the camera, mesh and other relevant elements here are same as the first code.

```javascript
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```

* Create two kinds of light. SpotLight makes the shadow while AmbientLight let each mesh shine.

```javascript
var texture = new THREE.TextureLoader().load('texture/4.jpg');
var material16 = new THREE.MeshBasicMaterial({map: texture});
```

* Make a folder named *texture* and put the picture in it. Then invoke them when it is necessary. So the material can use the texture.

```javascript
rot += 0.01;
mesh1.rotation.x = rot+1;
mesh1.rotation.y = rot+1;
mesh2.rotation.x = rot;
mesh2.rotation.y = rot;
```
* Set a criterion and it is convenient to change the other data.
![Image text](/pictures/cubes texture.png)

#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
