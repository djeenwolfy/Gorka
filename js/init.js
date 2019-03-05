(function($){
  $(function(){
  	 $('.slider').slider({
  	 	interval:3500,
  	 	height: 642
  	 });
    $('.sidenav').sidenav();
    VK.Widgets.Group("vk_groups", {mode: 1, width: "400"}, 48288021);
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {

		$( '#mi-slider' ).catslider();

	});