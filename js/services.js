var social = document.querySelectorAll('.social a');
var socialSpan = document.querySelector('.social span');
social[0].onmouseover = function() {
	socialSpan.style.top = 15 + 'px';
}
social[1].onmouseover = function() {
	socialSpan.style.top = 46 + 'px';
}
social[2].onmouseover = function() {
	socialSpan.style.top = 80 + 'px';
}
social[3].onmouseover = function() {
	socialSpan.style.top = 112 + 'px';
}

window.onload = function(){
	setTimeout( function(){
		document.querySelector('.menu').classList.add('menu_show');
	}, 1500);
	setTimeout( function(){
		document.querySelector('.logo').classList.add('logo_show');
		
		for(var i=0; i<social.length; i++){
			social[i].classList.add('social_show');
		}		
	}, 1000);
};


document.addEventListener('DOMContentLoaded', function(){
	setTimeout(function(){
		document.querySelector('.mainText').classList.add('mainText_show');
	}, 500);
});


var aboutText = document.querySelectorAll('.aboutUs h4');
var blocks = document.querySelectorAll('.blocks div');
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
 		if(scrolled >= 2600){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
	 	if(scrolled >= 200){
	 		document.querySelector('.aboutUs').classList.add('aboutUs_show');
	 	}
	 	if(scrolled >= 600){
	 		blocks[0].classList.add('block_show');
	 	}
	 	if(scrolled >= 1300){
	 		blocks[1].classList.add('block_show');
	 	}
	 	if(scrolled >= 2000){
	 		blocks[2].classList.add('block_show');
	 	}

 	}else{
	 	if(scrolled >= 2600){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
	 	if(scrolled >= 250){
	 		document.querySelector('.aboutUs').classList.add('aboutUs_show');
	 	}
	 	if(scrolled >= 1000){
	 		blocks[0].classList.add('block_show');
	 	}
	 	if(scrolled >= 1500){
	 		blocks[1].classList.add('block_show');
	 	}
	 	if(scrolled >= 2000){
	 		blocks[2].classList.add('block_show');
	 	}
 	}

}