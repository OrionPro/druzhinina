
import common from '../../js/common';

import './bize.sass';
import '../../pages/bize/bize.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import animate from '../../js/animate_bize';

console.log('in bize.js');

$(document).ready( function() {

});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);;