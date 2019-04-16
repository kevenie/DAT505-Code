var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;

var objects = [];

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.set(0,0,100);

  //Audio - Settings
  camera.add( listener );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );
  var ambient = new THREE.AmbientLight( 0xffffff );
scene.add( ambient );

  var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
//add
  var groundGeometry = new THREE.PlaneBufferGeometry( 100, 100, 50, 50 );
			var groundMaterial = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
			var ground = new THREE.Mesh( groundGeometry, groundMaterial );
			ground.rotation.x = Math.PI * - 0.5;
			scene.add( ground );

      var textureLoader = new THREE.TextureLoader();
			textureLoader.load( 'textures/pool.jpg', function ( map ) {
				map.wrapS = THREE.RepeatWrapping;
				map.wrapT = THREE.RepeatWrapping;
				map.anisotropy = 16;
				map.repeat.set( 4, 4 );
				groundMaterial.map = map;
				groundMaterial.needsUpdate = true;
			} );


     // wateradd  问题
      			var waterGeometry = new THREE.PlaneBufferGeometry( 200, 200 );
      			var flowMap = textureLoader.load( 'textures/water/Water_1_M_Flow.jpg' );
      			water = new THREE.Water( waterGeometry, {
      				scale: 2,
      				textureWidth: 1024,
      				textureHeight: 1024,
      				flowMap: flowMap
      			} );
      			water.position.y = 1;
      			water.rotation.x = Math.PI * - 0.5;
      			scene.add( water );

            // flow map helper
            			var helperGeometry = new THREE.PlaneBufferGeometry( 200, 200 );
            			var helperMaterial = new THREE.MeshBasicMaterial( { map: flowMap } );
            			var helper = new THREE.Mesh( helperGeometry, helperMaterial );
            			helper.position.y = 1.01;
            			helper.rotation.x = Math.PI * - 0.5;
            			helper.visible = false;
            			scene.add( helper );



  // Model/material loading!
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


        scene.add(mesh);

  		});
  	});

//
	var mtlLoader2 = new THREE.MTLLoader();
	mtlLoader2.load("modles/hehua.mtl", function(materials2){

		materials2.preload();

    var objLoader2 = new THREE.OBJLoader();
		objLoader2.setMaterials(materials2);

  		objLoader2.load("modles/hehua.obj", function(mesh2){
  			mesh2.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});
//mesh
        mesh2.position.x = 30;

        scene.add(mesh2);

  		});
  	});


 // Model3
    var mtlLoader3 = new THREE.MTLLoader();
    mtlLoader3.load("modles/base.mtl", function(materials3){

      materials3.preload();

      var objLoader3 = new THREE.OBJLoader();
      objLoader3.setMaterials(materials3);

        objLoader3.load("modles/base.obj", function(mesh3){
          mesh3.traverse(function(node){
            if( node instanceof THREE.Mesh ){
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          mesh3.position.x = -30;
          mesh3.position.y = -25;
          mesh3.position.z = -50;


mesh3.scale.x = 500;
mesh3.scale.y = 500;
mesh3.scale.z = 500;

          scene.add(mesh3);

        });
      });


      // Model4
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
               //mesh3.position.x = -30;
               //mesh3.position.y = -25;
               //mesh3.position.z = -50;


      mesh4.scale.x = 1;
      mesh4.scale.y = 1;
      mesh4.scale.z = 1;

               scene.add(mesh4);

             });
           });

//
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );


  				controls = new THREE.OrbitControls( camera, renderer.domElement );
  				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
  				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  				controls.dampingFactor = 0.25;
  				controls.screenSpacePanning = false;
  				controls.minDistance = 100;
  				controls.maxDistance = 500;
  				controls.maxPolarAngle = Math.PI / 2;
  //stats = new Stats();
  //container.appendChild( stats.dom );
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

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

//
function animate() {
  requestAnimationFrame( animate );

  render();
  //stats.update();
}

function render() {
  //Auto rotate camera
  //theta += 0.1;
  //camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  //camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  //camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();

  //Find intersections
  //raycaster.setFromCamera( mouse, camera );
  //var intersects = raycaster.intersectObjects( scene.children );

  /*var intersects = raycaster.intersectObjects( objects, true );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xff0000 );

      audioLoader.load( 'audio/Diploship-Fly.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( false );
        sound.setVolume( 0.5 );
        sound.play();
      });

    }
  } else {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }*/
  renderer.render( scene, camera );
}
