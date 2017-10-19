var $ = require('jquery');
var samples = require('../samples');
var InPageBannerClass = require('./InPageBanner.js');

var InPortalInPageBanner = function (configs) {
	if(!configs) {
		throw new Error('configs are required');
	}

	// "super constructor" call
	var banner = InPageBannerClass.call(this, configs);

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

    var adImage = $('<img/>').attr('src', '//' + samples.get(configs.ad_width, configs.ad_height))
    	.attr('id', 'adImage')
    	.attr('width', configs.ad_width)
    	.attr('height', configs.ad_height)
		.attr('top', '0')
        .css({
            'width': configs.ad_width,
            'height': configs.ad_height,
			// 'position': 'absolute',
			// 'left': '0px',
        });

    this.container.empty();		// clear out superclass' prior operations on the container
	this.container.css({
		'border': '1px solid gray',		// apply any custom css to override
        'position': 'absolute',
		'left': '0px',
        'width': configs.width + 'px',		// accounts for icons
        'height': configs.height + 'px',
	});

    // banner.append(this.container);
    this.container.append(adImage);

    if(configs.scale_ad) {
    	var scale = configs.width / configs.ad_width;
        this.container.css('transform', 'scale('+scale+')');
        adImage.css('margin-left', ((scale - 1) * configs.ad_width)/2 + 'px');
    }

    // do scale transformation - math needs is just approximate right now
    if(configs.scale) {
        var scale = (this.attachTarget.width() - 17 - 20) / configs.width;
        banner.css({
            'width': configs.width * scale + 17 + 20,
            'height': configs.height * scale
        });

        this.container.css('transform', 'scale('+scale+')');
        this.container.css('margin-left', scale/2 + 17 + 'px');
        this.container.find('.adImage').css('left', ((scale - 1) * configs.width)/2 + 'px');
    }
};

InPortalInPageBanner.prototype = Object.create(InPageBannerClass.prototype);
InPortalInPageBanner.prototype.constructor = InPortalInPageBanner;

InPortalInPageBanner.prototype.moveAdImageUp = function() {
	var image = this.container.find('#adImage');
	var t = parseInt(image.attr('top'));

   	image.css('margin-top', t-10 + 'px');
   	image.attr('top', t-10);
};

InPortalInPageBanner.prototype.moveAdImageDown = function() {
    var image = this.container.find('#adImage');
    var t = parseInt(image.attr('top'));

    image.css('margin-top', t+10 + 'px');
    image.attr('top', t+10);
};

module.exports = InPortalInPageBanner;