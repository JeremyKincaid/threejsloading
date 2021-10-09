//import * as THREE from 'three';
import {
    Scene,
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
    PCFSoftShadowMap,
    Color,
    Vector3
} from 'three';

let vLeft = new Vector3(-25, 12.5, 0);
let vRight = new Vector3(25, 12.5, 0);
let vBack = new Vector3(0, 12.5, -25);
let vFloor = new Vector3(0, -12.5, 0);

let isMovingWall = false;
const changeBtn = document.getElementById('change-color');
changeBtn.addEventListener('click', patience);
function patience() {
    if (isMovingWall) {
        alert("BE PATIENT YOU FOOL");
    } else {
        isMovingWall = true;
        vLeft.setX(-100.2);
    }
}

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = BasicShadowMap;
document.body.appendChild(renderer.domElement);

const pLight = new PointLight(0x4287f5, 1, 0, 2);
pLight.position.set(0, 15, 0);
pLight.castShadow = true;
scene.add(pLight);

const geometry = new ConeGeometry(5, 5, 4);
let matParams = { color: 0xffffff };
const material = new MeshStandardMaterial(matParams);

const pyramid = new Mesh(geometry, material);
pyramid.position.set(0, -5, 0);
pyramid.receiveShadow = false;
pyramid.castShadow = true;
scene.add(pyramid);

const planeGeo = new PlaneGeometry(50, 50, 2, 2);
const blueMaterial = new MeshStandardMaterial({ color: 0x4287f5, side: DoubleSide });
const redMaterial = new MeshStandardMaterial({ color: 0xfa020b, side: DoubleSide });

const floorCeiling = new PlaneGeometry(50, 50, 2, 2);

const backWall = new Mesh(planeGeo, blueMaterial);
backWall.receiveShadow = true;
scene.add(backWall);

const leftWall = new Mesh(planeGeo, blueMaterial);
leftWall.rotation.set(0, 1.5708, 0);
scene.add(leftWall);

const rightWall = new Mesh(planeGeo, blueMaterial);
rightWall.rotation.set(0, 1.5708, 0);
scene.add(rightWall);

const floor = new Mesh(floorCeiling, blueMaterial);
floor.rotation.set(1.5708, 0, 0);
floor.receiveShadow = true;
scene.add(floor);

camera.position.z = 20;
camera.position.y = 15;
camera.rotation.x = -0.523599;

function animate() {
    requestAnimationFrame(animate);

    if(leftWall.position.x <= -100.0) {
        vLeft.setX(-25.0);
        vRight.setX(100.2);

        leftWall.material == blueMaterial ? leftWall.material = redMaterial : leftWall.material = blueMaterial;
    }

    if(rightWall.position.x >= 100.0) {
        vRight.setX(25.0);
        vBack.setY(87.7);

        rightWall.material == blueMaterial ? rightWall.material = redMaterial : rightWall.material = blueMaterial;
    }

    if(backWall.position.y >= 87.5) {
        vBack.setY(12.5);
        vFloor.setY(-87.7);

        backWall.material == blueMaterial ? backWall.material = redMaterial : backWall.material = blueMaterial;
    }

    if(floor.position.y <= -87.5) {
        vFloor.setY(-12.5);

        floor.material == blueMaterial ? floor.material = redMaterial : floor.material = blueMaterial;
        pLight.color.equals(new Color(0x4287f5)) ? pLight.color.set(0xfa020b) : pLight.color.set(0x4287f5);
        isMovingWall = false;
    }

    leftWall.position.lerp(vLeft, 0.3);
    rightWall.position.lerp(vRight, 0.3);
    backWall.position.lerp(vBack, 0.3);
    floor.position.lerp(vFloor, 0.3);

    pyramid.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();