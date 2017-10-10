var $ = require('jquery');
var InViewBannerClass = require('./InViewBanner.js');

var ScrollDecoratedInViewBanner = function(configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	InViewBannerClass.call(this, configs);

	var self = this;
	this.scrollThreshold = configs.scroll_threshold || 100;
	this.initialPositionFraction = configs.initial_position || 0.5;
	this.endTopValue = this.endTopValue * this.initialPositionFraction;
	this.scrollDelayMillis = configs.scroll_delay_millis || 500;

	// attaching scrolling stuff
	var getTargetTopPosition = function () {
		var scrollTop = $(top).scrollTop();

		if(scrollTop <= self.scrollThreshold) {
			return self.endTopValue;
		}

		var p = scrollTop - self.scrollThreshold - self.endTopValue;
		var max = (-1*self.endTopValue) / self.initialPositionFraction;

		return -1 * Math.min(p, max);
	};

	$(top).scroll(function () {
		var p = getTargetTopPosition();
		console.log("scrolled to position:", p);
		self.show(p);
	});

	
};

ScrollDecoratedInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
ScrollDecoratedInViewBanner.prototype.constructor = ScrollDecoratedInViewBanner;

ScrollDecoratedInViewBanner.prototype.show = function (pos) {
	var targetPosition = pos || this.endTopValue;
    var handle = this.openHandle;
	this.banner.show();
	this.banner.animate({
		'top': targetPosition
	}, 'slow', function(){
		handle.hide();
	});
};

module.exports = ScrollDecoratedInViewBanner;