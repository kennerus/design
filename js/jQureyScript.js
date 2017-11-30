$(document).ready(function() {

		//header mob menu
		if (parseInt($(window).width()) < 576) {
			$('.header__nav-mobile').on('click', function() {
				$('.header__nav-desktop').addClass('expand');
				$('.header__nav-desktop').fadeIn(500);
			});

			$('.header__nav-close, .scroll').on('click', function() {
				$('.header__nav-desktop').fadeOut(500, function() {
					$('.header__nav-desktop').removeClass('expand');
				});
			})
		}
		

		// fancybox modal

		$("[data-fancybox]").fancybox({
			arrows : true,
			buttons : [
		        'thumbs',
		        'close'
		    ],
		    idleTime: false
		});

		$('[data-fancybox]').click(function() {
			setTimeout(function() {
				$('.portfolio__block-link').fadeIn(400);
				$('.portfolio__block-link').removeClass('hide');
			}, 3000);
		});

		$(document).on('click', '.button-close', function () {
			$('.portfolio__block-link').fadeOut('400');
		})

		// smooth scroll 

		$(".scroll").on("click", function(e){
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 777);
	        e.preventDefault();
	        return false;
	    });

		$('.required, #tel').on('change', function() {
			$(this).toggleClass('validInput');
		})


		//validation

		$('#form').validate({
			rules: {
				name: "required",
			    email: {
			        required: true,
			        email: true
			    },
		    },
			messages: {
				name: "Введите Ваше имя",
		        email: {
		        	required: "Введите Ваш e-mail"
		        }
			},
		    submitHandler: function(form) {
			    form.submit(function(){
			    	$('.required').addClass('validInput');
			    });
			},
			errorElement: "span", // wrap error elements in span not label
			invalidHandler: function(event, validator){ // add aria-invalid to el with error
				$.each(validator.errorList, function(idx,item){
					if(idx === 0){
						$(item.element).focus(); // send focus to first el with error
					}
					$(item.element).attr("aria-invalid",true); // add invalid aria
				})
			},
			success: 'valid',
			submitHandler: function(form) {
				//alert("Форма отправлена!");
		    	//form.submit();
		    }
		})

		$('#tel').inputmask({
			"mask": "9 (999) 999-99-99"
		});


		//ajax

		$(document).on('click', '.send-email', function () {
		    var form = $('#form');
            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: form.serialize(),
                success:function (response) {
                    if(response == '1'){
                        alert('Ваша форма успешно отправлена!')
						form[0].reset();
					}else alert('Произошла ошибка!')
                }
            })
		    return false;
        })


		// skills animation

		$(function () {
		    var jqBar = $('.skills__ps');
		    var jqBarStatus = true;
		    $(window).scroll(function() {
		        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
		        if (scrollEvent && jqBarStatus) { 
		            jqBarStatus = false;
		            $('.skills__ps').circleProgress({
					    value: 0.93,
					    size: 130,
					    startAngle: Math.PI*1.5,
					    thickness: 4,
					    lineCap: 'round',
					    animation: {
					    	duration: 1500
					    },
					    fill: {
					        gradient: ["#6331c8", "#c52666"]
					    }
					}).on('circle-animation-progress', function(event, progress) {
					    $(this).find('strong').html(Math.round(93 * progress) + '<i>%</i>');
					})

					$('.skills__ai').circleProgress({
					    value: 0.9,
					    size: 130,
					    startAngle: Math.PI*1.5,
					    thickness: 4,
					    lineCap: 'round',
					    animation: {
					    	duration: 1500
					    },
					    fill: {
					        gradient: ["#6331c8", "#c52666"]
					    }
					}).on('circle-animation-progress', function(event, progress) {
					    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
					})
		        }
		    });
		});
		
	    
	    // scroll to top

	     $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	    });

	    $('.scrollup').click(function () {
	        $("html, body").animate({
	            scrollTop: 0
	        }, 600);
	        return false;
	    });
	})