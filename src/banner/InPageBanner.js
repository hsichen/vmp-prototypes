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

    var adImage = $('<img/>').attr('src', '//' + samples.get(configs.width, configs.height))
    	.attr('id', 'adImage')
    	.attr('width', configs.width)
    	.attr('height', configs.height)
        .css({
            'width': configs.width,
            'height': configs.height,
        });

    banner.append(this.container);
    this.container.append(adImage);

    return banner;
}

InPageBanner.prototype = Object.create(BannerClass.prototype);
InPageBanner.prototype.constructor = InPageBanner;

InPageBanner.prototype.start = function() {
	this.attachTarget.after(this.banner);
	this.show();
};

InPageBanner.prototype.show = function () {
	// this.banner.css("height", "0px");
	this.banner.slideDown('slow');
}

module.exports = InPageBanner;