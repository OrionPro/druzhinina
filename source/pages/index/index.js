import common from '../../js/common';

require("../../libs/libs").owl_carousel();
//import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

import animate from '../../js/animate';
import App from '../../js/react';

$(document).ready(function () {

	// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		const ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Edge/) > 0) return 'Edge';
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Safari") {
		$('.authors-online-courses .authors-online-courses__item-txt').css("height", "430px");
		$('.conference-for-internet-marketing .conference-for-internet-marketing__text').css("height", "871px");
		$('.upcoming-events .upcoming-events__item-txt').css("height", "380px");
	}
	// $(".sticky").sticky({
	// 	topSpacing: 0,
	// 	widthFromWrapper: false
	// });

	// пример анимации через библиотечку animat (но лучше анимировать через GSAP)
	//$('.our_advantages h2').animated("fadeInUp");
	// инициализация tooltipster
	if (window.matchMedia("(min-width: 992px)").matches) {
		// $(".header__modal a").tooltipster({
		// 	plugins: ['follower'],
		// 	theme: 'tooltipster-shadow'
		// });
	}
	//  Активация слайдера
	$(".reviews-of-my-clients__slider .owl-carousel").owlCarousel({
		loop: true,
		items: 2,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 2
			}
		}
	});
	$(".my-clients__slider .owl-carousel").owlCarousel({
		loop: true,
		items: 3,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	// Ограничиваем количество симоволов в параграфе
	$.each($(".recent-blog-posts .recent-blog-posts__item-txt p"), function () {
		var self = $(this).text();
		var str = self.slice(0, 165); //например макс 100 символов
		var a = str.split(' ');
		a.splice(a.length - 1, 1);
		str = a.join(' ');
		if (self.length >= 165) {
			$(this).html(str + ' ...');
		}
	});

});

$(window).resize(function () {

});

$(window).scroll(function () {

});

setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);