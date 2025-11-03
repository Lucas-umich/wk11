let video = document.querySelector("#player1")

function play(){
	console.log("In play")
	video.play();
}

function pause(){
	console.log("In pause")
	video.pause();
}

function faster(){
	console.log("In faster")
	video.playbackRate *= 2;
}

function slower(){
	console.log("In slower")
	video.playbackRate /= 2;
}

function skip(){
	console.log("In skip")
	console.log("Current location is", video.currentTime)
	video.currentTime += 15
	video
	
}
