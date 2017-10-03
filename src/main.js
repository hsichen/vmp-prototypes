var InViewBanner = require('./banner/InViewBanner.js');
var InPageBanner = require('./banner/InPageBanner.js');

var inviewBanner = new InViewBanner({
	test:'test',
	width:300,
	height:250
});
inviewBanner.attach();