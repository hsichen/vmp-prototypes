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
	var regulatedTimerCallback = (function(originalCallback){
		var tid;

		return function() {
			if(tid) {
				top.clearTimeout(tid);	// reset timeout id
			}
			tid = top.setTimeout(originalCallback, self.scrollDelayMillis);
		}
	})(
		function () {
			self.show();	// leaving function wrapper in case of further development closured vars
		}
	);

	$(top).scroll(regulatedTimerCallback);
};

ScrollDecoratedInViewBanner.prototype = Object.create(InViewBannerClass.prototype);
ScrollDecoratedInViewBanner.prototype.constructor = ScrollDecoratedInViewBanner;

ScrollDecoratedInViewBanner.prototype.show = function () {
	var targetPosition = this.getTargetTopPosition()|| this.endTopValue;
	console.debug("scrolled to position:", targetPosition, "starting position is:", this.endTopValue);

    var handle = this.openHandle;
	this.banner.show();
	// uncomment this line below for un-animated testing / debugging 
	// this.banner.css('top', targetPosition);
	this.banner.animate({
		'top': targetPosition
	}, 'slow', function(){
		handle.hide();
	});
};

ScrollDecoratedInViewBanner.prototype.getTargetTopPosition = function () {
	var scrollTop = $(top).scrollTop();

	if(scrollTop <= this.scrollThreshold) {
		return this.endTopValue;
	}

	var p = scrollTop - this.scrollThreshold - this.endTopValue;
	var max = (-1 * this.endTopValue) / this.initialPositionFraction;

	return -1 * Math.min(p, max);
}; 

module.exports = ScrollDecoratedInViewBanner;