let forestSpeed = 10; // normal speed of video

let forestFrames = [];

let bear;
let bearSpeed = 1;
let showBear = false; 
let currentForestFrame = 1;

let dash;
let dashSpeed = 1;

function preload() {
  for (i = 1; i <= 20; i++) {
    forestFrames[i] = loadImage("assets/frame" + i + ".png")
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  if (frameCount % forestSpeed == 0) {
    currentForestFrame = currentForestFrame + 1;
    if (currentForestFrame == 21) currentForestFrame = 1;
  }
  console.log(currentForestFrame);
  image(forestFrames[currentForestFrame], 0, 0, width, height);

  // fixes framerate based on the videoSpeed
  //forest.speed(forestSpeed);

  // // Checks for fastest speed first
  if (keyIsDown(82) || keyIsDown(68) || keyIsDown(88) || keyIsDown(69) || keyIsDown(83) || keyIsDown(90) || keyIsDown(87) || keyIsDown(65) || keyIsDown(81)) {
     forestSpeed = 10; 
   }
  // // Checks for medium speed second
   else if (keyIsDown(85) || keyIsDown(72) || keyIsDown(66) || keyIsDown(89) || keyIsDown(71) || keyIsDown(86) || keyIsDown(84) || keyIsDown(70) || keyIsDown(67)) {
     forestSpeed = 5; 
   }
  // // Checks for base speed
   else if (keyIsDown(80) || keyIsDown(76) || keyIsDown(79) || keyIsDown(73) || keyIsDown(75) || keyIsDown(77) || keyIsDown(74) || keyIsDown(78)) {
     forestSpeed = 1; 
   }

  // if (showBear){
  //   image(bear, 0, 0, width, height);
  // }
}

// function keyPressed() {
//   if (key == "1") {
//     showBear = ! showBear;
//   }

// }