window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('navbar-animation').style.padding = '10px 10px';
	} else {
		document.getElementById('navbar-animation').style.padding = '25px 10px';
	}
}
