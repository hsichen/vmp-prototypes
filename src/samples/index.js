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

// mock 'db' of urls - stored in obj literal so it can be directly used on the frontend
var samples = {
	'160x600' : [
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/9a/89/32/9a89327a5e337ad461996a6b23f7880c.gif'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-2f542e2a88220ea8f8781b65d415450d.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-a5e4e91ab7c0cc9b029aaca04817b9be.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-6a398e1278b04087b5bcd54c2e49c1f6.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/staging/1-md5-231126485b1f7efcba5df17ccde70987.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-37b107aac057b1520381063080b85864.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-b8dea3c76d113b0a4c074f6d8593a0f1.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/b3/31/25/b33125a3a72e6a004f2c6e1549356ca1.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-6a9925b3aaed79e4a5cfa221cfc3d224.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/8a/6b/3b/8a6b3b9372aad55ae1a155a3ca294336.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-ff9e4f240466649bae9ce5be4cfbc9be.png'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/staging/1-md5-04a86e7ea97e30aa8c234d54e041029b.jpg'
		},
	],
	'300x250' : [
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/3b/00/5d/3b005da95b6901063294dfc418033492.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/fb/b0/d0/fbb0d0907d4df966cf657e4029f2d8bb.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/65/19/7b/65197bb001fafc737822106cf7798b14.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/67/99/23/67992321f0e802b1d76343aa15d8397a.png'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-539fa03332efc4b9aaffde7ede3e443f.gif'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/4b/45/ce/4b45ce6e250a049c9aef09d16fd5989d.jpg'
		},		
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/e1/be/71/e1be71edb72c773d8f9e810bc6326930.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-6fccbb9e7d0bd950ce3745d056fa1c09.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/79/91/0a/79910adf7f7c1fc61da4118f3aa18287.png'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/9c/0b/76/9c0b76f74955a21b63c89aa5d772218c.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-f5715c3c49dc664221786ad314ee1714.jpg'
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
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-8505c1e0fb2367f36c37a5aba6faabe7.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-3917b5283783a54f4707ded40b9ccdf7.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-daf803557fe064d3058d504df0aea090.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-a3d492b7a637b633f504bd6eadf31c52.gif'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-88279613dc5e7a1496a492785bda2523.jpg'
		},
		{
			'url': 'd37p6u34ymiu6v.cloudfront.net/1-md5-6cb967d41501df0e2613977bc1854ab1.gif'
		},
	],
	'300x600' : [
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/1-md5-062d99c89dad3b8dcfb3aad0b27b11f3.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/db/13/4c/db134c6373d0efac86b9f5ea694da4ee.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/1-md5-d8f8bd8c4cc53dbb868e571ce5dd4ca4.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/70/f6/a1/70f6a16022704014409213f0d9a98ff0.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/61/aa/8c/61aa8c121a27fa8191bf1d09c8908893.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/d6/36/c8/d636c8e4ed4d0ab4c9728636f4383772.png'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/a7/57/08/a75708bec7023aeaf44b3766e4768616.gif'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/staging/1-md5-575d35bacb760dbed0aa3b22f965532c.png'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/11/78/e4/1178e401175197b573a7aac00f275ada.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/1-md5-7d4eaf291f3c638111ef800628203db5.png'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/1-md5-9d54e67f4141ea7999247476a2f0ef00.jpg'
		},
		{
			'url' : 'd37p6u34ymiu6v.cloudfront.net/1-md5-f2010aaca722b93ec3b3caf3959ff5ec.png'
		},
	],
};
