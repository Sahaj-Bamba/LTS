var songs = ["02 Sun Saathiya - ABCD 2.mp3",
			"01 Galliyan.mp3",
			"How Long - Charlie Puth (DJJOhAL.Com).mp3",
			"01 Tere Liye - Namaste England.mp3",
			"11 Bezubaan Phir Se (Reprise) ABCD 2 Shraddha Kapoor.mp3",
			"02 Dekhte Dekhte - Batti Gul Meter Chalu.mp3",
			"02 Paniyon Sa (Satyameva Jayate).mp3",
			"02 Akh Lad Jave - Loveratri.mp3",
			"01 Gold Tamba - Batti Gul Meter Chalu.mp3",];

var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');


var song = new Audio();
var currentSong = 0;

window.onload = loadSong; //song plays immediately

function loadSong () {
	song.src = "songs/" + songs[currentSong];
	songTitle.textContent = (currentSong+1) + ". " +songs[currentSong];
	nextSongTitle.innerHTML = "<b>Next Song -></b>" + songs[(currentSong + 1) % songs.length];
	song.playbackRate = 1;
	song.volume = volumeSlider.value;
	setTimeout(showDuration,1000);
	song.play();
	

}

setInterval(updateSongSlider , 1000);

function updateSongSlider () {
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
	if(song.ended)
	{
		next();
	}

}

function convertTime (secs) {
	var min = Math.floor(secs/60);
	var sec = secs%60;
	min = (min<10) ? "0" + min:min;
	sec = (sec<10) ? "0" + sec:sec;
	return (min +":" +sec);
}

function showDuration () {
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max" , d);
	duration.textContent = convertTime(d);
}

function playOrpause (img) {
	song.playbackRate = 1;
	if(song.paused)
		{
			song.play();
			img.src = "pause.png";
		}
		else{
			song.pause();
			img.src = "play.png";
		}
}


function next() {
	currentSong = (currentSong + 1) % songs.length;
	loadSong();
}

function previous () {
	currentSong--;
	currentSong = (currentSong < 0) ? songs.length-1 : currentSong ;
	loadSong();


}

function seeksong () {
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}

function adjustvolume () {
	song.volume = volumeSlider.value;
}

function increaseplaybackrate () {
	song.playbackRate +=0.5;
}

function decreaseplaybackrate () {
	song.playbackRate -=0.5;
}