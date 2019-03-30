var renderer, scene, camera;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];
//var group = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
  for (var y = -35; y < 40; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y = 0.5;

      mesh.rotation.x = Math.random() * 2 *Math.PI;

      var randomValueX  = (Math.random() * 0.1) - 0.05;
      var randomValueY  = (Math.random() * 0.1) - 0.05;
      randomRotationX.push(randomValueX);
      randomRotationY.push(randomValueY);

      scene.add(mesh);


      /*group = new THREE.Group();
          //group.rotation.x += 0.1;
          for ( var i = 0; i < 20; i ++ ){


              mesh.rotation.x = Math.random() * 100 - 50;
              mesh.rotation.y = Math.random() * 100 - 50;
              mesh.rotation.z = Math.random() * 100 - 50;

              mesh.rotation.x = Math.random() * 2 * Math.PI;
              mesh.rotation.y = Math.random() * 2 * Math.PI;

              mesh.matrixAutoUpdate = false;
              mesh.updateMatrix();

            }*/







          //scene.add( group );
          cubes.push(mesh);

    }
  }
  console.log(cubes);
//  console.log(group);
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){

//rot += 0.01;
cubes.forEach(function(c,i){
  c.rotation.x += randomRotationX[i];
  c.rotation.y += randomRotationY[i];

})

/*
group.forEach(function(g,i){
  g.rotation.x = rot;
}

)*/

  //forEach takes all the array entries and passes the c as the object, and i as the index
  //cubes.forEach(function(c, i) {
    //c.rotation.x = rot; //Rotate the object that is referenced in c
  //});
  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();
