var $ = require('jquery');
var InViewBannerClass = require('./InViewBanner.js');

var RangedScrollInViewBanner = function(configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	InViewBannerClass.call(this, configs);

	var rangeMin = configs.scroll_threshold_begin || 200;
	var rangeMax = configs.scroll_threshold_end || 1000;

	var bannerBusy = false;		// "lock" variable
	function lockBanner() {bannerBusy = true;}
	function freeBanner() {bannerBusy = false;}

	var self = this;
	
	$(top).scroll(function() {
		var scrollTop = $(top).scrollTop();
		
		console.debug('user scrolled to', scrollTop, "banner is currently", self.isHidden ? "hidden":"showing", "and state is", bannerBusy ? 'locked':'free');

		if(scrollTop >= rangeMin && scrollTop <= rangeMax) {
			// we show the banner - if it isn't busy
			if(!bannerBusy && self.isHidden) {
				lockBanner();
				self.show(freeBanner);
			}
		} else {
			//  we hide the banner - if it isn't busy
			if(!bannerBusy && !self.isHidden) {
				lockBanner();
				self.hide(freeBanner);
			}
		}
	});
};


RangedScrollInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
RangedScrollInViewBanner.prototype.constructor = RangedScrollInViewBanner;

RangedScrollInViewBanner.prototype.start = function () {
	var s = $(top).scrollTop();
	var startStateFunction = (s >= this.rangeMin && s <= this.rangeMax) ? 'show' : 'hide';

	this[startStateFunction]();
	this.hidden = startStateFunction === 'hide';
	console.debug("banner starting off", this.hidden ? "hidden" : "shown");
};

module.exports = RangedScrollInViewBanner;