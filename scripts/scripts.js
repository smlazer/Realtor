'use strict';

$(function() {

  var width = 720;
  var animationspeed = 1000;
  var pause = 3000;
var currentslide = 1;
  var $slider = $('#slider');
  var $slidecontainer = $slider.find('.slides');
  var $slides = $slidecontainer.find('.slide');

  var interval;

  function startSlider(){
    interval = setInterval(function() {
      $('#slider .slides').animate({'margin-left': '-='+width}, animationspeed, function() {
        currentslide++;
        if (currentslide === $slides.length) {
          currentslide = 1;
          $slidecontainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  startSlider();

  });