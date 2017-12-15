require("../libs/libs").jqueryui();
require("../libs/libs").matchMedia();
require("../libs/libs").waypoint();
require("../libs/libs").Animate_css();
require("../libs/libs").animate_modal_js();
require("../libs/libs").magnific_popup();
require("../libs/libs").tooltipster_follower();
require("../libs/libs").tooltipster();
require("../libs/libs").jqueryValidation();
require("../libs/libs").input_mask();
require("../libs/libs").sticky();
import validation from '../js/validation';
import modal from '../js/modal';

import '../sass/main.sass';
import functions from '../js/_functions.js';
// табы tabs
function tabs(obj) {
	const buttons = document.querySelectorAll(obj.btn);
	const bodyTabs = document.querySelectorAll(obj.tabsBody);

	let func = function(){
		"use strict";
		for( let i = buttons.length; i--; ){
			buttons[i].classList.remove(obj.classBtn);
			bodyTabs[i].classList.remove(obj.classBody);
		}
		this.classList.add(obj.classBtn);
		let item = [].indexOf.call(buttons,this);
		bodyTabs[item].classList.add(obj.classBody)
	};

	[].forEach.call(buttons,item => item.addEventListener('click',func));
}

$(document).ready(function () {
	// Убираем рекламный блок top-shares
	$(".top-shares__txt .top-shares__txt-inner>a").on("click", function (e) {
		e.preventDefault();
		$(".top-shares").hide();
	});
	function getCookie(data) {
		var cookieArr = document.cookie.split(';');
		for (var key in cookieArr) {
			return cookieArr[key] === data
		}
		//	Object.values
		// for (const val of Object.values(cookieArr)) {
		// 	return val === data
		// }
	}

	function setCookie(data){
		document.cookie = data;
	}
	// 3600 - это 3 600 000 разделённые на 1000 (для удобства ,чтобы потом легче было понимать сколько часов), т.е. ЧАС в миллисекундах, потом просто умножаем нужное количество тысяч (т.е. часов 24 000 это 24 часа в итоге)
	function getExitModal(){
		var date = new Date(new Date().getTime() + 3600 * 24000);
		$(document).mousemove(function(e) {
			var topPosition = window.pageYOffset || document.documentElement.scrollTop;

			if (e.pageY  <= topPosition + 10 && !getCookie('modal=attended') && !$('body').hasClass('modal-attended')) {

				setCookie('modal=attended; path=/; expires=' + date.toUTCString());
				$('body').addClass('modal-attended');
				$('.hide-link-are-you-leaving').trigger('click');
				// Версия вызова модального окна через присвоение mainClass
				// $.magnificPopup.open({
				// 	items: {
				// 		src: '#popup4',
				// 		type: 'inline'
				// 	},
				// 	removalDelay: 200,
				// 	mainClass: 'mfp-fade',
				// 	callbacks: {
				// 		beforeOpen: function () {
				// 			this.st.mainClass = 'mfp-fade';
				// 			$('input:not("[type=submit], [type=hidden], .select2-search__field")').removeClass('tooltipster-show').tooltipster('close');
				// 		},
				// 		close: function () {
				// 			$('.white-popup .input_wrap i').hide();
				// 			if (get_name_browser() == "Google Chrome") {
				// 				$("html").removeClass("modal");
				// 			}
				// 			$('input:not("[type=submit], [type=hidden], .select2-search__field")').removeClass('tooltipster-show').tooltipster('close');
				// 			// Это код закрытия эффекта красивого при открытии и закрытии модалки
				// 			$(".cd-transition-layer").addClass("closing"), $("#popup").removeClass("visible"), $(".cd-transition-layer").children().one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
				// 				$(".cd-transition-layer").removeClass("closing opening visible"), $(".cd-transition-layer").children().off("webkitAnimationEnd oanimationend msAnimationEnd animationend")
				// 			})
				// 		},
				// 		open: function () {
				// 			$(".mfp-close-btn-in .mfp-close").tooltipster({
				// 				theme: 'tooltipster-light'
				// 			});
				// 		}
				// 	},
				// 	closeOnBgClick: true,
				// 	closeOnContentClick: false,
				// 	closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fa fa-close"></i></button>',
				// 	tClose: 'Закрыть (Esc)',
				// });
			}
		});
	}
	getExitModal();
	// вызов tabs
	tabs({
		btn:'.tabs-items-wrap > .tabs-item',
		tabsBody:'.tabs-wrap',
		classBody:'active',
		classBtn: 'active'
	});
	tabs({
		btn:'.tabs-items-wrap-inner > .tabs-item',
		tabsBody:'.tabs-wrap-inner',
		classBody: 'active',
		classBtn:'active'
	});
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

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Edge") {
		$('.check i, .radio i').css("margin-top", "2px");
		$('.check i, .radio i').css("margin-top", "2px");
	}
	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer") {
		$('.department-for-rent .row').css("height", "550px");
	}
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	$(".scroll_to").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $("#" + anchor.data('scroll')).offset().top
	    }, 500);
	    return false;
	});

	//  Активация слайдера
	// $(".owl-carousel").owlCarousel({
	//     loop: true,
	//     items: 1,
	//     dots: true
	// });

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });
	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");

});

$(window).resize(function () {

});

$(window).scroll(function () {

});