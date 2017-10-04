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
	],
	'728x90' : [
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/a2/ea/54/a2ea54666abf1ab09d9dc741a5953bfa.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/8e/26/a2/8e26a2520661124779b024143a667071.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1e/0e/0c/1e0e0c983da113f634f9536a6f65ff86.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-c63e6ee48b7cea45fc6e08c5775dda7c.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-ee45b1aa24a8dec7fb84f767a67a4ca5.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-8e3b417b1bdb23badc8534b2bcfa6cab.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/10/ab/a3/10aba339701457b2f9538c4a8a671265.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/30/cb/cf/30cbcf4082c761a2aa2c96f7793e3130.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/83/ab/13/83ab13d2267eb11f0db1a48790455baf.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/07/59/2f/07592f50d55f328d9de10ea70b19a8dc.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/47/ab/36/47ab36b15c99e0c6f618b87c2bdb9e54.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/dc/8b/e2/dc8be29fe45b32d3664675c403fded91.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-84e8a9953ca01f91e95410b14804243a.jpg'
		},
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