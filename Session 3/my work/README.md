## Test3-Set Group ##

#### Course Description ####
This session teachs us how to set group for ease of management.

#### Usage ####
```html
<script src="build/three.js"></script>...
```

* the camera, mesh and other relevant elements here are same as the first code.

```javascript
var light1 = new THREE.AmbientLight(0xffffff, 1);
scene.add(light1);
var light2 = new THREE.PointLight(0xffffff, 1);
scene.add(light2);
```

* Create two kinds of light. SpotLight makes the shadow while AmbientLight let each mesh shine.

```javascript
var geometry1 = new THREE.ConeGeometry(10, 20, 2);
var geometry2 = new THREE.ConeGeometry(25, 50, 2);
var geometry3 = new THREE.CylinderGeometry( 30, 30, 100, 32 );
var geometry4 = new THREE.CylinderGeometry( 40, 30, 100, 32 );
var geometry5 = new THREE.CylinderGeometry( 30, 40, 100, 32 );
var geometry6 = new THREE.CylinderGeometry( 20, 30, 100, 32);
var geometry7 = new THREE.CylinderGeometry( 10, 20, 100, 32);
var geometry8 = new THREE.BoxGeometry( 1000,1000,1000);
var material = new THREE.MeshBasicMaterial( { color: "#FFEFD5" } );
var texture = new THREE.TextureLoader().load('texture/tree.jpg');
var material2 = new THREE.MeshBasicMaterial({map: texture});
var texture2 = new THREE.TextureLoader().load('texture/shuye.jpg');
var material3 = new THREE.MeshBasicMaterial({map: texture2});
var texture3 = new THREE.TextureLoader().load('texture/shu.jpg');
var material4 = new THREE.MeshBasicMaterial({map: texture3});

```

* Set **Cone**,**CylinderGeometry** and load **textures**.

```javascript
var newgroup = new THREE.Group();
newgroup.position.x = 0;
newgroup.position.y = 0;
newgroup.position.z = 0;
newgroup.add(cone);
newgroup.add(cone2);
newgroup.add(cone3);
newgroup.add(cone4);
newgroup.add(cone5);
newgroup.add(cone6);
newgroup.add(cone7);
newgroup.add(cone8);
newgroup.add(cylinder);
newgroup.add(cylinder2);
newgroup.add(cylinder3);
newgroup.add(cylinder4);
newgroup.add(cylinder5);
newgroup.add(cylinder6);
newgroup.add(cylinder7);
newgroup.add(cylinder8);
newgroup.add(cylinder9);
newgroup.add(cylinder10);
newgroup.add(cylinder11);
newgroup.add(cylinder12);
newgroup.add(cylinder13);
newgroup.add(cylinder14);

scene.add(newgroup);
```
* Create a group to contain and load cones and cylinders. Set it in the middle of screen

![Image text](/pictures/tree.png)

#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
