<!--
// --==============================================================--
// (C) COPYRIGHT 2017, Kylie
//     All Right Reserved
//
//     Kylie.Choi
//     Web Developer
// ------------------------------------------------------------------
// File Name	: change.js
// Module Name	: change
// Date		: 14/06/2017 
// Author	: Kylie.Choi, Web Developer
// ------------------------------------------------------------------
// Purpose      : java script
// Revision history
// @
// --==============================================================--
-->
var change = {
	// main side menu animation 
	showEvent : function(){
		$( "#show_lft" ).mouseover(function() {
			// $( ".hide_lft:hidden:first" ).fadeIn("slow");
			// $( ".hide_lft" ).css( "display", "block" );
			$(".hide_lft").animate({left:'0px'},250, function(){
				$(".hide_lft").mouseleave(function() {
					$(".hide_lft").animate({left:'-250px'},250); });
			});			
        }); 
        $( "#show_rgt" ).mouseover(function() {
			$(".hide_rgt").animate({right:'0px'},250, function(){
				$(".hide_rgt").mouseleave(function() {
					$(".hide_rgt").animate({right:'-250px'},250); });
			});		
        });   			
	
	},
	changeEvent : function(){	
	// It will be code refactoring
	// when mouse over, backgound color is changed
    	$(".hl_ch_1").mouseover(function() {
            $(".hl_ch_1").css("background-Color", "#989898");
        });
       	 $(".hl_ch_1").mouseout(function () {
            $(".hl_ch_1").css("background-Color", "#fff"); 
        });

       	$(".hl_ch_2").mouseover(function() {
            $(".hl_ch_2").css("background-Color", "#989898");
        });
       	 $(".hl_ch_2").mouseout(function () {
            $(".hl_ch_2").css("background-Color", "#fff"); 
        });

       	$(".hl_ch_3").mouseover(function() {
            $(".hl_ch_3").css("background-Color", "#989898");
        });
       	 $(".hl_ch_3").mouseout(function () {
            $(".hl_ch_3").css("background-Color", "#fff"); 
        });

       	$(".hl_ch_4").mouseover(function() {
            $(".hl_ch_4").css("background-Color", "#989898");
        });
       	 $(".hl_ch_4").mouseout(function () {
            $(".hl_ch_4").css("background-Color", "#fff"); 
        });
	},
	// section 3:edu & section 2:exp sub menu appear events
	subMenuEvent : function(){
		$("#lst_exp").on('click', function(){
			$(".sub_link_exp").show();
			$(".sub_link_edu").hide();
			$(".sns_link").hide();
		});
		$("#lst_edu").on('click', function(){
			$(".sub_link_exp").hide();
			$(".sub_link_edu").show();
			$(".sns_link").hide();
		});
			
	},
	// section 3 : edu certification download event
	downloadEvent : function(){
		$('#down_icon_1').on('click', function(){ 
        	$('#last_tia').slideDown('slow', function(){      
           		$('#last_tia').show();
           		$('#down_icon_1').hide();
           		$('#up_icon_1').show();
       		});       
    	}); 
    	$('#up_icon_1').on('click', function(){   
        	$('#last_tia').slideUp('slow', function(){      
            	$('#last_tia').hide();
            	$('#down_icon_1').show();
           		$('#up_icon_1').hide();
       		});
    	});
    	$('#down_icon_2').on('click', function(){ 
        	$('#last_kj').slideDown('slow', function(){      
           		$('#last_kj').show();
           		$('#down_icon_2').hide();
           		$('#up_icon_2').show();
       		});       
    	}); 
    	$('#up_icon_2').on('click', function(){   
        	$('#last_kj').slideUp('slow', function(){      
            	$('#last_kj').hide();
            	$('#down_icon_2').show();
           		$('#up_icon_2').hide();
       		});
    	});
    },
    // right main menu append date
	displayTime : function(){
		$("#gTime").append(change.getTime());
	},	
	getTime : function(){
		var d = new Date(),
	    // minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
	    // hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
	    // ampm = d.getHours() >= 12 ? 'pm' : 'am',
	    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		// return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
		return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
	},
	init : function(){
		change.showEvent();
		change.displayTime();
		change.subMenuEvent();
		change.downloadEvent();
		change.changeEvent();
		
	}

}

