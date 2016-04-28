(function() {
	function LandingCtrl() {
		this.heroTitle = "Music to Love";
	}

	angular
		.module('blocJams')
		.controller('LandingCtrl', LandingCtrl);
})();