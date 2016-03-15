(function() {
	function SongPlayer(Fixtures) {
		var SongPlayer = {};
		var currentAlbum = Fixtures.getAlbum();

		/**
		@desc Buzz Object audio file
		@type {Object}
		**/

		var currentBuzzObject = null;
		SongPlayer.currentSong = null;

		/**
		@function setSong
		@desc Stops currently playing song and loads new audio file as currentBuzzObject
		@param {Object} song
		**/

		var setSong = function(song) {
			if (currentBuzzObject) {
				stopSong();
			}

			currentBuzzObject = new buzz.sound(song.audioUrl, {
				formats: ['mp3'],
				preload: true
			});

			SongPlayer.currentSong = song;
		};

		/**
		@func getSongIndex
		@desc returns song index (picasso) 
		**/

		var getSongIndex = function(song) {
			return currentAlbum.songs.indexOf(song);
		};


		/**
		@function playSong
		@desc plays song that is clicked and sets playing song to true
		@param {Object} song
		**/

		var playSong = function() {
			currentBuzzObject.play();
			SongPlayer.currentSong.playing = true;
		};

		/**
		@function SongPlayer.play
		@desc if current playing song !== clicked song, stop current song and play clicked
			OR if current song is paused and was clicked again, play
		@param {Object} song
		**/

		SongPlayer.play = function(song) {
			song = song || SongPlayer.currentSong;
			if (SongPlayer.currentSong !== song) {
				setSong(song);
				playSong(song);
			} else if (SongPlayer.currentSong === null) {
				setSong(currentAlbum.songs[0]);
				playSong(currentAlbum.songs[0]);
			} else if (SongPlayer.currentSong === song) {
				if (currentBuzzObject.isPaused()) {
					playSong(song);
				}
			} 
		};

		/**
		@function pauseSong
		@desc pause song and set song playing to false 
		@param {Object} song
		**/

		var pauseSong = function(song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			SongPlayer.currentSong.playing = false;
		};

		/**
		@func SongPlayer.pause
		@desc pauses the song
		**/

		SongPlayer.pause = function() {
			pauseSong();
		};

		/**
		@func SongPlayer.previous
		@desc to use on previous button on player bar, i--
		**/

		SongPlayer.previous = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;
			if (currentSongIndex < 0) {
				stopSong();
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};

		/**
		@func SongPlayer.next
		@desc to use on next  button on player bar i++
		**/

		SongPlayer.next = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;
			if (currentSongIndex >= currentAlbum.songs.length) {
				stopSong();
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};

		var stopSong = function() {
			currentBuzzObject.stop()
			SongPlayer.currentSong.playing = null;
		};

		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();