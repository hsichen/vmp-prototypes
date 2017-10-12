var ScrollDecoratedInViewBanner = require('./banner/ScrollDecoratedInViewBanner.js');
var MultiImageInPageBanner = require('./banner/MultiImageInPageBanner.js');
var InRangeInViewBanner = require('./banner/InRangeInViewBanner.js');

top.doInView = function (configs) {
	var inviewBanner = new ScrollDecoratedInViewBanner(configs);

	inviewBanner.start();
};

top.doInRange = function (configs) {
	var inrangeBanner = new InRangeInViewBanner(configs);

	inrangeBanner.start();
};

top.doInPage = function (configs){
	var inpageBanner = new MultiImageInPageBanner(configs);
	inpageBanner.start();

	var i = 0;
	top.toggle = function() {
		i = (i+1) % configs.num_images;
		inpageBanner.showBannerImage(i);
	};
};
