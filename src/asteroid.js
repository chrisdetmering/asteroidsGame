const Util = require("./util.js"); 
const MovingObject = require("./moving_object.js"); 


const DEFAULT = { 
  COLOR: ["brown", "yellow", 'orange', 'green', 'tan'], 
  RADIUS: [10, 17, 20, 5, 9, 15, 7], 
  SPEED: 4,

  randomColor() { 
    var i = Math.floor(Math.random() * 5); 

    return this.COLOR[i]; 
  }, 

  randomRadius() {
    var i = Math.floor(Math.random() * 7);

    return this.RADIUS[i];
  }
}

function Asteroid(game) { 
  options = {}; 
  options.game = game; 
  options.pos = Util.randomPosition(game.width, game.height); 
  options.vel = Util.randomVec(DEFAULT.SPEED); 
  options.color = DEFAULT.randomColor(); 
  options.radius =  DEFAULT.randomRadius(); 
  options.type = ['Circle', "Ast"]; 
  
  MovingObject.call(this, options);
}; 

Util.inherits(Asteroid, MovingObject); 


module.exports = Asteroid
