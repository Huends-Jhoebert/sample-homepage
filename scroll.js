
var navBar = document.querySelector('.navbar-2');

navBar.style.display = 'none';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
	  navBar.style.display = "flex";
	  navBar.style.position = 'fixed';
	  navBar.style.width = '100%';
	  navBar.style.top = 0;
	} else {
	  navBar.style.display = "none";
	}
  }