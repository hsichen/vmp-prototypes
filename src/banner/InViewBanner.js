var $ = require('jquery');
var samples = require('./samples');

// local vars
var imageUrl;

function InViewBanner(configs){
	if(!configs) {
		throw new Error('configs are required');
	}

	imageUrl = samples.get(configs.width, configs.height);
	console.log('InViewBanner init!');
}

InViewBanner.prototype.constructor = InViewBanner;
module.exports = InViewBanner;


InViewBanner.prototype.attach = function () {
	if(typeof top != 'undefined') {
		top.alert('hello from inview');
	}
};