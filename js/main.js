$(document).ready(function(){
	/* New Featured-Item */
	function Projects(el) {
	  var tour = this;
	  this.el = el;
	  this.fetchPhotos = function(page) {
	    $.ajax(page, {
	      context: tour,
	      success: function(response) {
	        this.el.find('.my-featured-item').html(response).fadeIn("8000");
	      },
	      error: function() {
	        this.el.find('.my-featured-item').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
	      },
	      timeout: 3000,
	      beforeSend: function() {
	        this.el.addClass('is-fetching');
	      },
	      complete: function() {
	        this.el.removeClass('is-fetching');
	      }
	    });
	  }
	}

  var myProjects = new Projects($('#featured-item'));

	$('.project').on('click', 'a', function(){
		var page = $(this).attr('title');
		console.log(page);
		myProjects.fetchPhotos(page)
	});






	/* =========================================================
	  Map
	=========================================================== */

	function initialize() {
		//Call JSON
		$.getJSON("/js/locat.json",function(results){

		   //reference t as the JSON list
			var t = results.d;

			//loop through JSON items
			$.each(t, function (index,location){

			  	var latLng = new google.maps.LatLng(location.lat, location.lng);

			     	//set the marker if there is a match
				marker = new google.maps.Marker({
				  position: latLng,
				  map: map,
				  title:location.Title,
				  icon: location.icon,
				});


				marker.setMap(map);

			});
		});

		var mapProp = {
			  center:new google.maps.LatLng(40.478165,-88.954401),
			  zoom:14,
			  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };

		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}

	google.maps.event.addDomListener(window, 'load', initialize);


	/* =========================================================
	  MObile Menu
	=========================================================== */

	$(document).ready(function(){
		$('nav a.mobile_menu').on('click', function(){
			var currentNavheight = $('nav').height();

			if(currentNavheight < 20) {
				var  newNavheight = $('nav div  ul ').height() + 15;
				$('nav').animate({'height' : newNavheight + 'px'}, 750)
			}else {
				$('nav').animate({'height' : '15px'}, 750, function(){
					$(this).removeAttr('style');
				});
			}
		});

		$(window).resize(function(){

			 if(  $(this).width() > 625 ){
				 $('nav').removeAttr('style');
			 }
		});

	});

	/* =========================================================
	  Sticky Menu
	=========================================================== */


	$(function(){
	        var stickyRibbonTop = $('.nav-header').offset().top;

	        $(window).scroll(function(){
	                if( $(window).scrollTop() > stickyRibbonTop ) {
	                        $('.nav-header').css({position: 'fixed', top: '0px'}).css({zIndex: '1'}).css({paddingBottom: '15px'}).css({width: '100%'});
	                } else {
	                        $('.nav-header').css({position: 'static', top: '0px'});
	                }
	        });
	});


	/* =========================================================
	  scroll motion
	=========================================================== */


	  $('.nav-header a[href^="#"]:not([href="#"])').click(function() {
			//alert();
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });




	/* =========================================================
	 Parallax
	=========================================================== */
	/*
	$(document).ready(function(){
	  $('.section .carousel').slick({
	    arrows: true,
	    dots: true,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    fade: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	  });
	});
	*/

	//  $('.heading').parallax({imageSrc: 'img/sz.jpg'});
	//$('#service').parallax({imageSrc: 'img/fuzzybg.jpg'});
	/*
	$(document).ready(function(){
		$('.slides1').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	});
	*/


	/* =========================================================
	 AOS Animate
	=========================================================== */
	AOS.init({
	  duration: 1200,
	})

	/* =========================================================
	Faux Paginate
	=========================================================== */

	$.fauxPaginate(1, 'portfolio');

});
