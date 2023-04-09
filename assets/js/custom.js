$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      // Add your Owl Carousel settings here
      loop:true,
      margin:30,
      autoHeight:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
    });
  });