var samples = {
	'300x250' : [
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/3b/00/5d/3b005da95b6901063294dfc418033492.jpg',
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/fb/b0/d0/fbb0d0907d4df966cf657e4029f2d8bb.jpg',
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/65/19/7b/65197bb001fafc737822106cf7798b14.jpg',
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/67/99/23/67992321f0e802b1d76343aa15d8397a.png',
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-539fa03332efc4b9aaffde7ede3e443f.gif',
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/4b/45/ce/4b45ce6e250a049c9aef09d16fd5989d.jpg',
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