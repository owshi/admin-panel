$(document).ready(function(){
	$('.minimize').click(function(){
		$(this).parent().parent().find('.toggle').fadeToggle();
	});
	$('.close').click(function(){
		$(this).parent().parent().fadeOut();
	});
});