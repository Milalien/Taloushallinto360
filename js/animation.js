$(document).ready(function(){
    $(".numbers1").mouseenter(function(event){
     $(event.currentTarget).animate({left:'20px'});
   });
   $(".numbers1").mouseenter(function(event){
     $(event.currentTarget).animate({top:'20px'});
   });
   $('.numbers1').mouseleave(function(event){
 $(event.currentTarget).animate({top : 0});
     });
     $('.numbers1').mouseleave(function(event){
 $(event.currentTarget).animate({left : 0});
     });
 });

 $(document).ready(function(){
    $(".numbers2").mouseenter(function(event){
     $(event.currentTarget).animate({right:'20px'});
   });
   $(".numbers2").mouseenter(function(event){
     $(event.currentTarget).animate({top:'20px'});
   });
   $('.numbers2').mouseleave(function(event){
 $(event.currentTarget).animate({top : 0});
     });

     $('.numbers2').mouseleave(function(event){
 $(event.currentTarget).animate({right : 0});
     });
 });

 $(document).ready(function(){
   $(".numbers3").mouseenter(function(event){
     $(event.currentTarget).animate({bottom:'20px'});
   });
   $('.numbers3').mouseleave(function(event){
 $(event.currentTarget).animate({top :'20px'});
     });
     $(".numbers3").mouseenter(function(event){
      $(event.currentTarget).animate({bottom: 0});
    });
    $('.numbers3').mouseleave(function(event){
  $(event.currentTarget).animate({top : 0});
      });
 });