// подключение animate.js
require("../libs/libs").greenSock();
require("../libs/libs").DrawSVG();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.tl1.pause();
	}

	description() {
		this.tl1.staggerFrom('.header__nav ul li', 1, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.2, '+=0.5')
			.staggerFrom('.top-anim', 1.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.4, '+=0.1');

	}

	activeSection(section, startTop = 0, startBotton = 0) {
		section = '.' + section;
		if ($(section).offset() !== undefined) {
			var topPosition = $(section).offset().top - startTop,
				bottomPosition = $(section).offset().top + $(section).height() - startBotton;
			if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
				return true;
			}
		}
	}

	play() {
		if (this.activeSection('header',500)) {
			this.tl1.resume();
		}
	}
}

var anim = new Animation;

$(window).scroll(function() {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {

	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}

});
