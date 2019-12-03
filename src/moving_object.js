

function MovingObject(options) { 
  this.pos = options['pos']; 
  this.vel = options['vel']; 
  this.radius = options['radius']; 
  this.color = options['color']; 
  this.game = options['game']; 
  this.type = options['type']; 
}

MovingObject.prototype.draw = function(ctx)  {
  if (this.type[0] === "Circle") {  
      ctx.fillStyle = this.color; 
      ctx.beginPath(); 
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
      ctx.fill(); 

    } else { 
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(this.pos[0], this.pos[1]);
      ctx.lineTo(this.pos[0] - 10, this.pos[1] + 25);
      ctx.lineTo(this.pos[0] + 10, this.pos[1] + 25);
      ctx.fill();
    }
}

MovingObject.prototype.move = function () {
 
  if (this.type[1] === "Bullet") { 
    this.pos[1] -= this.vel; 

  } else { 
    this.pos[1] += this.vel[1];
    this.pos[0] += this.vel[0];
    this.pos = this.game.wrap(this.pos);
  }

}

MovingObject.prototype.isCollidedWith = function(otherObject) { 
  
  if (this.type[0] === 'Circle' && otherObject.type[0] === 'Circle') { 
    var pos1 = this.pos; 
    var pos2 = otherObject.pos; 
    var x1 = pos1[0]; 
    var y1 = pos1[1]; 
    var x2 = pos2[0]; 
    var y2 = pos2[1]; 

    var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); 
    var sumOfRadii = this.radius + otherObject.radius; 

    return distance < sumOfRadii; 
  } 
}

module.exports = MovingObject; 