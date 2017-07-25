<!--
// --==============================================================--
// (C) COPYRIGHT 2017, Kylie
//     All Right Reserved
//
//     Kylie.Choi
//     Web Developer
// ------------------------------------------------------------------
// File Name	: action.js
// Module Name	: action
// Date		: 24/07/2017 
// Author	: Kylie.Choi, Web Developer
// ------------------------------------------------------------------
// Purpose      : java script for drawing circle & fancy box
// Revision history
// @
// --==============================================================--
-->
var action = {
	drawingCircle : function(){
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  			window.requestAnimationFrame = requestAnimationFrame;;
 		
 		var canvas = document.getElementById('myCanvas');
		var context_1 = canvas.getContext('2d');
		var context_2 = canvas.getContext('2d');
		var context_3 = canvas.getContext('2d');
		var x = canvas.width / 2;
		var y = canvas.height / 2;
		var radius = 65;
		var endPercent_1 = 86;
		var endPercent_2 = 72;
		var endPercent_3 = 65;
		var curPerc = 0;
		var counterClockwise = false;
		var circ = Math.PI * 2;
		var quart = Math.PI / 2;

 		context_1.lineWidth = 7;
 		context_1.strokeStyle = '#e44242';
 		context_1.font = "16px Rajdhani, sans-serif";
		context_1.textAlign = "center";
		context_1.fillText(endPercent_1+"%", x, y/5); 
		context_1.fillText("HTML / CSS", x, y/4.35);
 
 		context_2.lineWidth = 7;
 		context_2.strokeStyle = '#e44242';
 		context_2.font = "16px Rajdhani, sans-serif";
		context_2.textAlign = "center";
		context_2.fillText(endPercent_2+"%", x, y/1.9); 
		context_2.fillText("JS / PHP", x, y/1.75);
		context_2.fillText("C / Verilog", x, y/1.65);

		context_3.lineWidth = 7;
 		context_3.strokeStyle = '#e44242';
 		context_3.font = "16px Rajdhani, sans-serif";
		context_3.textAlign = "center";
		context_3.fillText(endPercent_3+"%", x, y/1.1); 
		context_3.fillText("MySQL / DB", x, y/1.06);
 		

		function animate_1(r1){
		// context.clearRect(0, 0, canvas.width, canvas.height);
      	context_1.beginPath();
      	context_1.arc(x, y/5, radius, -(quart), ((circ) * r1)- quart, false);
      	context_1.stroke();   
       	curPerc++;
      		if (curPerc < endPercent_1) {
          		requestAnimationFrame(function () {
             	animate_1(curPerc / 100)  
          		});  
        	}
      	};
     	animate_1();   


     	function animate_2(r2){
		    context_2.beginPath();
      	context_2.arc(x, y/1.8, radius, -(quart), ((circ) * r2)- quart, false);
      	context_2.stroke();
      
      	curPerc;
      		if (curPerc < endPercent_2) {
          		requestAnimationFrame(function () {
             	animate_2(curPerc / 100)  
          		});  
        	}
     	};
     	animate_2();    


     	function animate_3(r3){
		    context_3.beginPath();
      	context_3.arc(x, y/1.1, radius, -(quart), ((circ) * r3)- quart, false);
      	context_3.stroke();
      
      	curPerc;
      		if (curPerc < endPercent_3) {
          		requestAnimationFrame(function () {
             	animate_3(curPerc / 100)  
          		});  
        	}
     	};
     	animate_3(); 	
  },

  gofancyBox : function(){
    $(".popup-gallery").fancybox({
        helpers : {
        title: {
            type: 'inside',
            position: 'top'}
        },
        openEffect  : 'none',
        closeEffect : 'none'
    });
  },

	init : function(){
		action.drawingCircle();
		action.gofancyBox();
	}

}