/*-----------------------------------------------------------------------------------*/
/*	SLIDER
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

				if ($.fn.cssOriginal!=undefined)
					$.fn.css = $.fn.cssOriginal;

					$('.fullwidthbanner').revolution(
						{
							delay:9000,
							startwidth:1280,
							startheight:700,
							hideThumbs:200,
							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
							navigationType:"none",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
							touchenabled:"on",						// Enable Swipe Function : on/off
							fullWidth:"on"

						});
			});

$(document).ready(function() {

				if ($.fn.cssOriginal!=undefined)
					$.fn.css = $.fn.cssOriginal;

					$('.banner').revolution(
						{
							delay:9000,
							startheight:450,
							startwidth:960,

							hideThumbs:200,

							navigationType:"bullet",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
							navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
							navigationStyle:"round",				//round,square,navbar

							touchenabled:"on",						// Enable Swipe Function : on/off
							onHoverStop:"on",						// Stop Banner Time at Hover on Slide on/off

							navOffsetHorizontal:0,
							navOffsetVertical:-25,

							shadow:1,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
							fullWidth:"off"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus

						});

					});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
	$('.forms').dcSlickForms();
});


$(document).ready(function() {
	$('.comment-form input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}

		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');
			}
		});
	});
});


/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when click over heading 2
$("h4").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
 $(document).ready( function() {
      $('#services-container').easytabs({
	      animationSpeed: 300,
	      updateHash: false
      });
    });

/*-----------------------------------------------------------------------------------*/
/*	TESTIMONIALS
/*-----------------------------------------------------------------------------------*/
 $(document).ready( function() {
      $('#testimonials-container').easytabs({
	      animationSpeed: 500,
	      updateHash: false,
	      cycle: 5000
      });

    });

/*-----------------------------------------------------------------------------------*/
/*	PORTFOLIO GRID
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
 var $container = $('#portfolio .items');
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : '.item',
			layoutMode : 'fitRows'
		});
	});

	$('.filter li a').click(function(){

		$('.filter li a').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });

		return false;
	});
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEOCASE
/*-----------------------------------------------------------------------------------*/

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}

$(document).ready(function(){
 var $container = $('#videocase .items');
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : '.item',
			layoutMode : 'fitRows'
		});
	});

	$('.filter li a').click(function(){

		$('.filter li a').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });

		return false;
	});


	var _videocontainer = $('#videocontainer');
	var _addressArr = [];
	$('.items li').each(function(index) {
		$(this).attr('rel', index);
		_addressArr[index] = $(this).data('address');
	});

	var _descArr = [];
	$('.description li').each(function(index) {
		_descArr[index] = $(this);
		$(this).hide();
		$(this).on('click', function(event) {
		  	alert('click description');
		});
	});

	var _currentNum = 0;
	var isInit = false;
	_videocontainer.fitVids();

	var _videoArr = [];
	$('.video').each(function(index) {
	  	_videoArr[index] = $(this)
		if(index!=0) $(this).hide();
	});

	$.address.init(function(event) {
	}).change(function(event) {
		var _address = $.address.value().replace('/', '');
		if(_address){
			if(_address!=""&&_currentNum!=_addressArr.indexOf(_address))loadAsset(_addressArr.indexOf(_address));
		}else{
			$.address.path(_addressArr[0]);
		}
	})


	$('.items li').on('click', function(event) {
		loadAsset($(this).attr('rel'));
		return false;
	});

	function loadAsset(n){
		$('html, body').animate({scrollTop: _videocontainer.offset().top-30}, 600);
		_index = n;
		var _pv = _videoArr[_currentNum];
		if(_pv)_pv.animate({opacity: 0}, 300, function() {
			var _ph = _pv.height();
			_pv.hide();
			_pv.remove();
			var _h = _videoArr[_index].show().css('opacity', 0).height();
			_videoArr[_index].css('height', _ph);
			_videoArr[_index].animate({opacity: 1, height: _h}, 600, function() {
				_videoArr[_index].css('height', 'auto');
				_videocontainer.append(_pv);
				// _videocontainer.fitVids();
			})
		})
		$.address.path(_addressArr[_index])
		_currentNum = _index;
		return false;
	}

});

/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

			$('.fancybox-media')
				.fancybox({

					arrows : false,
					padding: 10,
					closeBtn: false,
					openEffect : 'fade',
					closeEffect : 'fade',
					prevEffect : 'fade',
					nextEffect : 'fade',
					helpers : {
						media : {},
						buttons	: {},
						thumbs : {
							width  : 50,
							height : 50
						},
						title : {
							type : 'outside'
						},
						overlay : {
            				opacity: 0.9
        				}
					},
					beforeLoad: function() {
            var el, id = $(this.element).data('title-id');

            if (id) {
                el = $('#' + id);

                if (el.length) {
                    this.title = el.html();
                }
            }
        }
				});
		});


/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
$('.items li a, .item a, .featured a').prepend('<span class="more"></span>');
});

$(document).ready(function() {
        $('.item, .items li, .featured').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });

/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
$(".social li a").css("opacity","1.0");
$(".social li a").hover(function () {
$(this).stop().animate({ opacity: 0.75 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function() {
    		jQuery('.media, .featured').fitVids();
    	});


/*-----------------------------------------------------------------------------------*/
/*	SELECTNAV
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

			selectnav('tiny', {
				label: '--- Navigation --- ',
				indent: '-'
			});


		});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})


/*-----------------------------------------------------------------------------------*/
/*  Single Image Lightbox
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }

  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.popup-inline').magnificPopup({
    type: 'inline'
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

});

/*-----------------------------------------------------------------------------------*/
/*  Gallery Lightbox
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
});

/*-----------------------------------------------------------------------------------*/
/*  Ajax popup
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

  $('.simple-ajax-popup-align-top').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  $('.simple-ajax-popup').magnificPopup({
    type: 'ajax'
  });

});

/*-----------------------------------------------------------------------------------*/
/*  Popup
/*-----------------------------------------------------------------------------------*/

$('#open-popup').magnificPopup({
    items: [
      {
        src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
        title: 'Peter & Paul fortress in SPB'
      },
      {
        src: 'http://vimeo.com/123123',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});