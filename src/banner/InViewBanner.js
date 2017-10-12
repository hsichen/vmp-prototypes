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
	this.anchorContainer.append(banner);

	// construct and modify the banner styles
	this.endTopValue = -1 * (configs.height + 20);
	banner.css({
		'width': configs.width,
		'height': configs.height + 20 + 'px',
		'position': 'absolute',
		'top': '0px',
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
	});
	this.infoIcon.css({
		'position':'absolute',
		'right': '18px',
		'top': '0px'
	});
	banner.append(this.closeIcon);
	banner.append(this.infoIcon);	
	banner.append(this.container);
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
		
		banner.css({
			'width': configs.width * scaleFactor,
			'height': configs.height * scaleFactor,
			'left': '0px'
		});
		this.container.css('transform', 'scale('+scaleFactor+')');
		this.endTopValue = -1 * (configs.height * scaleFactor + 20);
	}

	if(configs.reopenable) {
		var self = this;
		this.openHandle = $('<div></div>')
			.attr('id', 'inviewOpenHandle')
			.css({
				'text-align': 'center',
				'background-color': 'cyan',
				'border': '1px solid gray',
				'border-radius': '5px',
				'width': configs.width,
				'height': '40px',
				'z-index' : 500,
				'padding': 0,
				'position': "absolute",
				'top': "-40px",
				'left': ($(top).width() - configs.width)/2 + 'px',
				'cursor': 'pointer',
				'overflow': 'hidden'
			})
			.click((function(){
				return function() {
					self.isHidden = false;
					self.show();
				}
			})())
			.html('Click to open InView Banner')
			.hide();

		this.anchorContainer.append(this.openHandle);
	}

	$(top.document.body).append(this.anchorContainer);
};

InViewBanner.prototype = Object.create(BannerClass.prototype);
InViewBanner.prototype.constructor = InViewBanner;

InViewBanner.prototype.show = function (callback) {
    var handle = this.openHandle;
    var hideHandleCallback = function(){
		handle.hide();
	};

	this.banner.animate({
		'top': this.endTopValue
	}, 'slow', callback || hideHandleCallback);
};

InViewBanner.prototype.hide = function (callback) {
	var handle = this.openHandle;
	var showHandleCallback = function(){
  		handle.show();
    };

	this.banner.animate({
		'top': '0px'
	}, 'slow', callback || showHandleCallback);

    this.isHidden = true;
};

InViewBanner.prototype.start = function () {
	this.show();

	var self = this;
	this.closeIcon.click(function() {self.hide();});
};

module.exports = InViewBanner;