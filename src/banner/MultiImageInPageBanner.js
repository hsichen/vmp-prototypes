var $ = require('jquery');
var samples = require('../samples');
var InPageBannerClass = require('./InPageBanner.js');

// constants
var INDICATOR_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzBJREFUeNqkU11oFFcU/u6dmd0x+xOzZuMqrhuN+UFj9KHShz6UghVSKbQgKBgEFV8U9aVCUBQEBd+EKkos8UGwLS0pprUPdcE2STXxh+xGjImJa/520w1rNpv9ndmd2dszrm959MDH3HPnnO8759x72XAoDMskSYJB8Nhln09bOp43zPZZjfl1E4pPZUvr7OXnyzb3rWhJfmjkc+AMMIwS5PfZQqDIJGxSjGNyLnXzasIldeu1iNhcAONwpTXPXpFsOLMmub/NjT9GbWpHQdfTnFJZKDwCrQy0utjFZFa/sHt2IyZddfBtAL6pAeokIJgDBv+j6LiG6+4ITviN8dBy+QtN1+IYGBxEfGL064XxF2J9T0LgsRA/FcUKSxF2TlOpPSXR/ei1MKdGfn06HAbntOe1lc91znkw76jFw13AAQW4UgC8GaA6C7QTTKoyFADatsk4GluL17q6z1/F9yL2KvT5yPikwM9J0TFVUTuUJlYLZQL50IXwLglhFTZmkH+/KDr/mRXmzMsu7lWVQ4/TJClL+G4dECWlOxr1a7cmhIrRb2oOnWmghWYSqOXoXZZQ4LZdXOJsc9yaoswQoKQQlQsKRJFQ/kBgrfNAJFNx/Q6GWIm2SvBwvWRO+FWiX1zGW+r7U0uZpg5aQ//wNQiU3CoqBNPxDDYJDYrCFnk0W7jz2VobkEzgcjiFOiI46baiCPOEBUIEqCfFS3S0YSKNhuZwwCvglMQTHl3MPAqsMgdOtbrx24M3+DMl8H09cHsj0Ehlr6d2DjuBiW0V9X3352A3C9i/1YU384u9+CsYxIuhgT3JTEpsv/ZM4Pyg6IrpK+7BvClEwy/TAqeD4t5kQqRjEz8GHwTB+vv7kStoaPbVnPXUN13+tncGf4cTqGqqQ3uLBx5Vwr+xLMZCcdiUMno6tmKPMzc8NPb2S8WuJllfX9/748rmCtjsrT7Y0tzY9ftsyXFj5B36Enm65mVscdjR0bgax3fUwJlP3B0anzmiqKuKiiyjQkBmWg+qZEDlqPmkYcMxm9v9Vc5kAeJWuMSSDkN7NhqJ/jCXyg5Vu5xg9MgkiYNZF+1j7H8BBgBpyaYfXtj5QgAAAABJRU5ErkJggg==";

var MultiImageInPageBanner = function (configs) {
    if(!configs) {
        throw new Error('configs are required');
    }
    this.scrollThreshold = configs.scrollThreshold || 100

    // "super constructor" call
    var banner = InPageBannerClass.call(this, configs);
    
    // overriding adjustments
    banner.css({
        'width': (configs.width + 17 + 20) + 'px'    // account for indicators and icons
    });
    this.container.css({
        'margin-left': '17px'   // account for indicators
    });



    banner.append($('<img/>').attr('src', INDICATOR_IMAGE).css({
            'position': 'absolute',
            'bottom': 0,
            'left': 1,
            'width': '16px',
            'height' : '16px'
        })
    );
/*
    var imageUrl2 = samples.get(configs.width, configs.height);
    var adImage2 = $('<img/>').attr('src', '//' + imageUrl2).attr('id', 'adImage2')
        .css({
            'width': configs.width,
            'height': configs.height,
            'opacity': 0.0,
            'position': 'absolute',
            'top': 0,
            'left': 0
        });
    this.container.append(adImage2);
*/
    $(top).scroll(function() {
        var scrolled = $(top).scrollTop();

        console.debug("Scrolled to", scrolled);
        if(scrolled <= scrollThreshold) {
            toggleBannerImage(1.0);
            return;
        }

        var showFraction = Math.min(scrolled - scrollThreshold, 100) / 100;
        toggleBannerImage(1 - showFraction);
    });
}

MultiImageInPageBanner.prototype.animateBannerImage = function (opacityValue) {
    adImage1.animate({opacity: opacityValue});
    adImage2.animate({opacity: 1.0 - opacityValue});
}

MultiImageInPageBanner.prototype.toggleBannerImage = function(opacityValue) {
    adImage1.css({opacity: opacityValue});
    adImage2.css({opacity: 1.0 - opacityValue});
}

MultiImageInPageBanner.prototype.start = function() {
    var t = false;
    this.attachTarget.after($('<button></button>')
        .css('margin', '5px')
        .html('Fully Toggle Ad Images via Fading Effect')
        .click(function(){
            animateBannerImage(t? 1.0 : 0);
            t = !t;
        })) ;

    this.attachTarget.after(this.banner);
};

MultiImageInPageBanner.prototype = Object.create(InPageBannerClass.prototype);
MultiImageInPageBanner.prototype.constructor = MultiImageInPageBanner;

module.exports = MultiImageInPageBanner;