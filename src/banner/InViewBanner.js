var $ = require('jquery');
var samples = require('../samples');
var BannerClass = require('./Banner.js');

// local vars
var openHandle;
var windowWidth;
var windowHeight;
var scrollThreshold;	

var InViewBanner = function(configs){
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	var banner = BannerClass.call(this);

	var self = this;
	var imageUrl = samples.get(configs.width, configs.height);
	windowWidth = $(top).width();
	windowHeight = $(top).height();
	scrollThreshold = configs.scrollThreshold || 100;
	var initialPositionFraction = configs.initialPosition || 0.5;	// percentage of top-portion of banner in view

	banner.css({
			'width': configs.width,
			'height': configs.height + 16,	// acounts for icons
			'position': "fixed",
			'top': (windowHeight - (initialPositionFraction * configs.height)) + "px",
			'left': ((windowWidth - configs.width) / 2 ) + "px",
			'overflow': 'hidden'
		});


	banner.append(this.closeIcon.css('float', 'right').click(
		function() {
			self.hide();
		})
	);
	banner.append(this.infoIcon.css('float', 'right'));
	banner.append(this.container);
	this.container.append($('<img/>').attr('src', '//' + imageUrl).attr('id', 'adImage'));

	// scroll listener
	$(top).scroll(function showByScrollFractionAndThreshold() {
		var scrollTop = $(top).scrollTop();

		if(scrollTop <= scrollThreshold) {
			return;
		}

		var scrollDiff = (scrollTop - scrollThreshold);
		var revealAmount = (initialPositionFraction * configs.height + scrollDiff);

		banner.css({top: (windowHeight - Math.min(revealAmount, configs.height + 16)) + "px"});

		if(revealAmount >= (configs.height + 16)) {
			setTimeout(function(){
				self.hide();
			}, 2000);
		}
	});

	openHandle = $('<div></div>')
		.css({
			'background-color': 'cyan',
			'border': '1px solid gray',
			'border-radius': '5px',
			'width': configs.width,
			'height': '40px',
			'z-index' : 500,
			'padding': 0,
			'position': "fixed",
			'top': (windowHeight - 40) + "px",
			'left': ((windowWidth - configs.width) / 2 ) + "px",
			'cursor': 'pointer',
			'overflow': 'hidden'
		})
		.html('Click to open InView Banner')
		.hide();

	openHandle.click(function(e){
		banner.css('top', windowHeight);
		banner.animate({top:(windowHeight - banner.height()) + "px"},
			function(){
				openHandle.fadeOut(500);
			});
	});
}

// TODO: convert to instance
function isAttached() {
	return this.banner && $.contains(top.document, this.banner[0]);
}

function isInFullView() {
	return windowHeight - this.banner.css('top') >= this.banner.height();
}

InViewBanner.prototype = Object.create(BannerClass.prototype);
InViewBanner.prototype.constructor = InViewBanner;

InViewBanner.prototype.hide = function () {
	this.banner.animate({top: windowHeight+1},
		function(){
			openHandle.fadeIn(500);
		});
};

InViewBanner.prototype.start = function () {
	if(!isAttached()) {
		$(top.document.body).append(this.banner);
		$(top.document.body).append(openHandle);
	}
}

InViewBanner.prototype.refresh = function () {
	var b = this.banner;
	b.animate({top: windowHeight+1}, function(){
		b.find('#adImage').attr('src', '//' + samples.get(b.width(), b.height()-16));
		b.animate({top: windowHeight - b.height()});
	});
}

module.exports = InViewBanner;