import common from '../../js/common';

require("../../libs/libs").owl_carousel();
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

import animate from '../../js/animate';
import App from '../../js/react';

$(document).ready(function () {
	$("body").addClass("index ink-transition");
	// Убираем рекламный блок top-shares
	$(".top-shares__txt>a").on("click", function (e) {
		e.preventDefault();
		$(".top-shares").hide();
	});


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
	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");
});

$(window).resize(function () {

});

$(window).scroll(function () {

});

setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);