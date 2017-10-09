var $ = require('jquery');
// var _ = require('lodash');
var InViewBanner = require('./banner/InViewBanner.js');
var MultiImageInPageBanner = require('./banner/MultiImageInPageBanner.js');

top.doInView = function doInView(configs) {
	// doesn't need to wait for document to finish loading 
	//  - but that decision is left up to the bootstrap html
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
	top.ghg = inpageBanner;
};

top.$ = $;