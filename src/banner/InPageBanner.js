var $ = require('jquery');
var samples = require('../samples');
var BannerClass = require('./Banner.js');

var InPageBanner = function (configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	var banner = BannerClass.call(this);

	this.attachTarget = $(configs.selector);

	if(this.attachTarget.length === 0) {
		return;
	}

    banner.css({
			'width': (configs.width + 20) + 'px',		// accounts for icons
			'height': configs.height + 'px'
		});

	banner.append(this.closeIcon.css({
			'position': 'absolute',
			'top': 0,
			'right': 0
		})
	);
	banner.append(this.infoIcon.css({
			'position': 'absolute',
			'top': 21,
			'right': 0
		})
	);

    var adImage = $('<img/>').attr('src', '//' + samples.get(configs.width, configs.height)).attr('id', 'adImage')
        .css({
            'width': configs.width,
            'height': configs.height,
            'opacity': 1.0,
            'position': 'absolute',
            'top': 0,
            'left': 0
        });

    banner.append(this.container);
    this.container.append(adImage);
}

InPageBanner.prototype = Object.create(BannerClass.prototype);
InPageBanner.prototype.constructor = InPageBanner;

InPageBanner.prototype.start = function() {
	this.attachTarget.after(this.banner);
	this.show();
};

InPageBanner.prototype.show = function () {
	// this.banner.css("height", "0px");
	console.log('hi', this.banner.height());
	this.banner.slideDown('slow');
}

module.exports = InPageBanner;