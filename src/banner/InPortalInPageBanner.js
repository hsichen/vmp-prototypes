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
        adImage.css('transform', 'scale('+scale+')');
        adImage.css('margin-left', ((scale - 1) * configs.ad_width)/2 + 'px');
        adImage.css('margin-top', '-' + ((scale - 1) * configs.ad_height)/2 + 'px');

        adImage.attr('top', '-' + ((scale - 1) * configs.ad_height)/2);
    }

    // do scale transformation - math needs is just approximate right now
    if(configs.scale_banner) {
        var scale = (this.attachTarget.width() - 20) / configs.width;
        banner.css({
            'width': configs.width * scale + 20,
            'height': configs.height * scale
        });

        this.container.css('transform', 'scale('+scale+')');
        this.container.css('margin-left', (this.container.width() * (scale-1))/2 + 'px');
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

InPortalInPageBanner.prototype.demoAnimate = function() {
    var con = this.container;
	var image = con.find('#adImage');
    var t = parseInt(image.attr('top'));

	image.animate({
		'margin-top': '0px'
	}, {
		duration: 'slow',
		complete: function() {
			var b = image.height()  + con.height();
            image.animate({
                'margin-top': '-'+b+'px'
            }, {
                duration: 'slow',
                complete: function() {
					image.animate({'margin-top':t+'px'}, 'slow');
                }
            })
		}
	});
};

module.exports = InPortalInPageBanner;