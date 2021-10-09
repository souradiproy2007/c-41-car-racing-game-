var database;

var game, gameState;
var player, playerCount;
var form;

var allPlayers, finishedPlayers;
var distance;

var car1, car2, car3, car4;
var car1_img, car2_img, car3_img, car4_img;
var cars;
var passedFinish;

var xSet;
var yVel, xVel;

var ground_img, track_img;

var bronze_img, silver_img, gold_img;

function preload() {
  car1_img = loadImage("Images/car1.png");
  car2_img = loadImage("Images/car2.png");
  car3_img = loadImage("Images/car3.png");
  car4_img = loadImage("Images/car4.png");

  ground_img = loadImage("Images/ground.png");
  track_img = loadImage("Images/track.png");

  bronze_img = loadImage("Images/bronze.png");
  silver_img = loadImage("Images/silver.png");
  gold_img = loadImage("Images/gold.png");
}

function setup() {
  //create the canvas
  createCanvas(displayWidth * 0.99, displayHeight * 0.885);

  //create the database
  database = firebase.database();

  //set the variables
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  //draw the background
  background("skyblue");

 
}