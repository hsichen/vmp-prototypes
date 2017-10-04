var $ = require('jquery');
var InViewBanner = require('./banner/InViewBanner.js');
var InPageBanner = require('./banner/InPageBanner.js');

// doesn't need to wait for document
var inviewBanner = new InViewBanner({
	width:300,
	height:250,
	initialPosition: 0.5,
	scrollThreshold: 100
});

// needs to wait for doc ready
var inpageBanner;

$(document).ready(function(){
	$('#bannerRefresh').click(
		function() {
			inviewBanner.refresh();
		}
	);

	inpageBanner = new InPageBanner({
		embedSelector: '#inpageBanner',
		width:728,
		height:90,
		scrollThreshold: 100
	});
});

top.doInView = function doInView() {
	inviewBanner.showInitial();
};

top.doInPage = function(){
	inpageBanner.showInitial();
};

