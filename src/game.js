const Asteroid = require('./asteroid.js'); 
const Ship = require("./ship.js"); 
const Bullet = require("./bullet.js"); 

function Game(width, height, ctx) { 
  this.width = width 
  this.height = height
  this.ctx = ctx
  this.ship = new Ship(this); 
  this.asteroids = []; 
  this.bullets = []; 
}

Game.prototype.addAsteroids = function() { 
  for (var i = 0; i < 15; i++) { 
    this.asteroids.push(new Asteroid(this)); 
  }
}

Game.prototype.shootBullet = function() { 
  this.bullets.push(new Bullet(this)); 
}

Game.prototype.addShip = function() { 
  this.asteroids.push(this.ship); 
}

Game.prototype.draw = function() { 
  this.ctx.clearRect(0, 0, this.width, this.height);
  var objects = this.asteroids.concat(this.bullets); 
  objects.forEach(obj => obj.draw(this.ctx)); 
}

Game.prototype.moveObjects = function() { 
  var objects = this.asteroids.concat(this.bullets); 
  objects.forEach(obj => obj.move()); 
}

Game.prototype.wrap = function(pos) { 
  if (pos[0] < 0) { 
    return [this.width, pos[1]]; 
  } else if (pos[0] > this.width) { 
    return [0, pos[1]]; 
  } else if (pos[1] > this.height){ 
    return [pos[0], 0]; 
  } else if (pos[1] < 0) { 
    return [pos[0], this.height]
  } else { 
    return pos; 
  }
}

Game.prototype.checkCollisions = function() { 
  var objects = this.asteroids.concat(this.bullets); 
  
  for (var i = 0; i < objects.length; i++) { 
    for (var j = i + 1; j < objects.length; j++) { 
      var obj1 = objects[i]; 
      var obj2 = objects[j]; 

      if (obj1.isCollidedWith(obj2)) { 
        this.remove(obj1); 
        this.remove(obj2); 
      }
    }
  }

  return false; 
}


Game.prototype.remove = function(obj) { 
  if (obj instanceof Asteroid) { 
    this.asteroids.splice(this.asteroids.indexOf(obj), 1); 
  }
  if (obj instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(obj), 1);
  }

}

Game.prototype.makeMoreAsteroids = function() { 

  if (this.asteroids.length < 10) { 
    for (var i = 0; i < 10; i++) {
      this.asteroids.push(new Asteroid(this));
    }
  }
}

module.exports = Game; 