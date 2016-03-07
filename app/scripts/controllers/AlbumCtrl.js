(function() {
	function AlbumCtrl() {
		albumData = [];
		for (var i = 0; i < 12; i++) {
			albumData.push(angular.copy(albumPicasso));
		}
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);
})();