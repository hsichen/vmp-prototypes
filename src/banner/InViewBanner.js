var $ = require('jquery');
var samples = require('./samples');

// local vars
var banner, windowWidth, windowHeight;

function InViewBanner(configs){
	if(!configs) {
		throw new Error('configs are required');
	}

	var imageUrl = samples.get(configs.width, configs.height);
	windowWidth = $(top).width();
	windowHeight = $(top).height();

	banner = $('<div></div>')
		.css({
			'background-color': 'transparent',
			// 'border': '1px solid gray',
			'width': configs.width,
			'height': configs.height + 16,	// acounts for icons
			'z-index' : 5000,
			'padding': 0,
			'padding-top': '16px',
			// 'opacity': s.transparency / 100,
			'position': "fixed",
			'top': windowHeight-100 + "px",
			'left': ((windowWidth - configs.width) / 2 ) + "px",
			'overflow': 'hidden'
		});

	banner.append($('<img/>').attr('src', 'http://' + imageUrl));


	console.log('InViewBanner init on window dimensions of', windowWidth, windowHeight);
}

InViewBanner.prototype.constructor = InViewBanner;
module.exports = InViewBanner;


InViewBanner.prototype.attach = function () {
	$(top.document.body).append(banner);
};

InViewBanner.prototype.show = function () {
}