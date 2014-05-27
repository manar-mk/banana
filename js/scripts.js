$(document).ready(function() {
	$('h1').click(function(event) {
		clearClasses();
		$('body').addClass($(this).attr('id'));
		$('.js-menu').addClass('menu_show');
	});
	$('.js-menu').click(function(event) {
		clearClasses();
		$('.js-menu').removeClass('menu_show');
	});
	$('.js-work').click(function(event) {
		$('.js-work').removeClass('works__item_active');
		$(this).addClass('works__item_active');
		$('.js-description').removeClass('description__item_show');
		$('#'+$(this).data('link')).addClass('description__item_show');
	});
	function clearClasses(){
		$('body').removeClass('about');
		$('body').removeClass('price');
		$('body').removeClass('contacts');
		$('body').removeClass('works');
	}

});
$('body').on({
'mousewheel': function(e) {
    e.preventDefault();
    e.stopPropagation();
    }
});