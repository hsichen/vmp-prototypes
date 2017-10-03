var samples = {
	'300x250' : [
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/3b/00/5d/3b005da95b6901063294dfc418033492.jpg',
			index:0
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/fb/b0/d0/fbb0d0907d4df966cf657e4029f2d8bb.jpg',
			index:1
		}
	]
};

module.exports = {
	get : function (width, height) {
		if(!width || !height) {
			return '';
		}

		var arr = samples[width+'x'+height];
		if(!arr) {
			return '';
		}

		var randomIndex = Math.floor(Math.random() * arr.length)
		var data = arr[randomIndex];

		return data.url;
	}
};