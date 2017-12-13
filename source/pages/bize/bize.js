
import common from '../../js/common';

import './bize.sass';
import '../../pages/bize/bize.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import animate from '../../js/animate_bize';


$(document).ready( function() {
	function dateTimer() {
		const now = new Date().getTime();
		const date1 = new Date(2017, 10, 30).getTime();
		const date2 = new Date(2017, 11, 15).getTime();
		const date3 = new Date(2017, 11, 30).getTime();
		const date4 = new Date(2018, 0, 15).getTime();

		if(date1 < now) {
			$('.first-date .current').addClass('not-current');
		}
		if(date2 < now) {
			$('.second-date .current').addClass('not-current');
		}
		if(date3 < now) {
			$('.third-date .current').addClass('not-current');
		}
		if(date4 < now) {
			$('.fourth-date .current').addClass('not-current');
		}
	}
	dateTimer();
});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);