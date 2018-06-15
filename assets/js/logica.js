$(window).load(function(){

	$(window).scroll(function(){
		var ancho = $(window).width();
		var scroll = $(window).scrollTop();
		console.log(scroll);
		
		if(ancho>1170){
			if(scroll>480){
				$("#boxcatalogo").addClass("animated");
				$("#boxcatalogo").addClass("fadeInDown");
			}

			if(scroll>780){
				$("#box1").addClass('animated');
				$("#box1").addClass('fadeInDown');
				$("#box2").addClass('animated');
				$("#box2").addClass('fadeInDown');
			}

			if(scroll>1280){
				$("#box3").addClass('animated');
				$("#box3").addClass('fadeInDown');
				$("#box4").addClass('animated');
				$("#box4").addClass('fadeInDown');
			}

			if(scroll>1580){
				$("#box5").addClass('animated');
				$("#box5").addClass('fadeInDown');
				$("#box6").addClass('animated');
				$("#box6").addClass('fadeInDown');
			}
		}
	})


})