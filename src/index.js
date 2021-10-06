import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GUNDAM from './mobile_suit_gundam_figurine/scene.gltf'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040 );
scene.add( light );

const loader = new GLTFLoader();

loader.load(GUNDAM, function (GLTFLoader) {

    scene.add( gltf.scene );

}, undefined, function ( error ) {
    console.error( error );

});

const geometry = new THREE.ConeGeometry(5, 5, 4);
let matParams = { color: 0xffffff };
const material = new THREE.MeshStandardMaterial( matParams );

const pyramid = new THREE.Mesh( geometry, material );
pyramid.position.set(0, -5, -10);
scene.add(pyramid);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();