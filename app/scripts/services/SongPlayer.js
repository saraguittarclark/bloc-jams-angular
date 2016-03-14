(function() {
	function SongPlayer() {
		var SongPlayer = {};
	
	var currentSong = null;

	/**
	@desc Buzz Object audio file
	@type {Object}
	**/

	var currentBuzzObject = null;

	/**
	@function setSong
	@desc Stops currently playing song and loads new audio file as currentBuzzObject
	@param {Object} song
	**/

	var setSong = function(song) {
		if (currentBuzzObject) {
			currentBuzzObject.stop();
			currentSong.playing = null;
		}

		currentBuzzObject = new buzz.sound(song.audioUrl, {
			formats: ['mp3'],
			preload: true
		});

		currentSong = song;
	};

	/**
	@function playSong
	@desc plays song that is clicked and sets playing song to true
	@param {Object} song
	**/

	var playSong = function(song) {
		currentBuzzObject.play();
		song.playing = true;
	};

	/**
	@function SongPlayer.play
	@desc if current playing song !== clicked song, stop current song and play clicked
		OR if current song is paused and was clicked again, play
	@param {Object} song
	**/

	SongPlayer.play = function(song) {
		if (currentSong !== song) {
			setSong(song);
			playSong();

		} else if (currentSong === song) {
			if (currentBuzzObject.isPaused()) {
				playSong();
			}
		}
	};

	/**
	@function SongPlayer.pause
	@desc pause song and set song playing to false 
	@param {Object} song
	**/

	var pauseSong = function(song) {
		currentBuzzObject.pause();
		song.playing = false;
	};

	SongPlayer.pause = function(song) {
		pauseSong();
	};

	return SongPlayer;

}

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();