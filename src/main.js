var $ = require('jquery');
var InViewBanner = require('./banner/InViewBanner.js');
var MultiImageInPageBanner = require('./banner/MultiImageInPageBanner.js');

top.doInView = function doInView(configs) {
	var inviewBanner = new InViewBanner(configs);
	inviewBanner.start();

	$('#bannerRefresh').click(
		function() {
			inviewBanner.refresh();
		}
	);
};

top.doInPage = function(configs){
	var inpageBanner = new MultiImageInPageBanner(configs);
	inpageBanner.start();

	var i = 0;
	top.toggle = function() {
		i = (i+1) % configs.num_images;
		inpageBanner.showBannerImage(i);
	};
};
