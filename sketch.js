
function preload(){
}

function setup() {
	var col = color(25,23,200,0);

	leftSong = loadSound('music/e4.wav');
	var leftButton = createButton("");
	leftButton.style("background-color", col);
	leftButton.position(80, 100);
	leftButton.size(120,200);
	leftButton.mousePressed(leftPressed);

	midSong = loadSound('music/d4.wav');
	var midButton = createButton("");
	midButton.style("background-color", col);
	midButton.position(200, 100);
	midButton.mousePressed(midPressed);
	midButton.size(190,200);

	rightSong = loadSound('music/f4.wav');
	var rightButton = createButton("");
	rightButton.style("background-color", col);
	rightButton.position(390, 100);
	rightButton.mousePressed(rightPressed);
	rightButton.size(120,200);

	createCanvas(800, 800);
}

function midPressed() {
	  if ( midSong.isPlaying() ) { // .isPlaying() returns a boolean
	  	midSong.stop();
	  } else {
	  	midSong.play();
	  }
	}

	function leftPressed() {
	  if ( leftSong.isPlaying() ) { // .isPlaying() returns a boolean
	  	leftSong.stop();
	  } else {
	  	leftSong.play();
	  }
	}

	function rightPressed() {
	  if ( rightSong.isPlaying() ) { // .isPlaying() returns a boolean
	  	rightSong.stop();
	  } else {
	  	rightSong.play();
	  }
	}


	function draw() {
		background(220);

		fill(0,255,0)
		rect(80,100,120,200);
		rect(200,100,190,200);
		rect(390,100,120,200);
		fill(255);
		triangle(120, 200, 180, 230, 180, 170);
		fill(255);
		triangle(480, 200, 420, 230, 420, 170);
		fill(255)
		ellipse(295, 200, 80, 80);

	}
