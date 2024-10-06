let video;
let videoSpeed = 1; // normal speed of video
function setup() {
  createCanvas(400, 300);
  video = createVideo("libraries/Clock 2024-10-02 11-28-59.mp4"); //replace this with animation later
  video.loop();
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  // fixes framerate based on the videoSpeed
  video.speed(videoSpeed);

  // Checks for fastest speed first
  if (keyIsDown(82) || keyIsDown(68) || keyIsDown(88) || keyIsDown(69) || keyIsDown(83) || keyIsDown(90) || keyIsDown(87) || keyIsDown(65) || keyIsDown(81)) {
    videoSpeed = 10; 
  }
  // Checks for medium speed second
  else if (keyIsDown(85) || keyIsDown(72) || keyIsDown(66) || keyIsDown(89) || keyIsDown(71) || keyIsDown(86) || keyIsDown(84) || keyIsDown(70) || keyIsDown(67)) {
    videoSpeed = 5; 
  }
  // Checks for base speed
  else if (keyIsDown(80) || keyIsDown(76) || keyIsDown(79) || keyIsDown(73) || keyIsDown(75) || keyIsDown(77) || keyIsDown(74) || keyIsDown(78)) {
    videoSpeed = 1; 
  }
}