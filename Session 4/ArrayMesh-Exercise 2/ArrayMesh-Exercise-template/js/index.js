var renderer, scene, camera;
var cubes = [];
var rot = 0;
//var rot2 = 0;

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

      if (x>0 && y<=0 ){
      var rot = 0;
      rot += 0.02;}

      else {
      var rot = 0;
      rot += 0.05;   }


      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.x += 360*Math.random();


      scene.add(mesh);
      cubes.push(mesh);
    }
}

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
//  var arr =  [ 0.01, 0.02, 0.03 ];
//  var rot = Math.random((Math.random()*arr.length));
//  var rot = Math.random()*arr.length;
  //alert(arr[rot]);
  //rot += ro;


  rot += 0.01;

//  for (var c = 0; c < 224; c +=1) {
  cubes.forEach(function(c,i){
    c.rotation.z = rot;
  //  c.rotation.y = rot2;

  });
//}
    console.log(cubes);

  renderer.render(scene, camera);
}

init();
drawFrame();
