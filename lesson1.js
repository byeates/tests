var width = window.innerWidth;
var height = window.innerHeight;

// renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ antialias: true });
var cubeGeom = new THREE.BoxGeometry( 1, 1, 1 );
var cubeMat = new THREE.MeshBasicMaterial({ color: 0x1ec876 });
var cube = new THREE.Mesh( cubeGeom, cubeMat );

// initialize
function init()
{
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    scene.add(cube);
    camera.position.z = 5;
    render();
}

// render scene
function render()
{
    requestAnimationFrame( render );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render( scene, camera );
}

init();
