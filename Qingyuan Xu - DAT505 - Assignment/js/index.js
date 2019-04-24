var container, stats;
var camera, scene, raycaster, renderer, geometryy, meshy, materialy, texturey;
var de2ra = function(degree) {
return degree*(Math.PI/180);};
var radius = 100, theta = 0;
var listener = new THREE.AudioListener();// create an AudioListener and add it to the camera
var sound = new THREE.Audio( listener );
var audioLoader = new THREE.AudioLoader();
var spheresNum = 250;
var spheres = [];//create many sphere to become snow
var speed = [];//random speed for each part of snow

  function swap_music() {
    var oAudio = document.getElementById('myaudio');
    if (oAudio.paused) {
      oAudio.play();
    }
    else {
      oAudio.pause();
    }
  }//add music-water.mp3

  init();
  animate();
  swap_music();

  function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(0,0,85);

    camera.add( listener ); //Audio - Settings
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    scene = new THREE.Scene();

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

    //skybox
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

    var light = new THREE.DirectionalLight( 0xffffff, 1 );//DirectionalLight can be regarded as a light source that simulates the sun.
    light.position.set( 1, 1, 1 ).normalize();
    scene.add( light );
    var ambient = new THREE.AmbientLight( 0xffffff );//A light source that affects the entire scene
    scene.add( ambient );

    //add Water
    var textureLoader = new THREE.TextureLoader();
    textureLoader.load( 'textures/pool2.jpg', function ( map ) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 16;
      map.repeat.set( 4, 4 );
    } );// Use pool2 as txture of pool bottom. THREE.RepeatWrapping is used for customing UV mapping.
    //The pixels at the edge of the texture are stretched to fill the remaining space.(This line is translated in Google Translation)

    var waterGeometry = new THREE.PlaneBufferGeometry( 200, 200 );//Create a flat skeleton
    var flowMap = textureLoader.load( 'textures/water/Water_1_M_Flow.jpg' );
    water = new THREE.Water( waterGeometry, {
      scale: 2,
      textureWidth: 1024,
      textureHeight: 1024,
      flowMap: flowMap
    } );
    water.position.y = -5;
    water.rotation.x = Math.PI * - 0.5;
    scene.add( water );

    // flow map helper  Make the water flow
    var helperGeometry = new THREE.PlaneBufferGeometry( 200, 200 );
    var helperMaterial = new THREE.MeshBasicMaterial( { map: flowMap } );
    var helper = new THREE.Mesh( helperGeometry, helperMaterial );
    helper.position.y = -4.99;
    helper.rotation.x = Math.PI * - 0.5;
    helper.visible = false;
    scene.add( helper );

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
    // laohan
    var mtlLoaderlaohan = new THREE.MTLLoader();
    mtlLoaderlaohan.load("modles/laohan.mtl", function(materialslaohan){
      materialslaohan.preload();
      var objLoaderlaohan = new THREE.OBJLoader();
      objLoaderlaohan.setMaterials(materialslaohan);
      objLoaderlaohan.load("modles/laohan.obj", function(meshlaohan){
        meshlaohan.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        meshlaohan.position.x = -8;
        meshlaohan.position.y = -5.3;
        meshlaohan.position.z = 70;
        meshlaohan.rotation.y = de2ra(165);
        meshlaohan.scale.x = 0.15;
        meshlaohan.scale.y = 0.15;
        meshlaohan.scale.z = 0.15;
        scene.add(meshlaohan);
      });
    });
    //hehua
    var mtlLoaderhehua = new THREE.MTLLoader();
    mtlLoaderhehua.load("modles/hehua.mtl", function(materialshehua){
      materialshehua.preload();
      var objLoaderhehua = new THREE.OBJLoader();
      objLoaderhehua.setMaterials(materialshehua);
      objLoaderhehua.load("modles/hehua.obj", function(meshhehua){
        meshhehua.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        meshhehua.position.x = 40;
        meshhehua.position.y = -5;
        meshhehua.position.z = 15;
        meshhehua.scale.x = 0.8;
        meshhehua.scale.y = 0.8;
        meshhehua.scale.z = 0.8;
        scene.add(meshhehua);
      });
    });
    //hehua2
    var mtlLoaderhehua2 = new THREE.MTLLoader();
    mtlLoaderhehua2.load("modles/hehua.mtl", function(materialshehua2){
      materialshehua2.preload();
      var objLoaderhehua2 = new THREE.OBJLoader();
      objLoaderhehua2.setMaterials(materialshehua2);
      objLoaderhehua2.load("modles/hehua.obj", function(meshhehua2){
        meshhehua2.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        meshhehua2.position.x = -35;
        meshhehua2.position.y = -5;
        meshhehua2.position.z = -10;
        meshhehua2.scale.x = 0.8;
        meshhehua2.scale.y = 0.8;
        meshhehua2.scale.z = 0.8;
        scene.add(meshhehua2);
      });
    });
    //hehua3
    var mtlLoaderhehua3 = new THREE.MTLLoader();
    mtlLoaderhehua3.load("modles/hehua.mtl", function(materialshehua3){
      materialshehua3.preload();
      var objLoaderhehua3 = new THREE.OBJLoader();
      objLoaderhehua3.setMaterials(materialshehua3);
      objLoaderhehua3.load("modles/hehua.obj", function(meshhehua3){
        meshhehua3.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        meshhehua3.position.x = -38;
        meshhehua3.position.y = -5;
        meshhehua3.position.z = 40;
        meshhehua3.scale.x = 0.3;
        meshhehua3.scale.y = 0.3;
        meshhehua3.scale.z = 0.3;
        scene.add(meshhehua3);
      });
    });
    //hehua
    var mtlLoader3 = new THREE.MTLLoader();
    mtlLoader3.load("modles/hehua.mtl", function(materials3){
      materials3.preload();
      var objLoader3 = new THREE.OBJLoader();
      objLoader3.setMaterials(materials3);
      objLoader3.load("modles/hehua.obj", function(mesh3){
        mesh3.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        mesh3.position.x = 10;
        mesh3.position.y = -5;
        mesh3.position.z = 75;
        mesh3.scale.x = 0.12;
        mesh3.scale.y = 0.12;
        mesh3.scale.z = 0.12;
        scene.add(mesh3);
      });
    });
    // heye
    var mtlLoader4 = new THREE.MTLLoader();
    mtlLoader4.load("modles/heye.mtl", function(materials4){
      materials4.preload();
      var objLoader4 = new THREE.OBJLoader();
      objLoader4.setMaterials(materials4);
      objLoader4.load("modles/heye.obj", function(mesh4){
        mesh4.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        mesh4.position.x = -15;
        mesh4.position.y = -5;
        mesh4.position.z = 20;
        mesh4.rotation.y = de2ra(180);
        mesh4.scale.x = 0.3;
        mesh4.scale.y = 0.3;
        mesh4.scale.z = 0.3;
        scene.add(mesh4);
      });
    });
    //heye2
    var mtlLoader5 = new THREE.MTLLoader();
    mtlLoader5.load("modles/heye.mtl", function(materials5){
      materials5.preload();
      var objLoader5 = new THREE.OBJLoader();
      objLoader5.setMaterials(materials5);
      objLoader5.load("modles/heye.obj", function(mesh5){
        mesh5.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        mesh5.position.x = 5;
        mesh5.position.y = -5;
        mesh5.position.z = 68;
        mesh5.scale.x = 0.2;
        mesh5.scale.y = 0.2;
        mesh5.scale.z = 0.2;
        scene.add(mesh5);
      });
    });
    //guanyin
    var mtlLoader6 = new THREE.MTLLoader();
    mtlLoader6.load("modles/guanyin.mtl", function(materials6){
      materials6.preload();
      var objLoader6 = new THREE.OBJLoader();
      objLoader6.setMaterials(materials6);
      objLoader6.load("modles/guanyin.obj", function(mesh6){
        mesh6.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        mesh6.scale.x = 0.4;
        mesh6.scale.y = 0.4;
        mesh6.scale.z = 0.4;
        mesh6.position.y = -5;
        mesh6.position.z = -20;
        mesh6.rotation.y = de2ra(-90);
        scene.add(mesh6);
      });
    });
    //shufa
    var mtlLoader7 = new THREE.MTLLoader();
    mtlLoader7.load("modles/shufa.mtl", function(materials7){
      materials7.preload();
      var objLoader7 = new THREE.OBJLoader();
      objLoader7.setMaterials(materials7);
      objLoader7.load("modles/shufa.obj", function(mesh7){
        mesh7.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        mesh7.scale.x = 1.2;
        mesh7.scale.y = 1.2;
        mesh7.scale.z = 1.2;
        mesh7.position.x = -2;
        mesh7.position.y = 45;
        mesh7.position.z = -40;

        scene.add(mesh7);
      });
    });
    //render
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
  }//THe OrbitControls is utilized for debugging.
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function onDocumentMouseMove( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

  function animate() {
    requestAnimationFrame( animate );
  //Set Array to create many small spheres to be snow.
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

    render();
  }

  function render() {
    camera.lookAt( scene.position );
    camera.updateMatrixWorld();

    renderer.render( scene, camera );
  }//
