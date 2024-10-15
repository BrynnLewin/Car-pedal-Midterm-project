let forestSpeed = 10;
let winterSpeed = 10;
let dashSpeed = 10;
let bearSpeed = 10;
let icebearSpeed = 10;


let currentForestFrame = 1;
let currentWinterFrame = 1;
let currentDashFrame = 1;
let currentBearFrame = 1;
let currentIcebearFrame = 1;


let showWinter = false;
let showBear = false;
let showIcebear = false;


let forestFrames = [];
let winterFrames = [];
let dashFrames = [];
let bearFrames = [];
let icebearFrames = [];


function preload() {
  for (let i = 1; i <= 20; i++) {
    forestFrames.push(loadImage("assets/frame" + i + ".png"));
    winterFrames.push(loadImage("assets/winter" + i + ".png"));
  }


  for (let i = 1; i <= 9; i++) {
    dashFrames.push(loadImage("assets/dash" + i + ".png"));
  }


  for (let i = 1; i <= 14; i++) {
    bearFrames.push(loadImage("assets/bear" + i + ".png"));
    icebearFrames.push(loadImage("assets/icebear" + i + ".png"));
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);


  // Draw forest (if not showing winter)
  if (!showWinter) {
    drawAnimation(forestFrames, forestSpeed, 'forest');
  }


  // Draw winter (if visible)
  if (showWinter) {
    drawAnimation(winterFrames, winterSpeed, 'winter');
  }


  // Draw dash (always on top)
  drawAnimation(dashFrames, dashSpeed, 'dash');


  // Draw bear (if visible)
  if (showBear) {
    drawAnimation(bearFrames, bearSpeed, 'bear');
  }


  // Draw icebear (if visible)
  if (showIcebear) {
    drawAnimation(icebearFrames, icebearSpeed, 'icebear');
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    showWinter = !showWinter;
  }


  if (keyCode === DOWN_ARROW) {
    showBear = !showBear;
  }


  if (keyCode === LEFT_ARROW) {
    showIcebear = !showIcebear;
  }


  // Adjust speeds based on key presses
  if (
    keyIsDown(82) || keyIsDown(68) || keyIsDown(88) ||
    keyIsDown(69) || keyIsDown(83) || keyIsDown(90) ||
    keyIsDown(87) || keyIsDown(65) || keyIsDown(81)
  ) {
    forestSpeed = 10;
    winterSpeed = 10;
    dashSpeed = 10;
    bearSpeed = 10;
    icebearSpeed = 10;
  } else if (
    keyIsDown(85) || keyIsDown(72) || keyIsDown(66) ||
    keyIsDown(89) || keyIsDown(71) || keyIsDown(86) ||
    keyIsDown(84) || keyIsDown(70) || keyIsDown(67)
  ) {
    forestSpeed = 5;
    winterSpeed = 5;
    dashSpeed = 5;
    bearSpeed = 5;
    icebearSpeed = 5;
  } else if (
    keyIsDown(80) || keyIsDown(76) || keyIsDown(79) ||
    keyIsDown(73) || keyIsDown(75) || keyIsDown(77) ||
    keyIsDown(74) || keyIsDown(78)
  ) {
    forestSpeed = 1;
    winterSpeed = 1;
    dashSpeed = 1;
    bearSpeed = 1;
    icebearSpeed = 1;
  }
}


function drawAnimation(frames, speed, type) {
  let currentFrame;
  switch (type) {
    case 'forest':
      currentFrame = currentForestFrame;
      break;
    case 'winter':
      currentFrame = currentWinterFrame;
      break;
    case 'dash':
      currentFrame = currentDashFrame;
      break;
    case 'bear':
      currentFrame = currentBearFrame;
      break;
    case 'icebear':
      currentFrame = currentIcebearFrame;
      break;
  }


  if (frameCount % speed === 0) {
    currentFrame++;
    if (currentFrame >= frames.length) {
      currentFrame = 0;
    }


    switch (type) {
      case 'forest':
        currentForestFrame = currentFrame;
        break;
      case 'winter':
        currentWinterFrame = currentFrame;
        break;
      case 'dash':
        currentDashFrame = currentFrame;
        break;
      case 'bear':
        currentBearFrame = currentFrame;
        break;
      case 'icebear':
        currentIcebearFrame = currentFrame;
        break;
    }
  }


  if (frames[currentFrame]) {
    image(frames[currentFrame], 0, 0, width, height);
  } else {
    console.error("Frame not found: " + currentFrame + " for type: " + type);
  }
}
