var $ = require('jquery');
var InViewBannerClass = require('./InViewBanner.js');

var ScrollDecoratedInViewBanner = function(configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	InViewBannerClass.call(this, configs);

	var banner = this.banner;
	this.scrollThreshold = configs.scroll_threshold || 100;
	this.initialPositionFraction = configs.initial_position || 0.5;
	this.endTopValue = this.endTopValue * this.initialPositionFraction;

	// attaching scrolling stuff
	var getTargetTopPosition = (function(self){
		return function () {
			var scrollTop = $(top).scrollTop();

			if(scrollTop <= self.scrollThreshold) {
				return self.endTopValue;
			}

			var p = scrollTop - self.scrollThreshold - self.endTopValue;
			var max = (-1*self.endTopValue) / self.initialPositionFraction;

			return -1 * Math.min(p, max);
		}
	})(this);

	$(top).scroll(function () {
		var p = getTargetTopPosition();
		
		banner.css({
			'top': p
		});
	});

	
};

ScrollDecoratedInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
ScrollDecoratedInViewBanner.prototype.constructor = ScrollDecoratedInViewBanner;

ScrollDecoratedInViewBanner.prototype.show = function () {
    var handle = this.openHandle;
	this.banner.show();
	this.banner.animate({
		'top': this.endTopValue
	}, 'slow', function(){
		handle.hide();
	});
};

ScrollDecoratedInViewBanner.prototype.showByDirectSet = function () {
	var scrollTop = $(top).scrollTop();

	if(scrollTop <= this.scrollThreshold) {
		this.banner.css({
			'top': this.endTopValue
		});

		return;
	}
};

module.exports = ScrollDecoratedInViewBanner;