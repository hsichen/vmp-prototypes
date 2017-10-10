var $ = require('jquery');
var InViewBannerClass = require('./InViewBanner.js');

var ScrollDecoratedInViewBanner = function(configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	InViewBannerClass.call(this, configs);

	var scrollThreshold = configs.scrollThreshold || 100;
	var initialPositionFraction = configs.initialPosition || 0.5;
};

ScrollDecoratedInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
ScrollDecoratedInViewBanner.prototype.constructor = ScrollDecoratedInViewBanner;

module.exports = ScrollDecoratedInViewBanner;