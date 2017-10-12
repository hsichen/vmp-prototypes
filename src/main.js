var ScrollDecoratedInViewBanner = require('./banner/ScrollDecoratedInViewBanner.js');
var MultiImageInPageBanner = require('./banner/MultiImageInPageBanner.js');
var RangedScrollInViewBanner = require('./banner/RangedScrollInViewBanner.js');

top.doInView = function (configs) {
	var inviewBanner = new ScrollDecoratedInViewBanner(configs);

	inviewBanner.start();
};

top.doInView2 = function (configs) {
	var inviewBanner = new RangedScrollInViewBanner(configs);

	inviewBanner.start();
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
