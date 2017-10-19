var ScrollDecoratedInViewBanner = require('./banner/ScrollDecoratedInViewBanner.js');
var MultiImageInPageBanner = require('./banner/MultiImageInPageBanner.js');
var InRangeInViewBanner = require('./banner/InRangeInViewBanner.js');
var InPortalInPageBanner = require('./banner/InPortalInPageBanner.js');

top.doInView = function (configs) {
	var inviewBanner = new ScrollDecoratedInViewBanner(configs);

	inviewBanner.start();
};

top.doInRange = function (configs) {
	var inrangeBanner = new InRangeInViewBanner(configs);

	inrangeBanner.start();
};

top.doInPortal = function (configs) {
    var inportalBanner = new InPortalInPageBanner(configs);

    inportalBanner.start();
    top.up = inportalBanner.moveAdImageUp.bind(inportalBanner);
    top.down = inportalBanner.moveAdImageDown.bind(inportalBanner);
    top.demoAnimate = inportalBanner.demoAnimate.bind(inportalBanner);
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
