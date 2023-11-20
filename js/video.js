// Add js here.
var video = document.querySelector("#player1");

const volumeControl = () => {
	var volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").innerHTML = volume + "%";
	console.log("Volume is " + video.volume);
}

window.addEventListener("load", function() {
	console.log("window loaded");
	video.autoplay = false;
	console.log("false autoplay");
	video.loop = false;
	console.log("false loop");
	volumeControl();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 10) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volumeControl();
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});