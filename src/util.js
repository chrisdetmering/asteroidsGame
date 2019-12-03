const Util = { 

  inherits(childClass, parentClass) { 
    childClass.prototype = Object.create(parentClass.prototype)
    childClass.prototype.constructor = childClass;  
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }, 

  randomPosition(width, height) { 
    var pos = Math.floor(Math.random() * 4); 

    if (pos === 0) { 
      return [Math.floor(Math.random() * width), height - 20]; 
    }
    if (pos === 1) {
      return [Math.floor(Math.random() * width), 5];
    }
    if (pos === 2) {
      return [5, Math.floor(Math.random() * height)];
    }
    if (pos === 3) {
      return [width - 20, Math.floor(Math.random() * height)];
    }

  }

}

module.exports = Util; 

