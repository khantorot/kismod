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
var workBoxes = document.querySelectorAll('.workBoxes a');

document.addEventListener('DOMContentLoaded', function(){
	setTimeout(function(){
		document.querySelector('.work h2').classList.add('element_show');
		document.querySelector('.work p').classList.add('element_show');
	}, 500);
	setTimeout(function() {
		workBoxes[0].classList.add('element_show');
	}, 1500);
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
	 	if(scrolled >= 4444){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
	 	if(scrolled >= 350){
	 		workBoxes[1].classList.add('element_show');
	 	}  
	 	if(scrolled >= 750){
	 		workBoxes[2].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1150){
	 		workBoxes[3].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1550){
	 		workBoxes[4].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1950){
	 		workBoxes[5].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2350){
	 		workBoxes[6].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2750){
	 		workBoxes[7].classList.add('element_show');
	 	} 
	 	if(scrolled >= 3150){
	 		workBoxes[8].classList.add('element_show');
	 	} 
	 	if(scrolled >= 3550){
	 		workBoxes[9].classList.add('element_show');
	 	} 
	 	if(scrolled >= 3950){
	 		workBoxes[10].classList.add('element_show');
	 	}
 	}else{
	 	if(scrolled >= 3400){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
	 	if(scrolled >= 200){
	 		workBoxes[1].classList.add('element_show');
	 	}  
	 	if(scrolled >= 500){
	 		workBoxes[2].classList.add('element_show');
	 	} 
	 	if(scrolled >= 800){
	 		workBoxes[3].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1100){
	 		workBoxes[4].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1400){
	 		workBoxes[5].classList.add('element_show');
	 	} 
	 	if(scrolled >= 1700){
	 		workBoxes[6].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2000){
	 		workBoxes[7].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2300){
	 		workBoxes[8].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2600){
	 		workBoxes[9].classList.add('element_show');
	 	} 
	 	if(scrolled >= 2900){
	 		workBoxes[10].classList.add('element_show');
	 	}
 	}
 
}