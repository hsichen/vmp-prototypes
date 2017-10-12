var $ = require('jquery');
var InViewBannerClass = require('./InViewBanner.js');

var RangedScrollInViewBanner = function(configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	InViewBannerClass.call(this, configs);
	
}


RangedScrollInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
RangedScrollInViewBanner.prototype.constructor = RangedScrollInViewBanner;

module.exports = RangedScrollInViewBanner;