// WOW JS Initialitation
new WOW().init();
$(document).ready(function() {  
	//NieScroll JS
    $("html").niceScroll({
    	cursorcolor: "#e77e4d", // change cursor color in hex
	    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
	    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
	    cursorwidth: "7px", // cursor width in pixel (you can also write "5px")
	    cursorborder: "0", // css definition for cursor border
	    cursorborderradius: "0px",
    	zindex:999999,
    	autohidemode: false,
    });
});
