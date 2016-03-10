(function() {
	function CollectionCtrl(Fixtures) {
		this.albums = Fixtures.getCollection(12);
		//removed this.
	}

	angular
		.module('blocJams')
		.controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();