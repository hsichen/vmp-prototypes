var $ = require('jquery');
var samples = require('../samples');
var InPageBannerClass = require('./InPageBanner.js');

// constants
var INDICATOR_ACTIVE_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzBJREFUeNqkU11oFFcU/u6dmd0x+xOzZuMqrhuN+UFj9KHShz6UghVSKbQgKBgEFV8U9aVCUBQEBd+EKkos8UGwLS0pprUPdcE2STXxh+xGjImJa/520w1rNpv9ndmd2dszrm959MDH3HPnnO8759x72XAoDMskSYJB8Nhln09bOp43zPZZjfl1E4pPZUvr7OXnyzb3rWhJfmjkc+AMMIwS5PfZQqDIJGxSjGNyLnXzasIldeu1iNhcAONwpTXPXpFsOLMmub/NjT9GbWpHQdfTnFJZKDwCrQy0utjFZFa/sHt2IyZddfBtAL6pAeokIJgDBv+j6LiG6+4ITviN8dBy+QtN1+IYGBxEfGL064XxF2J9T0LgsRA/FcUKSxF2TlOpPSXR/ei1MKdGfn06HAbntOe1lc91znkw76jFw13AAQW4UgC8GaA6C7QTTKoyFADatsk4GluL17q6z1/F9yL2KvT5yPikwM9J0TFVUTuUJlYLZQL50IXwLglhFTZmkH+/KDr/mRXmzMsu7lWVQ4/TJClL+G4dECWlOxr1a7cmhIrRb2oOnWmghWYSqOXoXZZQ4LZdXOJsc9yaoswQoKQQlQsKRJFQ/kBgrfNAJFNx/Q6GWIm2SvBwvWRO+FWiX1zGW+r7U0uZpg5aQ//wNQiU3CoqBNPxDDYJDYrCFnk0W7jz2VobkEzgcjiFOiI46baiCPOEBUIEqCfFS3S0YSKNhuZwwCvglMQTHl3MPAqsMgdOtbrx24M3+DMl8H09cHsj0Ehlr6d2DjuBiW0V9X3352A3C9i/1YU384u9+CsYxIuhgT3JTEpsv/ZM4Pyg6IrpK+7BvClEwy/TAqeD4t5kQqRjEz8GHwTB+vv7kStoaPbVnPXUN13+tncGf4cTqGqqQ3uLBx5Vwr+xLMZCcdiUMno6tmKPMzc8NPb2S8WuJllfX9/748rmCtjsrT7Y0tzY9ftsyXFj5B36Enm65mVscdjR0bgax3fUwJlP3B0anzmiqKuKiiyjQkBmWg+qZEDlqPmkYcMxm9v9Vc5kAeJWuMSSDkN7NhqJ/jCXyg5Vu5xg9MgkiYNZF+1j7H8BBgBpyaYfXtj5QgAAAABJRU5ErkJggg==";
var INDICATOR_PLACEHOLDER_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB0klEQVQ4T5WTv2tUQRDHvzPPOxTOwkaCECLhkt19IAieVbCQILZi5R+gIir4AxsbC23EJoIgBvwHrIydiHKC2MhVZ/F2j4ODFDkQTsRodXkzsi935/PXmUw3M9/5MLMzS5hivV5v72AwyBuNxvBfMvo94b1vgHFdcz1FTAdjnkBdVV0DsGKt3SjXTACqmviOf0Cgm1Oa+kag88aYZ2PNBBBCWFXoxWkj/Syic2NIAQghnFHo850UjzSbkotJ07RfAHzHt6A4tgsAFHrfGXebut3u7Fa+tV4uFkhboZsJkqUYl1w+ANjPCbuxTnLJ0jRNKYSwrNDXEwDhrVkwy0Qk3vsnYBgojkPxGYQvAI4UUBFx1lUoy7LTxPSy1MFja+yV6Gchu0qgswBOFnnFOxBOjLX9jX4ldmAVmpUA3wl0GcBXEXmkUGLieAdDhS4x874RbN1aO0eqSqETegDmdvOIAJ5aYy9sb8H7ayA83Ckgzk+go865jwWg1WpVarXam/J8U2GEe3bR3tk+85G12+0D1Wr1xf8gCl2xi/ZW3NIvgOg0m809M4dmLonIjYST+XIXOfL3zHzXLbhX5fgfv7HYlmo8sHkROUxEQ2b29Xr909/G+gGjArpREtCvnQAAAABJRU5ErkJggg==";

