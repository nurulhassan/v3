jQuery(function($) {

	
	
	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	// close hamburger menu after click a
$( '.navbar-nav li a' ).on("click", function(){
  $('#hamburger-menu').click();
});


	//Initiat WOW JS
	new WOW().init();
});