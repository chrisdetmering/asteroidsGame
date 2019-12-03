const Game = require('./game.js'); 
const Ship = require('./ship.js'); 

function GameView(game) { 
  this.game = game; 
  this.game.addAsteroids();
  this.game.addShip(); 
}

GameView.prototype.start = function() {  
  this.bindKeyHandlers(); 
  setInterval(() => { 
     return this.animateAstroids(); 
   }, 20); 
}

GameView.prototype.step = function() { 
  this.game.moveObjects();
  this.game.checkCollisions();
  this.game.makeMoreAsteroids(); 
}

GameView.prototype.animateAstroids = function() { 
  this.game.draw();
  this.step(); 
}

GameView.prototype.bindKeyHandlers = function() { 
  var GameView = this
  
  key('up', function () { GameView.game.ship.power(-1) }); 
  key('down', function () { GameView.game.ship.stop() });
  key('left', function () { GameView.game.ship.left(1) });
  key('right', function () { GameView.game.ship.right(1)});
  key('space', function () { GameView.game.shootBullet() });
}

module.exports = GameView; 