let forest;
let forestSpeed = 1; // normal speed of video

let bear;
let bearSpeed = 1;
let showBear = false; 

let dash;
let dashSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  forest = createVideo("libraries/forest.MP4"); //replace this with animation later
  forest.loop();
  forest.hide(); 

  bear = createVideo("libraries/bear.PNG");

  //dash = createVideo("");
  //dash.loop();
}

function draw() {
  background(220);
  image(forest, 0, 0, width, height);

  // fixes framerate based on the videoSpeed
  forest.speed(forestSpeed);

  // Checks for fastest speed first
  if (keyIsDown(82) || keyIsDown(68) || keyIsDown(88) || keyIsDown(69) || keyIsDown(83) || keyIsDown(90) || keyIsDown(87) || keyIsDown(65) || keyIsDown(81)) {
    forestSpeed = 10; 
  }
  // Checks for medium speed second
  else if (keyIsDown(85) || keyIsDown(72) || keyIsDown(66) || keyIsDown(89) || keyIsDown(71) || keyIsDown(86) || keyIsDown(84) || keyIsDown(70) || keyIsDown(67)) {
    forestSpeed = 5; 
  }
  // Checks for base speed
  else if (keyIsDown(80) || keyIsDown(76) || keyIsDown(79) || keyIsDown(73) || keyIsDown(75) || keyIsDown(77) || keyIsDown(74) || keyIsDown(78)) {
    forestSpeed = 1; 
  }

  if (showBear){
    image(bear, 0, 0, width, height);
  }
}

function keyPressed() {
  if (key == "1") {
    showBear = ! showBear;
  }

}