/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n//import * as THREE from 'three';\r\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\nrenderer.shadowMap.enabled = true;\r\nrenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__.BasicShadowMap;\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n// const light = new AmbientLight( 0x404040 );\r\n// scene.add( light );\r\n\r\nconst pLight = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( 0x4287f5, 1, 0, 2 );\r\npLight.position.set( 0, 15, -15 );\r\npLight.castShadow = true;\r\nscene.add(pLight);\r\n\r\n// const dLight = new DirectionalLight( 0x4287f5 , 1, 100);\r\n// dLight.castShadow = true;\r\n// dLight.position.set(0, 1, 0);\r\n\r\n// scene.add( dLight );\r\n\r\n// dLight.shadow.mapSize.width = 512; // default\r\n// dLight.shadow.mapSize.height = 512; // default\r\n// dLight.shadow.camera.near = 0.5; // default\r\n// dLight.shadow.camera.far = 500; // default\r\n\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.ConeGeometry(5, 5, 4);\r\nlet matParams = { color: 0xffffff };\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial( matParams );\r\n\r\nconst pyramid = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\npyramid.position.set(0, 0, -15);\r\npyramid.receiveShadow = false;\r\npyramid.castShadow = true;\r\nscene.add(pyramid);\r\n\r\nconst pGeo = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry( 50, 25, 2, 2);\r\nconst pMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0x4287f5, side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide });\r\n\r\nconst floorCeiling = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry( 50, 50, 2, 2);\r\n\r\nconst backWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( pGeo, pMaterial );\r\nbackWall.position.set(0, 0, -25);\r\nbackWall.receiveShadow = true;\r\nscene.add(backWall);\r\n\r\nconst leftWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( pGeo, pMaterial );\r\nleftWall.position.set( -25, 0, 0 );\r\nleftWall.rotation.set(0, 1.5708, 0);\r\nscene.add(leftWall);\r\n\r\nconst rightWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh ( pGeo, pMaterial );\r\nrightWall.position.set( 25, 0, 0 );\r\nrightWall.rotation.set( 0, 1.5708, 0 );\r\nscene.add(rightWall);\r\n\r\nconst floor = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( floorCeiling, pMaterial );\r\nfloor.position.set( 0, -12.5, -25 );\r\nfloor.rotation.set( 1.5708, 0, 0 );\r\nfloor.receiveShadow = true;\r\nscene.add(floor);\r\n\r\ncamera.position.z = 5;\r\n\r\nfunction animate() {\r\n    requestAnimationFrame( animate );\r\n    pyramid.rotation.y += 0.01;\r\n    renderer.render( scene, camera );\r\n}\r\nanimate();\n\n//# sourceURL=webpack://threedee2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;