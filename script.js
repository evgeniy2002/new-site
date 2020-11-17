function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();


$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active')
		$('body').toggleClass('lock')
	})
})
$(document).ready(function(){
	$('.about_row_slider-footer').slick({
		adaptiveHeight:true,
		slidesToShow:4,
		variableWidth: true,
		responsive:[
		{
			breakpoint: 767,
			settings: {
				slidesToShow:3,
				variableWidth: true
			},
			breakpoint: 660,
			settings: {
				slidesToShow:2,
				variableWidth: false
			},
			breakpoint: 587,
			settings: {
				slidesToShow:2,
				
			},
			breakpoint: 464,
			settings: {
				slidesToShow:1,
				variableWidth: true
			}
		
		}
		]
	})
})
$(document).ready(function(){
	$('.brands_content').slick({
		adaptiveHeight:true,
		arrows:false,
		dots:true
	})
})
