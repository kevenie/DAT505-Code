var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;
function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(20, 55, 85);
  camera.lookAt(scene.position);

 var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(1000, 0, 1000);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var spotLight2 = new THREE.SpotLight(0xFFFFFF);
   spotLight2.position.set(-1000, 0, -1000);
   scene.add(spotLight2);

  var amblight = new THREE.SpotLight(0xFFFFFF);
  amblight.position.set(0,1000,0);
 amblight.add(spotLight);
  scene.add(amblight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -5; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -5; y <= 10; y += 5) {
      for (var z = -5; z <= 10; z += 5) {
        console.log("X:" +x+",Y:" +y , );
        var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
        //The color of the material is assigned a random color
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



        //var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
        var mesh1 = new THREE.Mesh(boxGeometry, boxMaterial);

        //mesh.castShadow = true;
        mesh1.position.x = x;
        mesh1.position.z = z;
        mesh1.position.y = y;
        mesh1.scale.y = 0.5;

        //mesh1.rotation.x += 1;
      //  mesh1.rotation.y += 1;

        //mesh1.rotation.y += 0.01;
        /*mesh2.position.x = x;
        mesh2.position.y = y;
        mesh2.position.z = 0;
        mesh2.scale.y = 0.5;

        mesh3.position.x = x;
        mesh3.position.y = y;
        mesh3.position.z = 0;
        mesh3.scale.y = 0.5;*/
        scene.add(mesh1);
        cubes.push(mesh1);
        /*scene.add(mesh2);
        scene.add(mesh3);*/
      }
    }
  }
console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){

rot += 0.01;
cubes.forEach(function(c,i){
  c.rotation.x = rot;
})

  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();
