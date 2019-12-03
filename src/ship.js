const MovingObject = require("./moving_object.js"); 
const Util = require("./util.js"); 

function Ship(game) { 
  options = {};
  options.game = game;
  options.pos = [Math.round(game.width / 2) - 50, Math.round(game.height / 2)]; 
  options.vel = [0, 0]; 
  options.color = "orange"; 
  options.type = ["Triangle", "Ship"]; 
  MovingObject.call(this, options);

}

Util.inherits(Ship, MovingObject); 

Ship.prototype.power = function(impulse) { 
  this.vel[1] += impulse; 
}
Ship.prototype.stop = function () {
  this.vel = [0, 0]; 
}
Ship.prototype.left = function (impulse) {
  this.vel[0] -= impulse; 
}
Ship.prototype.right = function (impulse) {
  this.vel[0] += impulse;
}


module.exports = Ship; 

