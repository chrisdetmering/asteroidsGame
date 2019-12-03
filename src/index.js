console.log('Webpack is working!');

const MovingObject = require('./moving_object.js'); 
const Asteroid = require('./asteroid.js'); 
const Game = require("./game.js");
const GameView = require("./gameView.js"); 

window.MovingObject = MovingObject; 

document.addEventListener("DOMContentLoaded", function(){ 
  let canvas = document.getElementsByTagName('canvas')[0]; 
  let ctx = canvas.getContext("2d");  
  let width = window.innerWidth; 
  let height = window.innerHeight; 
  ctx.canvas.width = width; 
  ctx.canvas.height = height; 
  
  var game = new Game(width, height, ctx); 
  var newGame = new GameView(game); 
  newGame.start(); 

}); 




