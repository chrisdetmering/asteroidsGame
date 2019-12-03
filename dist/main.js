/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\"); \nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \n\n\nconst DEFAULT = { \n  COLOR: [\"brown\", \"yellow\", 'orange', 'green', 'tan'], \n  RADIUS: [10, 17, 20, 5, 9, 15, 7], \n  SPEED: 4,\n\n  randomColor() { \n    var i = Math.floor(Math.random() * 5); \n\n    return this.COLOR[i]; \n  }, \n\n  randomRadius() {\n    var i = Math.floor(Math.random() * 7);\n\n    return this.RADIUS[i];\n  }\n}\n\nfunction Asteroid(game) { \n  options = {}; \n  options.game = game; \n  options.pos = Util.randomPosition(game.width, game.height); \n  options.vel = Util.randomVec(DEFAULT.SPEED); \n  options.color = DEFAULT.randomColor(); \n  options.radius =  DEFAULT.randomRadius(); \n  options.type = ['Circle', \"Ast\"]; \n  \n  MovingObject.call(this, options);\n}; \n\nUtil.inherits(Asteroid, MovingObject); \n\n\nmodule.exports = Asteroid\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \n\n\nfunction Bullet(game) {\n  options = {};\n  options.game = game;\n  options.pos = [game.ship.pos[0], game.ship.pos[1] - 5]; \n  options.vel = 5;\n  options.color = 'yellow'; \n  options.radius = 4; \n  options.type = [\"Circle\", 'Bullet']; \n\n  MovingObject.call(this, options);\n};\n\nUtil.inherits(Bullet, MovingObject);\n\n\nmodule.exports = Bullet; \n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\"); \nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\"); \nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\"); \n\nfunction Game(width, height, ctx) { \n  this.width = width \n  this.height = height\n  this.ctx = ctx\n  this.ship = new Ship(this); \n  this.asteroids = []; \n  this.bullets = []; \n}\n\nGame.prototype.addAsteroids = function() { \n  for (var i = 0; i < 15; i++) { \n    this.asteroids.push(new Asteroid(this)); \n  }\n}\n\nGame.prototype.shootBullet = function() { \n  this.bullets.push(new Bullet(this)); \n}\n\nGame.prototype.addShip = function() { \n  this.asteroids.push(this.ship); \n}\n\nGame.prototype.draw = function() { \n  this.ctx.clearRect(0, 0, this.width, this.height);\n  var objects = this.asteroids.concat(this.bullets); \n  objects.forEach(obj => obj.draw(this.ctx)); \n}\n\nGame.prototype.moveObjects = function() { \n  var objects = this.asteroids.concat(this.bullets); \n  objects.forEach(obj => obj.move()); \n}\n\nGame.prototype.wrap = function(pos) { \n  if (pos[0] < 0) { \n    return [this.width, pos[1]]; \n  } else if (pos[0] > this.width) { \n    return [0, pos[1]]; \n  } else if (pos[1] > this.height){ \n    return [pos[0], 0]; \n  } else if (pos[1] < 0) { \n    return [pos[0], this.height]\n  } else { \n    return pos; \n  }\n}\n\nGame.prototype.checkCollisions = function() { \n  var objects = this.asteroids.concat(this.bullets); \n  \n  for (var i = 0; i < objects.length; i++) { \n    for (var j = i + 1; j < objects.length; j++) { \n      var obj1 = objects[i]; \n      var obj2 = objects[j]; \n\n      if (obj1.isCollidedWith(obj2)) { \n        this.remove(obj1); \n        this.remove(obj2); \n      }\n    }\n  }\n\n  return false; \n}\n\n\nGame.prototype.remove = function(obj) { \n  if (obj instanceof Asteroid) { \n    this.asteroids.splice(this.asteroids.indexOf(obj), 1); \n  }\n  if (obj instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(obj), 1);\n  }\n\n}\n\nGame.prototype.makeMoreAsteroids = function() { \n\n  if (this.asteroids.length < 10) { \n    for (var i = 0; i < 10; i++) {\n      this.asteroids.push(new Asteroid(this));\n    }\n  }\n}\n\nmodule.exports = Game; \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\"); \nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\"); \n\nfunction GameView(game) { \n  this.game = game; \n  this.game.addAsteroids();\n  this.game.addShip(); \n}\n\nGameView.prototype.start = function() {  \n  this.bindKeyHandlers(); \n  setInterval(() => { \n     return this.animateAstroids(); \n   }, 20); \n}\n\nGameView.prototype.step = function() { \n  this.game.moveObjects();\n  this.game.checkCollisions();\n  this.game.makeMoreAsteroids(); \n}\n\nGameView.prototype.animateAstroids = function() { \n  this.game.draw();\n  this.step(); \n}\n\nGameView.prototype.bindKeyHandlers = function() { \n  var GameView = this\n  \n  key('up', function () { GameView.game.ship.power(-1) }); \n  key('down', function () { GameView.game.ship.stop() });\n  key('left', function () { GameView.game.ship.left(1) });\n  key('right', function () { GameView.game.ship.right(1)});\n  key('space', function () { GameView.game.shootBullet() });\n}\n\nmodule.exports = GameView; \n\n//# sourceURL=webpack:///./src/gameView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('Webpack is working!');\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\"); \nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./gameView.js */ \"./src/gameView.js\"); \n\nwindow.MovingObject = MovingObject; \n\ndocument.addEventListener(\"DOMContentLoaded\", function(){ \n  let canvas = document.getElementsByTagName('canvas')[0]; \n  let ctx = canvas.getContext(\"2d\");  \n  let width = window.innerWidth; \n  let height = window.innerHeight; \n  ctx.canvas.width = width; \n  ctx.canvas.height = height; \n  \n  var game = new Game(width, height, ctx); \n  var newGame = new GameView(game); \n  newGame.start(); \n\n}); \n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction MovingObject(options) { \n  this.pos = options['pos']; \n  this.vel = options['vel']; \n  this.radius = options['radius']; \n  this.color = options['color']; \n  this.game = options['game']; \n  this.type = options['type']; \n}\n\nMovingObject.prototype.draw = function(ctx)  {\n  if (this.type[0] === \"Circle\") {  \n      ctx.fillStyle = this.color; \n      ctx.beginPath(); \n      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n      ctx.fill(); \n\n    } else { \n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.moveTo(this.pos[0], this.pos[1]);\n      ctx.lineTo(this.pos[0] - 10, this.pos[1] + 25);\n      ctx.lineTo(this.pos[0] + 10, this.pos[1] + 25);\n      ctx.fill();\n    }\n}\n\nMovingObject.prototype.move = function () {\n \n  if (this.type[1] === \"Bullet\") { \n    this.pos[1] -= this.vel; \n\n  } else { \n    this.pos[1] += this.vel[1];\n    this.pos[0] += this.vel[0];\n    this.pos = this.game.wrap(this.pos);\n  }\n\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) { \n  \n  if (this.type[0] === 'Circle' && otherObject.type[0] === 'Circle') { \n    var pos1 = this.pos; \n    var pos2 = otherObject.pos; \n    var x1 = pos1[0]; \n    var y1 = pos1[1]; \n    var x2 = pos2[0]; \n    var y2 = pos2[1]; \n\n    var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); \n    var sumOfRadii = this.radius + otherObject.radius; \n\n    return distance < sumOfRadii; \n  } \n}\n\nmodule.exports = MovingObject; \n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\"); \n\nfunction Ship(game) { \n  options = {};\n  options.game = game;\n  options.pos = [Math.round(game.width / 2) - 50, Math.round(game.height / 2)]; \n  options.vel = [0, 0]; \n  options.color = \"orange\"; \n  options.type = [\"Triangle\", \"Ship\"]; \n  MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Ship, MovingObject); \n\nShip.prototype.power = function(impulse) { \n  this.vel[1] += impulse; \n}\nShip.prototype.stop = function () {\n  this.vel = [0, 0]; \n}\nShip.prototype.left = function (impulse) {\n  this.vel[0] -= impulse; \n}\nShip.prototype.right = function (impulse) {\n  this.vel[0] += impulse;\n}\n\n\nmodule.exports = Ship; \n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = { \n\n  inherits(childClass, parentClass) { \n    childClass.prototype = Object.create(parentClass.prototype)\n    childClass.prototype.constructor = childClass;  \n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }, \n\n  randomPosition(width, height) { \n    var pos = Math.floor(Math.random() * 4); \n\n    if (pos === 0) { \n      return [Math.floor(Math.random() * width), height - 20]; \n    }\n    if (pos === 1) {\n      return [Math.floor(Math.random() * width), 5];\n    }\n    if (pos === 2) {\n      return [5, Math.floor(Math.random() * height)];\n    }\n    if (pos === 3) {\n      return [width - 20, Math.floor(Math.random() * height)];\n    }\n\n  }\n\n}\n\nmodule.exports = Util; \n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });