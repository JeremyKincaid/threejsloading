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
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

let vLeft = new Vector3(-25, 12.5, 0);
let vRight = new Vector3(25, 12.5, 0);
let vBack = new Vector3(0, 12.5, -25);
let vFloor = new Vector3(0, -12.5, 0);

let isRed = false;
let isGreen = false;
let isBlue = true;

let message = document.getElementById('message');
function showMessage() {
    message.style.color = 'rgba(255, 255, 255, 0.8)';
    setTimeout(() => message.style.color = 'transparent', 2000);
}

const redBtn = document.getElementById('red-btn');
const greenBtn = document.getElementById('green-btn');
const blueBtn = document.getElementById('blue-btn');

redBtn.addEventListener('click', redWalls);
function redWalls() {
    if (isRed) {
        showMessage();
    } else {
        isRed = true;
        isGreen = false;
        isBlue = false;
        vLeft.setX(-100.2);
    }
}

greenBtn.addEventListener('click', greenWalls);
function greenWalls(){
    if (isGreen) {
        showMessage();
    } else {
        isRed = false;
        isGreen = true;
        isBlue = false;
        vLeft.setX(-100.2);
    }
}

blueBtn.addEventListener('click', blueWalls);
function blueWalls(){
    if (isBlue) {
        showMessage();
    } else {
        isRed = false;
        isGreen = false;
        isBlue = true;
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

//Geometry for walls and floor
const planeGeo = new PlaneGeometry(50, 50, 2, 2);

//Materials for different colors
const blueMaterial = new MeshStandardMaterial({ color: 0x4287f5, side: DoubleSide });
const redMaterial = new MeshStandardMaterial({ color: 0xfa020b, side: DoubleSide });
const greenMaterial = new MeshStandardMaterial({ color: 0x4dff00, side: DoubleSide })

//assign walls
const backWall = new Mesh(planeGeo, blueMaterial);
backWall.receiveShadow = true;
scene.add(backWall);

const leftWall = new Mesh(planeGeo, blueMaterial);
leftWall.rotation.set(0, 1.5708, 0);
scene.add(leftWall);

const rightWall = new Mesh(planeGeo, blueMaterial);
rightWall.rotation.set(0, 1.5708, 0);
scene.add(rightWall);

const floor = new Mesh(planeGeo, blueMaterial);
floor.rotation.set(1.5708, 0, 0);
floor.receiveShadow = true;
scene.add(floor);

//move the camera *closer* to the user, slightly above the horizon. Also aim it slightly downwards toward the floor.
camera.position.z = 20;
camera.position.y = 15;
camera.rotation.x = -0.523599;

//collect walls and floor into an array to simplify code later
let building = [];
building.push(leftWall, backWall, rightWall, floor);

/**
 * Once walls (and floor) are out of sight, changes the color and sets their coordinates back
 */
function wallChanger() {
    if (leftWall.position.x <= -100.0) {
        vRight.setX(100.2);
    }

    if (rightWall.position.x >= 100.0) {
        vBack.setY(87.7);
    }

    if (backWall.position.y >= 87.5) {
        vFloor.setY(-87.7);
    }

    if (floor.position.y <= -87.5) {
        vFloor.setY(-12.5);
        vLeft.setX(-25.0);
        vRight.setX(25.0);
        vBack.setY(12.5);

        building.forEach(plane => {
            if (isRed) {
                plane.material.setValues({ color: 0xfa020b });
                pLight.color.set(0xfa020b);
            } else if (isGreen) {
                plane.material.setValues({ color: 0x4dff00 });
                pLight.color.set(0x4dff00);
            } else if (isBlue) {
                plane.material.setValues({ color: 0x4287f5 });
                pLight.color.set(0x4287f5);
            }
        });
    }

}

function animate() {
    requestAnimationFrame(animate);

    wallChanger();

    leftWall.position.lerp(vLeft, 0.15);
    rightWall.position.lerp(vRight, 0.15);
    backWall.position.lerp(vBack, 0.15);
    floor.position.lerp(vFloor, 0.15);

    pyramid.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();