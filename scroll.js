
var mybutton = document.getElementById("myBtn");
var navBar = document.querySelector('.navbar-2');
navBar.style.display = 'none';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	  navBar.style.display = "flex";
	  navBar.style.position = 'fixed';
	  navBar.style.width = '100%';
	  navBar.style.top = 0;
	  mybutton.style.display = "block";
	  navBar.style.backgroundColor = '#fff';
	} else {
	  navBar.style.display = "none";
	  mybutton.style.display = "none";
	}
  }

 mybutton.addEventListener('click', topFunction);
 
 function topFunction(){

	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }