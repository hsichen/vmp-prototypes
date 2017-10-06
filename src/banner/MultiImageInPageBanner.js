var $ = require('jquery');
var samples = require('../samples');
var InPageBannerClass = require('./InPageBanner.js');

// constants
var INDICATOR_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAXCAYAAABu8J3cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALSSURBVEhLxZY5iFNRFIbT2wiujBiw0cZiBLXQ1kpEEEvBwg0rG7UXBAULcUBBRQbUSpFxVh0dzIzjrtkzk/1l30P2lWy/51wNjvLMbrzwE3Lffe9+75z/nHcV5XIZuVzuv0tRKBSQSqWQTCaHKt6TAUqlkpAik8kgEokgHA4PVbFYDByEer2ORqPxA4QvhEKhoSoajaJYLAoIHm1BgiRvMAiD1w8jye4PIBCUX9uNugbxBIJQOb049MaIwyoTxvQOWH0BASi3vlN1DWKjCNzUObBlWoNNU2rsmNXi4IIBD0ySiJCfoiV3Xzt1DWKht7+mtWMjQZx8t4qrGjuOLJqw/7Ve/B9fkaD1+LuOUM8gWyki94wSHP4gFilVpz6YMTqvx95Xelz4ZMGc3SMi5OkwQj2DjMxocJ/S4aONvrp9uE5zj1ddOE1AIwS564UOl79YsSz54CJfBWSetVZ9g7B5p2xuHKX0LEtecX3S6sbxtyvYRmt2v9SJ9JkoOq1g+gbht12i1JyhSHx2+YQ3JJp7T5E4R3ObyUs757S4Qfe0SlPfIE7yyDj97iF/MBBHiHvMU4tLmHg7rTtAVfWQTMz9R+6ZrL5BuJzvGJxQUhk/s7ihcnhxibwxOq8TpX2CKmmaUucmwFaVNBCQ2wTCfYV9wmlYP6nGsSUTJgiMq6qTUu4ZhMv3FnVVI/WMu0Yn1j3/BuWMVsA8Mbuhp3lRLR22fwbhr27XIBvIhPuoZ5z/aMYjyv9FSseY3inKlX0jd28rxeNxVCoVAcGjLQh/5DgVSkoNp4O/ObM2j5j39/jx4/34TMJHgOZoC8LO5zI9S6V5RW3DApkz0GH3/Jv4LMJpWTvagrDx+M3ZhNwvWpVkJ+K98vn8b9Hg0RZkUOI9OBIMUavVfm7/ayiy2axYwC4etPi5bMpEIoF0Oi3S8WckmkNRrVbBJ/l/Ja4MjkCzTOUH8B2X0B3HJllB/AAAAABJRU5ErkJggg==";


var MultiImageInPageBanner = function (configs) {
    if(!configs) {
        throw new Error('configs are required');
    }
    this.scrollThreshold = configs.scrollThreshold || 100

    // "super constructor" call
    var banner = InPageBannerClass.call(this, configs);
    
    // overriding adjustments
    banner.css({
        'width': (configs.width + 20 + 20) + 'px'    // account for indicators and icons
    });
    this.container.css({
        'margin-left': '20px'   // account for indicators
    });



    banner.append($('<img/>').attr('src', INDICATOR_IMAGE).css({
            'position': 'absolute',
            'bottom': 0,
            'left': 1,
            'width': '20px',
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

        console.log("Scrolled to", scrolled);
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