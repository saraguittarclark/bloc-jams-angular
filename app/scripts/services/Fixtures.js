(function() {
	function Fixtures() {
		var Fixtures = {};
		var albumPicasso = {
			name: 'The Colors',
			artist: 'Pablo Picasso',
			label: 'Cubism',
			year: '1881',
			albumArtUrl: 'assets/images/album_covers/01.png',
			songs: [
				{name: 'Blue', timeMS: '2:42', duration: 161.71, audioUrl: '/assets/music/blue'},
				{name: 'Green', timeMS: '1:44', duration: 103.96, audioUrl: '/assets/music/green'},
				{name: 'Red', timeMS: '4:28', duration: 268.45, audioUrl: '/assets/music/red'},
				{name: 'Pink', timeMS: '2:33', duration: 153.14, audioUrl: '/assets/music/pink'},
				{name: 'Magenta', timeMS: '6:14', duration: 374.22, audioUrl: '/assets/music/magenta'}
			]
		};

		Fixtures.getAlbum = function() {
			return albumPicasso;
		};

		Fixtures.getCollection = function(numberOfAlbums) {
			var collection = [];
			for (var i = 0; i < numberOfAlbums; i++) {
				collection.push(angular.copy(albumPicasso));
			}
			return collection;
		};

		return Fixtures;
	}

	angular
		.module('blocJams')
		.factory('Fixtures', Fixtures);
})();