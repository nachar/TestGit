$( document ).ready(function() {
	resizeListener ();
	clickImg();
});

function clickImg(){
	$('.shape').click(function(){
		$('body').addClass('noScroll');
		var srcImg = $('img', this).attr('src');
		var altImg = $('img', this).attr('alt');
		$("<div class='row'><div class='fullScreenImg centerDiv'><h1 class='text-center'>"+altImg+"</h1><div class='fullScreenImgContent'><img src="+srcImg+" class='img-responsive centerDivContenido'></div><div class='quit'><img src='img/x.png' class='img-responsive'></div></div></div>").insertAfter(".pageContainer");
		centerDiv();
		clickX();
		scapeKey();
	});
}
function clickX (){
	$('.quit').click(function(){
		closeScreen()
	});
}
function scapeKey() {
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			closeScreen() 
		}
	});
}
function closeScreen(){
	$('.fullScreenImg').addClass('opacityCero');

		setTimeout(
		function() {
			$('body').removeClass('noScroll');
			$('.fullScreenImg').remove(); 
		}, 500);
}
function resizeListener (){
	$(window).resize(function() {
		centerDiv();
	});
}
function centerDiv (){
	setTimeout(
		function() {
			$('.centerDiv').each(function() {
				var contenidoAlto = $(".centerDivContenido", this).height();
				var divAlto = $(window).height();
				var pageHeaderMarginTop = ((divAlto - contenidoAlto) / 2) - 40;

				$(".centerDivContenido", this).css("marginTop", pageHeaderMarginTop+"px");
				$(".centerDivContenido", this).css("opacity", "1");
				
			});
		}, 200);
}







