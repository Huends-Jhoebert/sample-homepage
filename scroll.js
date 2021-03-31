
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	  mybutton.style.display = "block";
	} 
	else {
	  mybutton.style.display = "none";
	}
  }

 mybutton.addEventListener('click', topFunction);
 
 function topFunction(){

	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }