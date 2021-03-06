/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"stories":"stories"}[chunkId]||chunkId) + "." + {"stories":"0373c9639ab781f2f5f8"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Map_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Map.vue */ \"./src/components/Map.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Map: _components_Map_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      geoJsonPath: '',\n      showSidebar: true\n    };\n  },\n  computed: {\n    mapDataLoaded: function mapDataLoaded() {\n      if (this.geoJsonPath) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  },\n  methods: {\n    onMapLayerChange: function onMapLayerChange(value) {\n      this.geoJsonPath = value;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Map.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-leaflet */ \"./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Map',\n  props: ['geoJsonPath'],\n  components: {\n    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LMap\"],\n    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LTileLayer\"],\n    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LMarker\"],\n    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LPopup\"],\n    LTooltip: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LTooltip\"],\n    LGeoJson: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LGeoJson\"],\n    LControlZoom: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__[\"LControlZoom\"]\n  },\n  data: function data() {\n    return {\n      geojson: null,\n      fillColor: '#e4ce7f',\n      zoom: 13,\n      bounds: null,\n      maxBounds: L.latLngBounds([[40.70081290280357, -74.26963806152345], [40.82991732677597, -74.08716201782228]]),\n      show: true,\n      enableTooltip: true,\n      center: L.latLng(51.7520, -1.2577),\n      url: 'https://api.mapbox.com/styles/v1/johnpuddephatt/cjtajqi1z19f31gl80guf6t1k/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9obnB1ZGRlcGhhdHQiLCJhIjoiY2p0YWpidHBzMDZuajN5cGZ1cjJ1NDQ3dCJ9.KfXAwXnUBlD8ZUBXbl6Yxw',\n      attribution: 'Reproduced with permission of <a href=\"https://www.gov.uk/guidance/inspire-index-polygons-spatial-data\">HM Land Registry</a>. &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a>. &copy; Crown copyright and database rights 2019 Ordnance Survey 100026316.',\n      id: 'mapbox.streets',\n      withPopup: L.latLng(51.7410, -1.2786),\n      withTooltip: L.latLng(47.414220, -1.250482),\n      currentZoom: 11.5,\n      currentCenter: L.latLng(47.413220, -1.219482),\n      showParagraph: false,\n      mapOptions: {\n        zoomControl: false,\n        zoomSnap: 0.5\n      },\n      colors: {\n        Charity: '#A3E4B6',\n        Utility: '#6F6F9C',\n        Farm: '#4B7E56',\n        Investor: '#F8B051',\n        Developer: '#FE5A22',\n        Estate: '#FB6768',\n        Public: '#94BB72',\n        Industry: '#904C7A',\n        College: '#357790',\n        Church: '#F4E488'\n      }\n    };\n  },\n  methods: {\n    zoomUpdate: function zoomUpdate(zoom) {\n      this.currentZoom = zoom;\n    },\n    centerUpdate: function centerUpdate(center) {\n      this.currentCenter = center;\n    },\n    boundsUpdated: function boundsUpdated(bounds) {\n      this.bounds = bounds;\n    },\n    showLongText: function showLongText() {\n      this.showParagraph = !this.showParagraph;\n    },\n    innerClick: function innerClick() {\n      alert('Click!');\n    },\n    layerUpdate: function layerUpdate(path) {\n      var _this = this;\n\n      this.loading = true;\n      this.axios.get(path).then(function (response) {\n        _this.geojson = response.data;\n        _this.loading = false;\n        window.setTimeout(function () {\n          _this.bounds = _this.$refs.geojsonlayer.getBounds();\n        }, 500);\n      });\n    },\n    layerAdded: function layerAdded(e) {}\n  },\n  watch: {\n    geoJsonPath: function geoJsonPath(path) {\n      if (path) {\n        this.layerUpdate(path);\n      } else {\n        this.geojson = null;\n      }\n    }\n  },\n  computed: {\n    options: function options() {\n      return {\n        onEachFeature: this.onEachFeatureFunction\n      };\n    },\n    styleFunction: function styleFunction() {\n      var fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor\n\n      return function () {\n        return {\n          weight: 0,\n          color: '#EC00F1',\n          opacity: 1,\n          fillColor: fillColor,\n          fillOpacity: 1\n        };\n      };\n    },\n    onEachFeatureFunction: function onEachFeatureFunction() {\n      var _this2 = this;\n\n      if (!this.enableTooltip) {\n        return function () {};\n      } else {\n        return function (feature, layer) {\n          layer.bindTooltip('<div>Owner: ' + feature.properties.owner + '</div><div>Type: ' + feature.properties.ownertype + '</div><div>Source: ' + feature.properties.source + '</div>', {\n            permanent: false,\n            sticky: true\n          });\n          _this2.colors[feature.properties.type];\n          layer.options.fillColor = _this2.colors[feature.properties.ownertype];\n        };\n      }\n    }\n  },\n  created: function created() {}\n});\n\n//# sourceURL=webpack:///./src/components/Map.vue?./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'home',\n  mounted: function mounted() {\n    var overlay = document.getElementById(\"overlay\"),\n        overlayCanvas = overlay.getContext('2d'),\n        overlayColor = 'RGB(69, 80, 107)',\n        brushSize = 30;\n    overlayCanvas.canvas.width = window.innerWidth;\n    overlayCanvas.canvas.height = window.innerHeight;\n\n    function detectLeftButton(event) {\n      if ('buttons' in event) {\n        return event.buttons === 1;\n      } else if ('which' in event) {\n        return event.which === 1;\n      } else {\n        return event.button === 1;\n      }\n    }\n\n    function getBrushPos(xRef, yRef) {\n      var overlayRect = overlay.getBoundingClientRect();\n      return {\n        x: Math.floor((xRef - overlayRect.left) / (overlayRect.right - overlayRect.left) * overlay.width),\n        y: Math.floor((yRef - overlayRect.top) / (overlayRect.bottom - overlayRect.top) * overlay.height)\n      };\n    }\n\n    function debounce(func, wait, immediate) {\n      var timeout;\n      return function () {\n        var context = this,\n            args = arguments;\n\n        var later = function later() {\n          timeout = null;\n          if (!immediate) func.apply(context, args);\n        };\n\n        var callNow = immediate && !timeout;\n        clearTimeout(timeout);\n        timeout = setTimeout(later, wait);\n        if (callNow) func.apply(context, args);\n      };\n    }\n\n    ;\n    var efficientDraw = debounce(function (mouseEvt) {\n      var brushPos = getBrushPos(mouseEvt.clientX, mouseEvt.clientY);\n      drawDot(brushPos.x, brushPos.y);\n    }, 16);\n\n    function drawDot(mouseX, mouseY) {\n      overlayCanvas.beginPath(); // Snap to grid\n\n      var newMouseX = Math.floor(mouseX / brushSize) * brushSize;\n      var newMouseY = Math.floor(mouseY / brushSize) * brushSize;\n      overlayCanvas.rect(newMouseX, newMouseY, brushSize, brushSize);\n      overlayCanvas.fillStyle = 'rgb(255,255,255)';\n      overlayCanvas.globalAlpha = 0.5;\n      overlayCanvas.globalCompositeOperation = \"destination-out\";\n      overlayCanvas.fill(); //big background square\n      // overlayCanvas.beginPath();\n      // overlayCanvas.rect((newMouseX - 2 * brushSize), (newMouseY - 2 * brushSize), 5 * brushSize, 5  * brushSize);\n      // overlayCanvas.fillStyle = 'rgb(255,255,255)';\n      // overlayCanvas.globalAlpha = 0.05;\n      // overlayCanvas.fill();\n      //medium background square\n\n      overlayCanvas.beginPath();\n      overlayCanvas.rect(newMouseX - brushSize, newMouseY - brushSize, 3 * brushSize, 3 * brushSize); // overlayCanvas.fillStyle = 'rgb(255,255,255)';\n      // overlayCanvas.fillStyle = 'rgb(166,244,190)';\n\n      overlayCanvas.globalAlpha = 0.2;\n      overlayCanvas.fill(); //top background square\n\n      overlayCanvas.beginPath();\n      overlayCanvas.rect(newMouseX, newMouseY - brushSize, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX, newMouseY + brushSize, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX - brushSize, newMouseY, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX + brushSize, newMouseY, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX, newMouseY - 2 * brushSize, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX, newMouseY + 2 * brushSize, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX - 2 * brushSize, newMouseY, brushSize, brushSize);\n      overlayCanvas.rect(newMouseX + 2 * brushSize, newMouseY, brushSize, brushSize);\n      overlayCanvas.fillStyle = 'rgb(255,255,255)';\n      overlayCanvas.globalAlpha = 0.05;\n      overlayCanvas.fill();\n    }\n\n    overlay.addEventListener(\"mousemove\", function (e) {\n      efficientDraw(e);\n    }, false);\n    overlay.addEventListener(\"touchmove\", function (e) {\n      e.preventDefault();\n      var touch = e.targetTouches[0];\n\n      if (touch) {\n        var brushPos = getBrushPos(touch.pageX, touch.pageY);\n        drawDot(brushPos.x, brushPos.y);\n      }\n    }, false); // re-covering fill\n\n    setInterval(function () {\n      overlayCanvas.beginPath();\n      overlayCanvas.rect(0, 0, overlay.width, overlay.height);\n      overlayCanvas.globalCompositeOperation = \"source-over\";\n      overlayCanvas.fillStyle = \"rgb(69,80,107)\";\n      overlayCanvas.globalAlpha = 0.1;\n      overlayCanvas.fill();\n    }, 80); // initial fill\n\n    overlayCanvas.beginPath();\n    overlayCanvas.rect(0, 0, overlay.width, overlay.height);\n    overlayCanvas.globalCompositeOperation = \"source-over\";\n    overlayCanvas.fillStyle = \"rgb(69,80,107)\";\n    overlayCanvas.globalAlpha = 1;\n    overlayCanvas.fill();\n    var homeTitle = document.querySelector('.home-title');\n    homeTitle.classList.add('show');\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans);\", \"\"]);\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! @/fonts/barlow-black.woff2 */ \"./src/fonts/barlow-black.woff2\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! @/fonts/barlow-black.woff */ \"./src/fonts/barlow-black.woff\"));\n\n// Module\nexports.push([module.i, \"/************\\n***  Breakpoints\\n************/\\n/************\\n***  Colours\\n************/\\n/************\\n***  Fonts\\n************/\\n@font-face {\\n  font-family: BarlowOxford;\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \"), url(\" + ___CSS_LOADER_URL___1___ + \");\\n  font-weight: 700;\\n}\\n\\n/************\\n***  Typography\\n************/\\n/************\\n***  Misc. units\\n************/\\n/************\\n***  Functions and mixins\\n************/\\n/* === Enter and leave animations can use different === */\\n/* === durations and timing functions ================= */\\n.fade-out-enter-active,\\n.fade-out-leave-active {\\n  transition: all 1s ease;\\n}\\n.fade-out-enter,\\n.fade-out-leave-to {\\n  opacity: 0;\\n}\\n.slide-in-out-enter-active,\\n.slide-in-out-leave-active {\\n  transition: all 1s ease;\\n}\\n.slide-in-out-enter-active > *,\\n  .slide-in-out-leave-active > * {\\n    transition: all 1s ease;\\n}\\n.slide-in-out-enter,\\n.slide-in-out-leave-to {\\n  transform: translateY(100%);\\n}\\n@media screen and (min-width: 820px) {\\n.slide-in-out-enter,\\n    .slide-in-out-leave-to {\\n      transform: translateX(-100%);\\n}\\n}\\n.slide-in-out-enter > *,\\n  .slide-in-out-leave-to > * {\\n    opacity: 0;\\n}\\n.sidebar.slide-in-out-enter-active {\\n  transition-delay: 0s;\\n}\\n.sidebar.mapDataLoaded.slide-in-out-enter-active {\\n  transition-delay: 1.5s;\\n}\\n.slide-in-enter-active,\\n.slide-in-leave-active {\\n  transition: all 1s ease;\\n}\\n.slide-in-enter-active > *,\\n  .slide-in-leave-active > * {\\n    transition: all 1s ease;\\n}\\n.slide-in-enter {\\n  transform: translateY(100%);\\n}\\n@media screen and (min-width: 820px) {\\n.slide-in-enter {\\n      transform: translateX(-100%);\\n}\\n}\\n.slide-in-enter > * {\\n    opacity: 0;\\n}\\n.slide-in-leave-to {\\n  transform: translateY(0%);\\n}\\n@media screen and (min-width: 820px) {\\n.slide-in-leave-to {\\n      transform: translateX(0%);\\n}\\n}\\n.slide-in-leave-to > * {\\n    opacity: 0;\\n}\\n* {\\n  box-sizing: border-box;\\n}\\nhtml {\\n  font-size: 0.8333em;\\n}\\n@media screen and (min-width: 820px) {\\nhtml {\\n      font-size: 1em;\\n}\\n}\\nhtml, body {\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  color: #6a7389;\\n  line-height: 1.6;\\n  letter-spacing: 0.01em;\\n}\\n#app {\\n  font-family: \\\"Open Sans\\\", Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nh1, h2, h3, h4, h5, h6 {\\n  font-family: BarlowOxford, \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  color: #45506B;\\n  line-height: 1.3;\\n  letter-spacing: 0.03em;\\n}\\na {\\n  color: #6a7389;\\n}\\np {\\n  margin: 0 0 .75em;\\n}\\n.sidebar {\\n  padding-top: 1em;\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: column;\\n  overflow: hidden;\\n  z-index: 9;\\n  height: 65vh;\\n  width: 100vw;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar {\\n      width: 30vw;\\n      min-width: 15rem;\\n      box-shadow: 1.5rem 0 3rem -1.5rem rgba(0, 0, 0, 0.12);\\n      top: 0;\\n      height: 100vh;\\n}\\n}\\n.sidebar::after {\\n    background-color: white;\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    border-top: 1.5em solid #45506B;\\n}\\n.sidebar--title {\\n  font-size: 1.728em;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--title {\\n      margin-top: .25em;\\n}\\n}\\n.sidebar--subtitle {\\n  font-weight: 500;\\n  margin-top: 1em;\\n}\\n.sidebar--header {\\n  padding: 1em 1em 0;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--header {\\n      padding: 2em 1em 0;\\n}\\n}\\n@media screen and (min-width: 1080px) {\\n.sidebar--header {\\n      padding: 2em 2em 0;\\n}\\n}\\n.sidebar--header p:last-child {\\n    margin-bottom: 0;\\n}\\n.sidebar--body {\\n  flex: 1 1 auto;\\n  padding: 0 1em;\\n}\\n@media screen and (min-width: 1080px) {\\n.sidebar--body {\\n      padding: 0 2em;\\n}\\n}\\n.sidebar--toggle-button {\\n  border: none;\\n  position: fixed;\\n  text-indent: -9999px;\\n  z-index: 99;\\n  background-color: white;\\n  -webkit-appearance: none;\\n  display: block;\\n  padding: .5em;\\n  width: 4em;\\n  height: 4em;\\n  right: 1em;\\n  bottom: 0;\\n  transition: all 1s ease;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--toggle-button {\\n      right: auto;\\n      left: 0;\\n      bottom: 0;\\n}\\n}\\n.sidebar--toggle-button:before {\\n    position: absolute;\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%) rotate(-90deg);\\n    text-indent: 0;\\n    content: '';\\n    width: 0;\\n    height: 0;\\n    border-top: 8px solid transparent;\\n    border-bottom: 8px solid transparent;\\n    border-left: 12px solid #45506B;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--toggle-button:before {\\n        transform: translate(-50%, -50%) rotate(0deg);\\n}\\n}\\n.sidebar--toggle-button:active, .sidebar--toggle-button:focus {\\n    outline: none;\\n}\\n.sidebar:not(.slide-in-out-leave-active) ~ .sidebar--toggle-button {\\n  bottom: 65vh;\\n}\\n.sidebar:not(.slide-in-out-leave-active) ~ .sidebar--toggle-button::before {\\n    transform: translate(-50%, -50%) rotate(90deg);\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar:not(.slide-in-out-leave-active) ~ .sidebar--toggle-button {\\n      left: 30vw;\\n      bottom: 0;\\n}\\n.sidebar:not(.slide-in-out-leave-active) ~ .sidebar--toggle-button::before {\\n        transform: translate(-50%, -50%) rotate(180deg);\\n}\\n}\\n.sidebar--hide-button,\\n.sidebar--show-button {\\n  margin-top: auto;\\n  width: 100%;\\n  display: block;\\n  -webkit-appearance: none;\\n  background: none;\\n  line-height: 3em;\\n  font-size: 0.83333em;\\n  border: none;\\n  padding: 0 1em;\\n  border-top: 1px solid #d1d3da;\\n  color: #8f96a6;\\n  transition: color 1s ease;\\n}\\n.sidebar--hide-button span,\\n  .sidebar--show-button span {\\n    display: none;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--hide-button span,\\n      .sidebar--show-button span {\\n        display: inline;\\n}\\n}\\n.sidebar--hide-button:hover,\\n  .sidebar--show-button:hover {\\n    color: #45506B;\\n}\\n.sidebar--show-button {\\n  background-color: white;\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  border: 1px solid #d1d3da;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--show-button {\\n      width: auto;\\n}\\n}\\n.sidebar--back {\\n  text-decoration: none;\\n  color: #8f96a6;\\n  font-size: 0.83333em;\\n  transition: all 1s ease;\\n}\\n.sidebar--back:hover {\\n    color: #45506B;\\n}\\n.sidebar--item-list {\\n  position: relative;\\n  z-index: 1;\\n  padding: 0 1em;\\n  margin-top: auto;\\n}\\n@media screen and (min-width: 1080px) {\\n.sidebar--item-list {\\n      padding: 0 2em;\\n}\\n}\\n.sidebar--scroller {\\n  flex: 1;\\n  overflow: hidden;\\n  position: relative;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--scroller {\\n      margin-top: .5em;\\n}\\n}\\n.sidebar--scroller > * {\\n    height: 100%;\\n    overflow-y: auto;\\n    padding-top: 1em;\\n}\\n.sidebar--scroller::before, .sidebar--scroller::after {\\n    pointer-events: none;\\n    content: '';\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    z-index: 99;\\n    width: 100%;\\n    height: 2em;\\n    background-image: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\\n}\\n.sidebar--scroller::after {\\n    bottom: 0;\\n    top: auto;\\n    background-image: linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\\n}\\n.sidebar--item-list--item {\\n  margin: 1em 0;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--item-list--item {\\n      margin: 2.5em 0;\\n}\\n}\\n.sidebar--item-list--item .coming-soon * {\\n    opacity: .6;\\n}\\n.sidebar--item-list--item:last-child {\\n    margin-bottom: 1.25em;\\n}\\n@media screen and (min-width: 1080px) {\\n.sidebar--item-list--item .has-icon {\\n      padding-left: 2.75em;\\n      position: relative;\\n}\\n}\\n.sidebar--item--icon {\\n  display: none;\\n  width: 2em;\\n  height: auto;\\n  position: absolute;\\n  left: 0;\\n  top: 2em;\\n}\\n@media screen and (min-width: 1080px) {\\n.sidebar--item--icon {\\n      display: block;\\n}\\n}\\n.sidebar--item--icon path {\\n    stroke: #8f96a6;\\n    transition: stroke 1s ease;\\n}\\n.sidebar--item-list--link {\\n  display: block;\\n  text-decoration: none;\\n  margin: 0;\\n  position: relative;\\n}\\n.sidebar--item-list--link::after {\\n    content: '';\\n    position: absolute;\\n    z-index: -1;\\n    left: -2em;\\n    top: -.5em;\\n    bottom: -.5em;\\n    right: -30%;\\n    background-image: linear-gradient(to right, #74DACF 80%, rgba(116, 218, 207, 0) 100%);\\n    transform: translateX(-100%);\\n    transition: transform .5s ease;\\n}\\n@media screen and (min-width: 820px) {\\n.sidebar--item-list--link::after {\\n        top: -1.5em;\\n        bottom: -1.5em;\\n        right: -30%;\\n}\\n}\\n.sidebar--item-list--link:hover::after, .sidebar--item-list--link:focus::after {\\n    transform: translateX(0%);\\n}\\n.sidebar--item-list--link:hover .sidebar--item--icon path, .sidebar--item-list--link:focus .sidebar--item--icon path {\\n    stroke: #45506B;\\n}\\n.sidebar--item-list--title {\\n  margin: .25em 0;\\n}\\n.sidebar--item-list--index {\\n  font-size: 0.83333em;\\n}\\n.sidebar--item-list--index .badge {\\n    opacity: 1 !important;\\n    background-color: #d1d3da;\\n    display: inline-block;\\n    border-radius: 3px;\\n    text-transform: lowercase;\\n    color: #45506B;\\n    margin-left: .5em;\\n    padding: 0 .5em;\\n    font-weight: 500;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Map.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!leaflet/dist/leaflet.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/leaflet/dist/leaflet.css\"), \"\");\n\n// Module\nexports.push([module.i, \"#map {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  right: 0;\\n  z-index: -99;\\n  transition: width .3s ease;\\n}\\n.leaflet-interactive {\\n  animation: fadeIn 2s ease;\\n  opacity: 0.5;\\n  stroke-width: .15em;\\n  stroke: currentColor;\\n  transition: opacity 1s ease;\\n}\\n.leaflet-interactive:hover {\\n    opacity: 1;\\n}\\n@keyframes fadeIn {\\nfrom {\\n    opacity: 0;\\n}\\nto {\\n    opacity: 1;\\n}\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Map.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! @/fonts/barlow-black.woff2 */ \"./src/fonts/barlow-black.woff2\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! @/fonts/barlow-black.woff */ \"./src/fonts/barlow-black.woff\"));\n\n// Module\nexports.push([module.i, \"/************\\n***  Breakpoints\\n************/\\n/************\\n***  Colours\\n************/\\n/************\\n***  Fonts\\n************/\\n@font-face {\\n  font-family: BarlowOxford;\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \"), url(\" + ___CSS_LOADER_URL___1___ + \");\\n  font-weight: 700;\\n}\\n\\n/************\\n***  Typography\\n************/\\n/************\\n***  Misc. units\\n************/\\n/************\\n***  Functions and mixins\\n************/\\n@keyframes shadow-flicker {\\n0%, 40% {\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0);\\n}\\n55% {\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n100% {\\n    text-shadow: 0px 0px 0px rgba(200, 200, 200, 0);\\n}\\n}\\n@keyframes text-flicker {\\n0% {\\n    opacity: 0.1;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n3% {\\n    opacity: 0;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n5% {\\n    opacity: .3;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n7% {\\n    opacity: 0.1;\\n    text-shadow: 0px 0px rgba(200, 200, 200, 0.75);\\n}\\n12% {\\n    opacity: 0.2;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n15% {\\n    opacity: .3;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n80% {\\n    opacity: 0;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n85% {\\n    opacity: 0;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n90% {\\n    opacity: 1;\\n    text-shadow: 0px 0px 29px rgba(200, 200, 200, 0.75);\\n}\\n100% {\\n    opacity: 1;\\n    text-shadow: 0px 0px 0px rgba(200, 200, 200, 0);\\n}\\n}\\n@keyframes fadeOutOverlay {\\nto {\\n    opacity: 0;\\n}\\n}\\n@keyframes fadeInSubheading {\\nto {\\n    opacity: 1;\\n    transform: translateY(0);\\n}\\n}\\n@keyframes moveDownHeadingWrapper {\\nto {\\n    transform: translateY(-2em);\\n}\\n}\\n.home-heading-wrapper {\\n  pointer-events: none;\\n  position: relative;\\n  z-index: 999;\\n}\\n.home-title, .home-subtitle {\\n  pointer-events: none;\\n}\\n.home-title {\\n  color: white;\\n  font-size: 2.98598em;\\n  text-transform: uppercase;\\n  margin-top: .5em;\\n  margin-bottom: .25em;\\n  text-shadow: -0.1em 0.1em 0 rgba(69, 80, 107, 0.15);\\n  text-align: center;\\n  line-height: 1;\\n}\\n@media screen and (min-width: 820px) {\\n.home-title {\\n      font-size: 4.29982em;\\n}\\n}\\n@media screen and (min-width: 1080px) {\\n.home-title {\\n      font-size: 5.15978em;\\n}\\n}\\n.home-title.show span {\\n    opacity: 1;\\n}\\n.home-title span {\\n    opacity: 0;\\n    transition: opacity 1.5s cubic-bezier(0.62, 0.02, 0.34, 1);\\n    animation: shadow-flicker 1.5s ease-out forwards;\\n    animation-delay: 1s;\\n    transition-delay: 1s;\\n}\\n.home-title span:nth-child(2) {\\n      animation-delay: 2s;\\n      transition-delay: 2s;\\n}\\n.home-title span:nth-child(3) {\\n      display: block;\\n      font-size: 1.44em;\\n      animation-delay: 3s;\\n      transition-delay: 3s;\\n      position: relative;\\n}\\n.home-subheading {\\n  animation: fadeInSubheading 1s 5s forwards ease-out;\\n  opacity: 0;\\n  transform: translateY(-2em);\\n  text-align: center;\\n  font-weight: 500;\\n  margin-top: .25em;\\n}\\n.home-subtitle {\\n  font-size: 0.83333em;\\n  margin: 0 auto 2em;\\n  color: #d1d3da;\\n  max-width: 20em;\\n}\\n@media screen and (min-width: 820px) {\\n.home-subtitle {\\n      font-size: 1em;\\n}\\n}\\n.home-heading-wrapper {\\n  animation: moveDownHeadingWrapper 1s 5s forwards ease-out;\\n}\\n.home-button {\\n  text-indent: -9999px;\\n  margin: 0 auto;\\n  display: block;\\n  height: 4rem;\\n  width: 4rem;\\n  line-height: 4rem;\\n  font-size: 2rem;\\n  border-radius: 50%;\\n  border: .1rem solid white;\\n  pointer-events: all;\\n  margin-bottom: -6rem;\\n  text-decoration: none;\\n  color: white;\\n  transition: background-color 1s ease, color 1s ease;\\n  position: relative;\\n}\\n@media screen and (min-width: 820px) {\\n.home-button {\\n      height: 6rem;\\n      width: 6rem;\\n      line-height: 6rem;\\n      font-size: 3rem;\\n}\\n}\\n.home-button svg {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    width: 40%;\\n    height: auto;\\n    transform: translate(-50%, -50%);\\n}\\n.home-button svg * {\\n      stroke-width: 0.125rem;\\n}\\n.home-button:hover {\\n    background-color: #74DACF;\\n}\\n#home {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  overflow: hidden;\\n  z-index: 9;\\n  position: relative;\\n}\\n#home::after {\\n    content: '';\\n    position: fixed;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    background-image: radial-gradient(circle at center, rgba(69, 80, 107, 0), rgba(69, 80, 107, 0.8));\\n    z-index: 8;\\n    opacity: .75;\\n}\\n#home::before {\\n    content: '';\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-image: linear-gradient(to right, rgba(69, 80, 107, 0.35) 1px, #0000 1px), linear-gradient(to bottom, rgba(69, 80, 107, 0.35) 1px, #0000 1px);\\n    background-size: 30px 30px;\\n}\\n#overlay {\\n  width: 100vw;\\n  height: 100vh;\\n  position: absolute;\\n  z-index: 99;\\n  top: 0vh;\\n  left: 0vw;\\n  opacity: .85;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"app\" } },\n    [\n      _c(\"Map\", { attrs: { geoJsonPath: _vm.geoJsonPath } }),\n      _vm._v(\" \"),\n      _c(\"router-view\", {\n        attrs: {\n          showSidebar: _vm.showSidebar,\n          mapDataLoaded: _vm.mapDataLoaded\n        },\n        on: { mapLayerChange: _vm.onMapLayerChange }\n      }),\n      _vm._v(\" \"),\n      this.$route.name != \"home\"\n        ? _c(\n            \"button\",\n            {\n              key: \"toggle-sidebar\",\n              staticClass: \"sidebar--toggle-button\",\n              class: {\n                sidebarOut: _vm.showSidebar,\n                mapDataLoaded: _vm.mapDataLoaded\n              },\n              attrs: { \"aria-label\": \"Toggle sidebar\" },\n              on: {\n                click: function($event) {\n                  _vm.showSidebar = !_vm.showSidebar\n                }\n              }\n            },\n            [_vm._v(\"\\n    <\\n  \")]\n          )\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=template&id=3074bd5c&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Map.vue?vue&type=template&id=3074bd5c& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"map\" } },\n    [\n      _c(\n        \"l-map\",\n        {\n          attrs: {\n            zoom: _vm.zoom,\n            center: _vm.center,\n            bounds: _vm.bounds,\n            options: _vm.mapOptions\n          },\n          on: {\n            \"update:center\": _vm.centerUpdate,\n            \"update:zoom\": _vm.zoomUpdate,\n            \"update:bounds\": _vm.boundsUpdated,\n            layeradd: _vm.layerAdded\n          }\n        },\n        [\n          _c(\"l-tile-layer\", {\n            attrs: { url: _vm.url, attribution: _vm.attribution }\n          }),\n          _vm._v(\" \"),\n          _c(\"l-control-zoom\", { attrs: { position: \"topright\" } }),\n          _vm._v(\" \"),\n          this.geojson\n            ? _c(\"l-geo-json\", {\n                ref: \"geojsonlayer\",\n                attrs: {\n                  geojson: _vm.geojson,\n                  options: _vm.options,\n                  \"options-style\": _vm.styleFunction\n                }\n              })\n            : _vm._e()\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Map.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=fae5bece& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: \"fade-out\" } }, [\n    _c(\"div\", { attrs: { id: \"home\" } }, [\n      _c(\"canvas\", { attrs: { id: \"overlay\" } }),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"home-heading-wrapper\" }, [\n        _c(\"h1\", { staticClass: \"home-title\" }, [\n          _c(\"span\", [_vm._v(\"Who\")]),\n          _vm._v(\" \"),\n          _c(\"span\", [_vm._v(\"Owns\")]),\n          _c(\"span\", [_vm._v(\"Oxford\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"home-subheading\" },\n          [\n            _c(\"p\", { staticClass: \"home-subtitle\" }, [\n              _vm._v(\n                \"Exploring land ownership across the county through six stories\"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"router-link\",\n              { staticClass: \"home-button\", attrs: { to: \"/stories\" } },\n              [\n                _vm._v(\"\\n          Enter\\n          \"),\n                _c(\n                  \"svg\",\n                  {\n                    attrs: {\n                      xmlns: \"http://www.w3.org/2000/svg\",\n                      width: \"33.4\",\n                      height: \"51.3\",\n                      viewBox: \"0 0 33.4 51.3\"\n                    }\n                  },\n                  [\n                    _c(\"path\", {\n                      attrs: {\n                        fill: \"#FFF\",\n                        d:\n                          \"M10.4 33.9V32c0-2.4.6-4.3 1.8-5.8 1.2-1.5 3-3 5.3-4.6 1.9-1.3 3.3-2.4 4.2-3.5.9-1 1.4-2.2 1.4-3.7s-.6-2.8-1.7-3.7c-1.2-.9-2.7-1.4-4.5-1.4-2 0-3.6.5-4.9 1.5-1.2 1-1.8 2.3-1.8 3.9v.8c0 .8-.4 1.2-1.2 1.2l-7.7-.3c-.3 0-.6-.1-.9-.3-.3-.2-.4-.4-.4-.6v-.8C0 11.8.7 9.3 2.2 7c1.4-2.2 3.4-4 6-5.2C10.7.6 13.7 0 17.1 0c3.3 0 6.1.6 8.6 1.8 2.5 1.2 4.4 2.8 5.7 4.9 1.3 2.1 2 4.6 2 7.3 0 2.1-.4 3.9-1.1 5.4-.7 1.5-1.6 2.7-2.7 3.7s-2.4 2-4 3.2c-1.7 1.2-3 2.2-3.8 3.1-.8.9-1.2 1.9-1.2 3.2v1.3c0 .8-.4 1.2-1.2 1.2h-7.6c-1 0-1.4-.4-1.4-1.2zm1.2 15.7c-1.2-1.1-1.8-2.5-1.8-4.1s.6-2.9 1.8-4.1c1.2-1.1 2.7-1.7 4.4-1.7 1.6 0 3.1.6 4.3 1.7 1.2 1.1 1.8 2.5 1.8 4.1s-.6 2.9-1.8 4.1c-1.2 1.1-2.7 1.7-4.4 1.7-1.7 0-3.1-.6-4.3-1.7z\"\n                      }\n                    })\n                  ]\n                )\n              ]\n            )\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"36417da0\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Map.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"005e29a1\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Map.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"15aee5c2\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ \"./src/App.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--3!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/Map.vue":
/*!********************************!*\
  !*** ./src/components/Map.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=3074bd5c& */ \"./src/components/Map.vue?vue&type=template&id=3074bd5c&\");\n/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ \"./src/components/Map.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/Map.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Map.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Map.vue?");

