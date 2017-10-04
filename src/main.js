var $ = require('jquery');
var InViewBanner = require('./banner/InViewBanner.js');
var InPageBanner = require('./banner/InPageBanner.js');

var inviewBanner = new InViewBanner({
	width:300,
	height:250,
	initialPosition: 0.5,
	scrollThreshold: 100
});


$(document).ready(function(){
	$('#bannerRefresh').click(
		function() {
			inviewBanner.refresh();
		}
	);

});
top.doInView = function doInView() {
	inviewBanner.showInitial();
};

top.doInPage = function(){
	alert('inpage!');
};

