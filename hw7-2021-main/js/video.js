var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed the Video");
	video.playbackRate *= 2;
	video.faster();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("slow down video");
	video.playbackRate /= 2;
    video.slower();
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("skip ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
        console.log("going back to beginning");
    }
    video.skip();
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("mute / unmute");
	let muteButton = document.querySelector("#mute");

    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
        console.log("Unmuted");
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
        console.log("Muted");
    }
    video.mute();
});

document.querySelector("#slider").addEventListener("input", function() {
    let volume = this.value;
    video.volume = volume / 100;
    document.querySelector("#volume").textContent = volume + "%";
    console.log("volume set to " + volume + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("styled applied");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("original style restored");
});
