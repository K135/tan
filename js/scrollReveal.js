// $(window).on("load",function() {
//   var headspace=$("#header").height() + $(".search-box-wrapper").height();
// console.log(headspace);

//     $(window).scroll(function() {

    
      
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $(".inspiration-card").each(function() {
//         /* Check the location of each desired element */
//         var objectBottom = $(this).offset().top + $(this).outerHeight()/6;
        
//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//           if ($(this).css("opacity")==0) {$(this).css({'transform': 'translateY(-20px) scale(1)','opacity':'1'},600);}  
//         }
//          else { //object goes out of view (scrolling up)
//           if ($(this).css("opacity")==1) {$(this).css({'transform': 'translateY(20px) scale(0.6)','opacity':'0'},500);}
//         }
//         // $(elem).animate({transform: 'translateY(-100px) rotate(1rad) scaleX(2) skewY(42deg)'});
//       });

//       $(".videoWrapper").each(function() {
//         /* Check the location of each desired element */
//         var objectBottom1 = $(this).offset().top + $(this).outerHeight()/6;
        
//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom1 < windowBottom) { //object comes into view (scrolling down)
//           if ($(this).css("opacity")==0) {$(this).css({'transform': ' scale(1)','opacity':'1'},600);}  
//         }
//          else { //object goes out of view (scrolling up)
//           if ($(this).css("opacity")==1) {$(this).css({'transform': ' scale(0.6)','opacity':'0'},500);}
//         }
//         // $(elem).animate({transform: 'translateY(-100px) rotate(1rad) scaleX(2) skewY(42deg)'});
//       });

      



//     }).scroll(); //invoke scroll-handler on page-load
//   });

// //   $(elem).css('transform', 'translate(50px, 30px) rotate(25deg) scale(2,.5) skewX(-35deg)');


