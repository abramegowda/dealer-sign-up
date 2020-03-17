$(document).ready(function($) {

      $('.sign-up-button').mouseenter(function(){
        $('.sign-up-button img').addClass('bounce');
      });

      $('.sign-up-button').mouseleave(function(){
        $('.sign-up-button img').removeClass('bounce');
      })
});