## Final Work by Regi B161006099 ##
# Name:《peace》#

![Image text](https://github.com/kevenie/DAT505-Code/blob/master/Qingyuan%20Xu%20-%20DAT505%20-%20Assignment/textures/pictures/final.jpg)

![Image text](/textures/pictures/2.png)
#### Source of Inspiration ####

I want to express an **eastern philosophy** that is different from western cultures.
Oriental philosophy has a unique charm. Like ancient Chinese, Japanese and Indian artisits were wild about **hidding meanings** in the articles and paintings. I hope that the audience can be inspired by my work.
* For instance, there was a famous painter in China called **Pa Ta Shan Jen**. In this picture, the fish shows the whites of its eyes which embodys author's cynical feelings. And I recently played a game called **SEKIRO Shadows Die Twice**. I really like the **Zen** artistic conception in it.

![Image text](/textures/pictures/badashanren.jpg)

![Image text](/textures/pictures/SEKIRO.jpg)

### Build ###
```html
<script src="build/three.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
<script src="build/OrbitControls.js"></script>
<script src="build/Reflector.js"></script>
<script src="build/Refractor.js"></script>
<script src="build/Water2.js"></script>
<script src="build/WebGL.js"></script>
<script src="build/dat.gui.min.js"></script>
```

* 'OBJ + MTL Loader’ This lines of code is responsible for importing the models.
* 'Water2', 'Reflector', 'Refractor' are responsible for water flow.

### Music ###
```html
<audio id="myaudio" src="music/water.mp3" controls="true" autoplay = "autoplay" loop="true">
```
```javascript
function swap_music() {
  var oAudio = document.getElementById('myaudio');
  if (oAudio.paused) {
    oAudio.play();
  }
  else {
    oAudio.pause();
  }
}//add music-water.mp3
```

* Here I use this music called **The secret of water** to be my background music. : https://music.163.com/#/song?id=25640100

### Snow ###
```javascript
var spheresNum = 250;
var spheres = [];//create many sphere to become snow
var speed = [];//random speed for each part of snow
...
geometryy = new THREE.SphereGeometry( 0.5, 32, 32 );
for (var i=0; i<spheresNum; i++){
  var randomValue = Math.random() * 0.5;
  speed.push(randomValue);

  var randomSelection = Math.round(Math.random()*9);//define random texture

  texturey = new THREE.TextureLoader().load( "textures/xuehua.jpg" );


  materialy = new THREE.MeshBasicMaterial( { map: texturey} );


  meshy = new THREE.Mesh( geometryy, materialy );

  scene.add( meshy );
  spheres.push(meshy);
}
...

for (var i=0; i<spheresNum; i++){

  spheres[i].rotation.x += 0.02;
  spheres[i].rotation.y += 0.02;
  spheres[i].position.y -= speed[i];

  if (spheres[i].position.y <- 5){
    spheres[i].position.y = 80;
    spheres[i].position.x = (Math.random() * -320) + 160;
    spheres[i].position.z = (Math.random() * -200) + 100;
  }
}
```

![Image text](/textures/pictures/snow.jpg)

* Create 250 small spheres and let them fall in the area above in random speed.

### Glow Sphere ###
```javascript
var gtexture = THREE.ImageUtils.loadTexture('textures/guang.png', {}, function () {});//add 'guang.png' texture
var gmaterial = new THREE.MeshLambertMaterial({//The main feature of Lambert material is that only diffuse reflection is considered.
  map: gtexture,
  material: 0.5,//transparency
  transparent: true,//Set whether to transparent
});

var sphere3 = new THREE.Mesh(new THREE.SphereGeometry(40, 110, 140),//The radius is 5, the fitting number of polygons, the fitting number of polygons
gmaterial);//load gmaterial
sphere3.position.set(0, 80, -180);//the Center  of sphere
var pivotPoint = new THREE.Object3D();//3d effect
sphere3.add(pivotPoint);//add 3d effect
scene.add(sphere3);

var sphere4 = new THREE.Mesh(new THREE.SphereGeometry(32, 40, 20),
new THREE.MeshLambertMaterial({
  emissive: 0xffffff,
}));
sphere4.overdraw = true;
sphere4.position.set(0, 80, -180);
scene.add(sphere4);
```
![Image text](/textures/pictures/huiguang1.png)
![Image text](/textures/pictures/huiguang2.jpg)
* Create 2 spheres A and B. A is bigger than B. Use translucent texture and set the bigger sphere's transparency to 50%.
* **Reference**: https://blog.csdn.net/sinat_30352293/article/details/78331293

### SkyBox ###
```javascript
var path = "sky/";//set path
var directions  = ["px", "nx", "py", "ny", "pz", "nz"];//load picture
var format = ".jpg";//format
var skyGeometry = new THREE.BoxGeometry( 5000, 5000, 5000 );//create a box with 5000,5000,5000
var materialArray = [];//set array to create 6 materials for differeent side
for (var i = 0; i < 6; i++)
materialArray.push( new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture( path + directions[i] + format ),//Attach the texture to the image
  side: THREE.BackSide// If I don't set the mirror flip, I'll only see the dark, because I am inside the box
}));
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( skyBox );
```
![Image text](/textures/pictures/sky.png)

![Image text](/textures/pictures/nightsky.jpg)

![Image text](/textures/pictures/nightsky.png)
* I cut the picture into **12** sections and select **6** of them.
* But I should cut them into many **squares** rather than **rectangles**. Because cutting into squares can make them fit closer.
* **SKY PICTURE**: I havn't found accurate source of its copyright because the websites where I found the picture claim that they don't have the copyright.
* **Reference**: https://blog.csdn.net/qq_37994494/article/details/76573540

### Load Models ###
```javascript
// boat  Use obj + mtl to load models in the scene
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("modles/boat.mtl", function(materials){
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("modles/boat.obj", function(mesh){
    mesh.traverse(function(node){
      if( node instanceof THREE.Mesh ){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    mesh.position.x = -8;
    mesh.position.y = -5.6;
    mesh.position.z = 67;
    mesh.rotation.y = de2ra(0);
    mesh.scale.x = 0.35;
    mesh.scale.y = 0.35;
    mesh.scale.z = 0.35;
    scene.add(mesh);
  });
});
```
* Here I have to say this section is the **biggest** challenge to me in the whole process. At the beginning, I want to load some models with animations. So I tried **FBXLoader** and **.js** at first.
![Image text](/textures/pictures/fbx.png)

![Image text](/textures/pictures/FBX.jpg)![Image text](/textures/pictures/js.jpg)

![Image text](/textures/pictures/choose.jpg)

* But the question is **Chorme** can't read local files(pictures) due to safety concerns. If I choose **IE** to run the code, the textures can be loaded, but the effect of water can't run.

* Finally, I perferred to use **OBJLoader** which I am familiar with. But the problem hadn't been sovled. Chorme still didn't allow to read local pictures. I searched on the Internet but the solutions were too difficult to me and I didn't understannd them welll. So I came up with an idea: **Change it**

![Image text](/textures/pictures/mtl1.jpg)
**into**
![Image text](/textures/pictures/mtl2.jpg)

* Change the textures' position. And it works.
#### Links ####
[DAT505-Code Github](https://github.com/kevenie/DAT505-Code)
