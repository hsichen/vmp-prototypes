var $ = require('jquery');
var samples = require('./samples');

// local vars
var banner, openHandle;
var windowWidth;
var windowHeight;
var scrollThreshold;	

// constants	
var CLOSE_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNDkzNTUyOS0zOGQ5LTQyODMtOWJmOS1hZGMyMWVmNmQ0ZjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg3NkEzQTc4MTgyMTFFNzg2OTBCQzZCM0IxNDJGQjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg3NkEzQTY4MTgyMTFFNzg2OTBCQzZCM0IxNDJGQjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRhN2U3NjRkLTJhYTgtNDYxZS1iMTI1LTAzNzI0NDc1NjdiMSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI2MDZmOGE4LWJlYmItMTE3YS1i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";
var INFO_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNDkzNTUyOS0zOGQ5LTQyODMtOWJmOS1hZGMyMWVmNmQ0ZjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQzNkJFOEM4MTgzMTFFNzg2OTBCQzZCM0IxNDJGQjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQzNkJFOEI4MTgzMTFFNzg2OTBCQzZCM0IxNDJGQjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRhN2U3NjRkLTJhYTgtNDYxZS1iMTI1LTAzNzI0NDc1NjdiMSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI2MDZmOGE4LWJlYmItMTE3YS1i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";

function InViewBanner(configs){
	if(!configs) {
		throw new Error('configs are required');
	}

	var self = this;
	var imageUrl = samples.get(configs.width, configs.height);
	windowWidth = $(top).width();
	windowHeight = $(top).height();
	scrollThreshold = configs.scrollThreshold || 100;
	var initialPositionFraction = configs.initialPosition || 0.5;	// percentage of top-portion of banner in view

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
			'top': (windowHeight - (initialPositionFraction * configs.height)) + "px",
			'left': ((windowWidth - configs.width) / 2 ) + "px",
			'overflow': 'hidden'
		});


	banner.append($('<img/>').attr('src', CLOSE_IMAGE).css({
			'float': 'right',
			'width': '20px',
			'height' : '20px',
			'cursor' : 'pointer'
		}).click(function() {
			self.hide();
		})
	);
	banner.append($('<img/>').attr('src', INFO_IMAGE).css({
			'float': 'right',
			'width': '20px',
			'height' : '20px'
		})
	);
	banner.append($('<img/>').attr('src', '//' + imageUrl));

	// scroll listener
	$(top).scroll(showByScrollFractionAndThreshold);

	console.log('InViewBanner init on window dimensions of', windowWidth, windowHeight);

	openHandle = $('<div></div>')
		.css({
			'background-color': 'cyan',
			'border': '1px solid gray',
			'border-radius': '5px',
			'width': configs.width,
			'height': '40px',
			'z-index' : 5000,
			'padding': 0,
			'position': "fixed",
			'top': (windowHeight - 40) + "px",
			'left': ((windowWidth - configs.width) / 2 ) + "px",
			'cursor': 'pointer',
			'overflow': 'hidden'
		})
		.html('Click to open InView Banner')
		.click(showByScrollFractionAndThreshold)
		.hide();

	function showByScrollFractionAndThreshold() {
		var scrollTop = $(top).scrollTop();

		if(scrollTop <= scrollThreshold) {
			return;
		}

		var scrollDiff = (scrollTop - scrollThreshold);
		var revealAmount = (initialPositionFraction * configs.height + scrollDiff);

		banner.css({top: (windowHeight - Math.min(revealAmount, configs.height + 16)) + "px"});

		if(revealAmount >= (configs.height + 16)) {
			setTimeout(function(){
				self.hide();
			}, 2000);
		}
	}
}

function isAttached() {
	return banner && $.contains(top.document, banner[0]);
}

function isInFullView() {
	return windowHeight - banner.css('top') >= banner.height();
}

module.exports = InViewBanner;
InViewBanner.prototype.constructor = InViewBanner;


InViewBanner.prototype.hide = function () {
	banner.animate({top: windowHeight+1},
		function(){
			openHandle.fadeIn();

		});
};

InViewBanner.prototype.showInitial = function () {
	if(!isAttached()) {
		$(top.document.body).append(banner);
		$(top.document.body).append(openHandle);
	}
}