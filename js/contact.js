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

window.onload =  function(){
	setTimeout( function(){
		document.querySelector('form').classList.add('form_show');
	}, 500);
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

document.querySelector('button').onclick = function(){
	alert('ваше дерьмовое сообщение отправлено!');
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
 		if(scrolled >= 100){
 			document.querySelector('.checkboxes h3').classList.add('element_show');
 		}
 		if(scrolled >= 250){
 			document.querySelector('.checkboxes').classList.add('checkboxes_show');
 		}
 		if(scrolled >= 450){
 			document.querySelector('.select').classList.add('element_show');
 		}
 		if(scrolled >= 720){
 			document.querySelector('.textarea').classList.add('element_show');
 		}
 		if(scrolled >= 850){
 			document.querySelector('button').classList.add('button_show');
 		}
 		if(scrolled >= 1100){
 			document.querySelector('footer').classList.add('footer_show');
 		}
 	}else{
 		if(scrolled >= 350){
 			document.querySelector('.checkboxes h3').classList.add('element_show');
 		}
 		if(scrolled >= 430){
 			document.querySelector('.checkboxes').classList.add('checkboxes_show');
 		}
 		if(scrolled >= 700){
 			document.querySelector('.select').classList.add('element_show');
 		}
 		if(scrolled >= 900){
 			document.querySelector('.textarea').classList.add('element_show');
 		}
 		if(scrolled >= 1160){
 			document.querySelector('button').classList.add('button_show');
 		}
 		if(scrolled >= 1400){
 			document.querySelector('footer').classList.add('footer_show');
 		}
 	}
};