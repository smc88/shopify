$(document).ready(function() {
	//Lightbox -----------------------
	$("a[rel='colorbox']").colorbox();
	//flexslider -----------------
  // $('.flexslider').flexslider({
  //  animation: "slide",
  //  slideshow: "true",
  //  controlsContainer: ".flex-container"
  // });
  
  $('.flexslider').flexslider({
    controlNav: false, 
    animation: "slide", 
    slideshowSpeed: 7*1000 
    }).hover(function(){ 
      $('.flex-direction-nav').fadeIn();
    }, function(){$('.flex-direction-nav').fadeOut();});
});


