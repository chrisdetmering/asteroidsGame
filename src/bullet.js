const Util = require("./util.js");
const MovingObject = require("./moving_object.js"); 


function Bullet(game) {
  options = {};
  options.game = game;
  options.pos = [game.ship.pos[0], game.ship.pos[1] - 5]; 
  options.vel = 5;
  options.color = 'yellow'; 
  options.radius = 4; 
  options.type = ["Circle", 'Bullet']; 

  MovingObject.call(this, options);
};

Util.inherits(Bullet, MovingObject);


module.exports = Bullet; 