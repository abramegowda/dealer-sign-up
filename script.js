$(document).ready(function($) {
  $(".sign-up-button").mouseenter(function() {
    $(".sign-up-button img").addClass("bounce");
  });

  $(".sign-up-button").mouseleave(function() {
    $(".sign-up-button img").removeClass("bounce");
  });

  $(".accept-continue-btn").mouseenter(function() {
    $(".accept-continue-btn img").addClass("bounce");
  });

  $(".accept-continue-btn").mouseleave(function() {
    $(".accept-continue-btn img").removeClass("bounce");
  });

  $('#review-tab').show();
  $('.review-tab').addClass('active');
});

function openTab(evt, tabID) {
  stop.evt
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabID).style.display = "block";
  evt.currentTarget.className += " active";
}
