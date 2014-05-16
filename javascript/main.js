/* CURRENTLY IN: javascript/main.js */
     
$('.select-petersfield').on('click',function(){
	$('.chelsea').slideToggle();
	$('.petersfield').slideToggle();
	//inject html iframe due to an issue with display:none and interfering with the google map iframe dimensions 
	$('.map-petersfield').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1545348836753!2d-73.98148300000004!3d40.73662499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590aecc90547%3A0x1ce08f4efba3ec40!2sPushcart+Coffee!5e0!3m2!1sen!2sus!4v1400260848433" width="100%" height="600" frameborder="0" style="border:0"></iframe>');
})

$('.select-chelsea').on('click',function(){
	$('.petersfield').slideToggle();
	$('.chelsea').slideToggle();
});

$('#navList li a').on('click',function(e){
	//prevents any defualt actions
	e.preventDefault()
	$('html, body').animate({
		//need to set the text to lowercase to match the id name
		scrollTop: $('#' + $(this).text()).offset().top - 65
	}, 1000);
});