window.onload = function(){
	setTimeout(function(){
		document.querySelector('.mainText').classList.add('mainText_show');
	}, 500);
	setTimeout( function(){
		document.querySelector('.menu').classList.add('menu_show');
		document.querySelector('.mainText a').classList.add('linkline_show');
	}, 1500);
	setTimeout( function(){
		document.querySelector('.logo').classList.add('logo_show');
		for(var i=0; i<social.length; i++){
			social[i].classList.add('social_show');
		}		
	}, 1000);
};


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


var boxes = document.querySelectorAll('.boxesOfServices a');
var bg1  = document.querySelector('.bg1');
var bg2  = document.querySelector('.bg2');
var bg3  = document.querySelector('.bg3');


boxes[0].onmouseover = function(){
	bg1.classList.add('bg_active');
}
boxes[0].onmouseout = function(){
	bg1.classList.remove('bg_active');
}
boxes[1].onmouseover = function(){
	bg2.classList.add('bg_active');
}
boxes[1].onmouseout = function(){
	bg2.classList.remove('bg_active');
}
boxes[2].onmouseover = function(){
	bg3.classList.add('bg_active');
}
boxes[2].onmouseout = function(){
	bg3.classList.remove('bg_active');
}


var workBoxes = document.querySelectorAll('.workBoxes a');
var partimg = document.querySelectorAll('.partimg img');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
	 	if(scrolled >= 250){
	 		document.querySelector('.aboutUs').classList.add('aboutUs_show');
	 	}
	 	if(scrolled >= 790){
	 		document.querySelector('.aboutUs a').classList.add('linkline_show');
	 	} 
	 	if(scrolled >= 910){
	 		document.querySelector('.team h2').classList.add('element_show');
	 	} 
	 	if(scrolled >= 1111){
	 		document.querySelector('.boxofteam').classList.add('boxofteam_show');
	 	} 
	 	if(scrolled >= 1550){
	 		document.querySelector('.work h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 1650){
	 		document.querySelector('.work p').classList.add('element_show');
	 	}
	 	if(scrolled >= 1700){
	 		workBoxes[0].classList.add('element_show');
	 	}
	 	if(scrolled >= 2100){
	 		workBoxes[1].classList.add('element_show');
	 	}
	 	if(scrolled >= 2500){
	 		workBoxes[2].classList.add('element_show');
	 	}
	 	if(scrolled >= 2800){
	 		document.querySelector('.work .linkline').classList.add('linkline_show');
	 	}
	 	if(scrolled >= 3050){
	 		document.querySelector('.services h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 3130){
	 		document.querySelector('.services p').classList.add('element_show');
	 	}
	 	if(scrolled >= 3250){
	 		document.querySelector('.boxesOfServices').classList.add('boxesOfServices_show');
	 	}
		if(scrolled >= 4000){
	 		document.querySelector('.card').classList.add('card_show');
	 	}
		if(scrolled >= 4150){
	 		document.querySelector('.partners h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 4250){
	 		document.querySelector('.partners p').classList.add('element_show');
	 	}
	 	if(scrolled >= 4400){
	 		partimg[0].classList.add('element_show');
	 		partimg[1].classList.add('element_show');
	 	}
	 	if(scrolled >= 4490){
	 		partimg[2].classList.add('element_show');
	 		partimg[3].classList.add('element_show');
	 	}
	 	if(scrolled >= 4580){
	 		partimg[4].classList.add('element_show');
	 		partimg[5].classList.add('element_show');
	 	}
	 	if(scrolled >= 4670){
	 		partimg[6].classList.add('element_show');
	 		partimg[7].classList.add('element_show');
	 	}
	 	if(scrolled >= 4790){
	 		document.querySelector('.partners .linkline').classList.add('linkline_show');
	 	}
	 	if(scrolled >= 5150){
	 		document.querySelector('.bigtext').classList.add('bigtext_show');
	 	}
	 	if(scrolled >= 5600){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
 	}else{
	 	if(scrolled >= 250){
	 		document.querySelector('.aboutUs').classList.add('aboutUs_show');
	 	}
	 	if(scrolled >= 650){
	 		document.querySelector('.aboutUs a').classList.add('linkline_show');
	 	} 
	 	if(scrolled >= 940){
	 		document.querySelector('.team h2').classList.add('element_show');
	 	} 
	 	if(scrolled >= 980){
	 		document.querySelector('.boxofteam').classList.add('boxofteam_show');
	 	} 
	 	if(scrolled >= 1550){
	 		document.querySelector('.work h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 1650){
	 		document.querySelector('.work p').classList.add('element_show');
	 	}
	 	if(scrolled >= 1750){
	 		workBoxes[0].classList.add('element_show');
	 	}
	 	if(scrolled >= 2550){
	 		workBoxes[1].classList.add('element_show');
	 	}
	 	if(scrolled >= 3050){
	 		workBoxes[2].classList.add('element_show');
	 	}
	 	if(scrolled >= 3580){
	 		document.querySelector('.work .linkline').classList.add('linkline_show');
	 	}
	 	if(scrolled >= 3880){
	 		document.querySelector('.services h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 4000){
	 		document.querySelector('.services p').classList.add('element_show');
	 	}
	 	if(scrolled >= 4100){
	 		document.querySelector('.boxesOfServices').classList.add('boxesOfServices_show');
	 	}
		if(scrolled >= 4800){
	 		document.querySelector('.card').classList.add('card_show');
	 	}
		if(scrolled >= 5200){
	 		document.querySelector('.partners h2').classList.add('element_show');
	 	}
	 	if(scrolled >= 5300){
	 		document.querySelector('.partners p').classList.add('element_show');
	 	}
	 	if(scrolled >= 5450){
	 		partimg[0].classList.add('element_show');
	 		partimg[1].classList.add('element_show');
	 		partimg[2].classList.add('element_show');
	 		partimg[3].classList.add('element_show');
	 	}
	 	 if(scrolled >= 5650){
	 		partimg[4].classList.add('element_show');
	 		partimg[5].classList.add('element_show');
	 		partimg[6].classList.add('element_show');
	 		partimg[7].classList.add('element_show');
	 	}
	 	if(scrolled >= 5800){
	 		document.querySelector('.partners .linkline').classList.add('linkline_show');
	 	}
	 	if(scrolled >= 6400){
	 		document.querySelector('.bigtext').classList.add('bigtext_show');
	 	}
	 	if(scrolled >= 7300){
	 		document.querySelector('footer').classList.add('footer_show');
	 	}
 	}
};

document.querySelector('.bigtext p').onclick = function(e){
	document.querySelector('.bigtext').classList.toggle('bigtext_active');
}