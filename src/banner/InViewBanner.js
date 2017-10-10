var $ = require('jquery');
var samples = require('../samples');
var BannerClass = require('./Banner.js');

var InViewBanner = function (configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	var banner = BannerClass.call(this);
	var imageUrl = samples.get(configs.width, configs.height);

	this.anchorContainer = $('<div></div>')
		.attr('id', 'inviewAnchor')
		.css({
			'margin-left': '-10px',
			'margin-right': '-10px',
			'position': 'fixed',
			'bottom': '0px',
			'width': '100%',
			'overflow': 'visible'
		});

	// construct and modify the banner styles
	this.endTopValue = -1 * (configs.height + 20);
	this.banner.css({
		'width': configs.width,
		'height': configs.height + 20 + 'px',
		'position': 'absolute',
		'top': this.endTopValue + 'px',
		'left': ($(top).width() - configs.width)/2 + 'px'
	});
	this.container.css({
		// 'margin-top': '20px',
		'position': 'absolute',
		'top': '20px'
	});
	this.closeIcon.css({
		'position':'absolute',
		'right': '0px',
		'top': '0px'
	}).click(this.hide.bind(this));
	this.infoIcon.css({
		'position':'absolute',
		'right': '18px',
		'top': '0px'
	});
	this.banner.append(this.closeIcon);
	this.banner.append(this.infoIcon);	
	this.banner.append(this.container);
	this.container.append($('<img/>')
		.attr('width', configs.width)
		.attr('height', configs.height)
		.attr('src', '//' + imageUrl)
		.css({
			'width': configs.width,
			'height': configs.height,
			'position': 'absolute',
			'top': '0px',
			'left': '0px'
		}));
	
	if(configs.scale) {
		var scaleFactor = $(top).width() / configs.width;
		
		this.banner.css({
			'width': configs.width * scaleFactor,
			'height': configs.height * scaleFactor,
			'left': '0px'
		});
		this.container.css('transform', 'scale('+scaleFactor+')');
		this.endTopValue = -1 * (configs.height * scaleFactor + 20);
	}


	$(top.document.body).append(this.anchorContainer);
};

InViewBanner.prototype = Object.create(BannerClass.prototype);
InViewBanner.prototype.constructor = InViewBanner;

InViewBanner.prototype.show = function () {
	this.banner.css('top', '0px');
	this.banner.animate({
		'top': this.endTopValue
	}, 'slow');
}

InViewBanner.prototype.hide = function () {
	this.banner.animate({
		'top': '0px'
	}, 'slow');
}

InViewBanner.prototype.start = function () {
	this.anchorContainer.append(this.banner);
	this.show();	
};

module.exports = InViewBanner;