var MultiImageInPageBanner = function (configs) {
    if(!configs) {
        throw new Error('configs are required');
    }

    this.scrollThreshold = configs.scroll_threshold || 100;
    this.adImages = [];
    this.showIndicators = configs.indicators;

    // "super constructor" call
    var banner = InPageBannerClass.call(this, configs);
    
    // overriding adjustments
    if(this.showIndicators) {
        this.container.css({
            'margin-left': '17px'   // account for indicators
        });
        banner.css({
            'width': (configs.width + 17 + 20) + 'px'    // account for indicators and icons
        });
        this.indicator = $('<img/>').attr('src', INDICATOR_ACTIVE_IMAGE).css({
            'position': 'absolute',
            'z-index': 500,
            'top': 0,
            'left': 1,
            'width': '16px',
            'height' : '16px'
        });
        banner.append(this.indicator);
    }

    // add mock ad banner images
    this.container.empty();
    for(var i=0; i< (configs.num_images || 2); i++) {
        var adImageTemp = $('<img/>')
            .attr('src', '//' + samples.get(configs.width, configs.height))
            .addClass('adImage')
            .css({
                'width': configs.width,
                'height': configs.height,
                'opacity': 0.0,
                'visibility': 'hidden',
                'position': 'absolute',
                'top': 0,
                'left': 'auto'
            });

        this.container.append(adImageTemp);
        banner.append(
            $('<img/>').attr('src', INDICATOR_PLACEHOLDER_IMAGE).css({
                'position': 'absolute',
                'z-index': 100,
                'top': (i * 16),
                'left': 1,
                'width': '16px',
                'height' : '16px'
            })
        );
        this.adImages.push(adImageTemp);
    }

    // show the first image, if present
    if(this.adImages.length > 0) {
        this.adImages[0].css({
            'opacity': '1',
            'visibility': 'visible'
        });
        this.imageIndex = 0;
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

    // bind to scroll handler
    $(top).scroll(this.handleScroll.bind(this));
}

MultiImageInPageBanner.prototype = Object.create(InPageBannerClass.prototype);
MultiImageInPageBanner.prototype.constructor = MultiImageInPageBanner;

MultiImageInPageBanner.prototype.showBannerImage = function (index, opacityValue) {
    if(this.adImages.length > 0) {
        this.adImages[this.imageIndex].css({
            'visibility' :'hidden',
            'opacity':0
        });

        // convert to new index - cap at max
        this.imageIndex = (index < this.adImages.length) ? index : this.adImages.length-1;
        this.adImages[this.imageIndex].css({
            'visibility' :'visible'
        });

        if(opacityValue) {
            this.adImages[this.imageIndex].css({'opacity': opacityValue});
        } else {
            this.adImages[this.imageIndex].animate({'opacity': 1});
        }

        this.indicator.css('top', (this.imageIndex*16)+'px');   // indicator position
    }
}

MultiImageInPageBanner.prototype.handleScroll = function() {
    var scrolled = $(top).scrollTop();
    var index, oFraction;

    if(scrolled <= this.scrollThreshold) {
        this.showBannerImage(0, 1);    // initial
        return;
    }
    console.log("Scrolled beyond threshold to", scrolled);

    index = Math.floor((scrolled - this.scrollThreshold) / 100);
    oFraction = ((scrolled - this.scrollThreshold) % 100) / 100;
    console.log("Setting to index and opacity of", index, oFraction);

    this.showBannerImage(index, oFraction);
}

module.exports = MultiImageInPageBanner;