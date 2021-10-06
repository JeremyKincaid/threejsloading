//import * as THREE from 'three';
import { Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    PointLight,
    ConeGeometry,
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    DoubleSide,
    DirectionalLight,
    BasicShadowMap,
    CameraHelper,
    PCFShadowMap,
    PCFSoftShadowMap
} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

// const light = new AmbientLight( 0x404040 );
// scene.add( light );

const pLight = new PointLight( 0x4287f5, 1, 0, 2 );
pLight.position.set( 0, 15, -15 );
pLight.castShadow = true;
scene.add(pLight);

// const dLight = new DirectionalLight( 0x4287f5 , 1, 100);
// dLight.castShadow = true;
// dLight.position.set(0, 1, 0);

// scene.add( dLight );

// dLight.shadow.mapSize.width = 512; // default
// dLight.shadow.mapSize.height = 512; // default
// dLight.shadow.camera.near = 0.5; // default
// dLight.shadow.camera.far = 500; // default

const geometry = new ConeGeometry(5, 5, 4);
let matParams = { color: 0xffffff };
const material = new MeshStandardMaterial( matParams );

const pyramid = new Mesh( geometry, material );
pyramid.position.set(0, 0, -15);
pyramid.receiveShadow = false;
pyramid.castShadow = true;
scene.add(pyramid);

const pGeo = new PlaneGeometry( 50, 25, 2, 2);
const pMaterial = new MeshStandardMaterial({ color: 0x4287f5, side: DoubleSide });

const floorCeiling = new PlaneGeometry( 50, 50, 2, 2);

const backWall = new Mesh( pGeo, pMaterial );
backWall.position.set(0, 0, -25);
backWall.receiveShadow = true;
scene.add(backWall);

const leftWall = new Mesh( pGeo, pMaterial );
leftWall.position.set( -25, 0, 0 );
leftWall.rotation.set(0, 1.5708, 0);
scene.add(leftWall);

const rightWall = new Mesh ( pGeo, pMaterial );
rightWall.position.set( 25, 0, 0 );
rightWall.rotation.set( 0, 1.5708, 0 );
scene.add(rightWall);

const floor = new Mesh( floorCeiling, pMaterial );
floor.position.set( 0, -12.5, -25 );
floor.rotation.set( 1.5708, 0, 0 );
floor.receiveShadow = true;
scene.add(floor);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    pyramid.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();