/***/ }),

/***/ "./src/components/Map.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/components/Map.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--3!../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Map.vue?");

/***/ }),

/***/ "./src/components/Map.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************!*\
  !*** ./src/components/Map.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/Map.vue?");

/***/ }),

/***/ "./src/components/Map.vue?vue&type=template&id=3074bd5c&":
/*!***************************************************************!*\
  !*** ./src/components/Map.vue?vue&type=template&id=3074bd5c& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=template&id=3074bd5c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=template&id=3074bd5c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3074bd5c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Map.vue?");

/***/ }),

/***/ "./src/fonts/barlow-black.woff":
/*!*************************************!*\
  !*** ./src/fonts/barlow-black.woff ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/barlow-black.woff\";\n\n//# sourceURL=webpack:///./src/fonts/barlow-black.woff?");

/***/ }),

/***/ "./src/fonts/barlow-black.woff2":
/*!**************************************!*\
  !*** ./src/fonts/barlow-black.woff2 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/barlow-black.woff2\";\n\n//# sourceURL=webpack:///./src/fonts/barlow-black.woff2?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.min.js\");\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_axios__WEBPACK_IMPORTED_MODULE_4___default.a, axios__WEBPACK_IMPORTED_MODULE_3___default.a);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}).$mount('#app'); // this part resolve an issue where the markers would not appear\n\ndelete leaflet__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"].Default.prototype._getIconUrl; // Icon.Default.mergeOptions({\n//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n//   iconUrl: require('leaflet/dist/images/marker-icon.png'),\n//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')\n// })\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ \"./src/views/Home.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  // mode: 'history',\n  base: process.env.BASE_URL,\n  routes: [{\n    path: '/',\n    name: 'home',\n    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/stories',\n    name: 'stories',\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: function component() {\n      return __webpack_require__.e(/*! import() | stories */ \"stories\").then(__webpack_require__.bind(null, /*! ./views/Stories.vue */ \"./src/views/Stories.vue\"));\n    }\n  }, {\n    path: '/stories/:id/:slug?',\n    name: 'story',\n    component: function component() {\n      return __webpack_require__.e(/*! import() | stories */ \"stories\").then(__webpack_require__.bind(null, /*! ./views/Story.vue */ \"./src/views/Story.vue\"));\n    },\n    props: true\n  }]\n}));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece& */ \"./src/views/Home.vue?vue&type=template&id=fae5bece&\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ \"./src/views/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=scss& */ \"./src/views/Home.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--3!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&":
/*!***********************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=fae5bece& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_fae5bece___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ })

/******/ });