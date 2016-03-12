(function() {
	function AlbumCtrl(Fixtures, SongPlayer) {
		//inject SongPlayer
		this.albumData = Fixtures.getAlbum();
		this.SongPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
		//inject SongPlayer after Fixtures
})();

//SongPlayer breaks fixtures 