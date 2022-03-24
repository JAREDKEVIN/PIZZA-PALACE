(function ($) {
	'use strict';

	var deliciousaApp = {
		/* ---------------------------------------------
            ## Scroll top
         --------------------------------------------- */
		scroll_top: function () {
			$('body').append(
				"<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>"
			);
			var $scrolltop = $('#scroll-top');
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > $(this).height()) {
					$scrolltop.addClass('btn-show').removeClass('btn-hide');
				} else {
					$scrolltop.addClass('btn-hide').removeClass('btn-show');
				}
			});
			$("a[href='#top']").on('click', function () {
				$('html, body').animate(
					{
						scrollTop: 0,
					},
					'normal'
				);
				return false;
			});
		},

		mobile_menu: function () {
			$('.site-navigation .mainmenu-wrap nav').meanmenu({
				meanMenuClose: 'X',
				meanMenuCloseSize: '18px',
				meanScreenWidth: '992',
				meanExpandableChildren: true,
				meanMenuContainer: '.mobile-menu',
			});
			if ($('.menu.right-menu').length) {
				var mobileLeftMenu = $(
					'.site-header .navigation-area .mainmenu-wrap .menu.right-menu ul li'
				)
					.clone()
					.appendTo('.mobile-menu .mean-bar .mean-nav ul');
			}
		},

	
		sticky_header: function () {
			if ($('#sticky-header').length) {
				var stickyMenu = $('.site-header').clone().appendTo('#sticky-header');
				$(window).on('scroll', function () {
					var w = $(window).width();
					if (w > 992) {
						if ($(this).scrollTop() > 350) {
							$('#sticky-header').slideDown(500);
						} else {
							$('#sticky-header').slideUp(500);
						}
					}
				});
			}
		},


		nav_scroller: function () {
			if ($('.site-header').length) {
				$('.menu ul').navScroll({
					mobileDropdown: true,
					mobileBreakpoint: 991,
					scrollSpy: true,
					navHeight: 65,
				});
			}
		},
		
		
	modal_popup: function(){
		event.preventDefault();
		$(document).ready(function(){
			$(".btn1").click(function(){
				event.preventDefault()
				$("#myModal").modal('show');
			});
		});
	},
	

		/* ---------------------------------------------
         function initializ
         --------------------------------------------- */
		initializ: function () {
			deliciousaApp.scroll_top();
			deliciousaApp.mobile_menu();
			deliciousaApp.sticky_header();
			deliciousaApp.nav_scroller();
			deliciousaApp.modal_popup()
		},
	};


	$(document).ready(function(){
		$(".btn").click(function(){
			event.preventDefault();
			$("#myModal").modal('show');
			
		});
	});


	$(document).ready(function(){
		$(".btn").click(function(){
			event.preventDefault();
			$("#myModal").modal('hide');
			
			$(".done2").modal('show');
			
		});
	});


var price,toppingPrice,numberPrice
let total=0

function getPizza(size,toppings,number,total){
	this.size= size;
	this.toppings=toppings;
	this.number=number;
	this.total=total;
	this.finalTotal=finalTotal;
}

()=>{

	let psize=$("#occasion:option selected").val();
	let ptype=$("#food:option selceted").val();
	let ptoppings=$("#branch:option selected").val();
	let pnumber=$("#personnum:optionselected").val();

}

switch (psize){
	case "0":
		price=0;
		break;

		case "Occasion 1":
			price=600;
			break;

			case "Occasion 2":
				price=800;
				break;

				case "Occasion 3":
					price=1000;
					
					default:
						console.log("error: choose your pizza size")
}

switch (ptoppings){
	case "0":
		toppingPrice=0;
		break;

		case "Option 1":
			toppingPrice=50;
			break;

			case "Option 2":
				toppingPrice=50;
				break;

				case "Option 3":
					toppingPrice=50;
					
					default:
						console.log("error: choose your pizza topping")
					
}

switch (pnumber){
	case "0":
		numberPrice=0;
		break;

		default:
			console.log("error:select number of Pizza")


total=toppingPrice+price

numberPrice = $("#personnum").val

finalTotal=numberPrice*total



	
    



	/* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
	$(function () {
		deliciousaApp.initializ();
	});
})(jQuery);
