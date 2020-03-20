// const moment = require("moment");

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

  $("#review-tab").show();
  $(".review-tab").addClass("active");

  $("#datepicker")
    .dateRangePicker({
      singleMonth: true,
      showShortcuts: false,
      showTopbar: false,
      inline: true,
      alwaysOpen: true,
      container: "#date-range-container",
      startOfWeek: "monday",
      hoveringTooltip: false,
      startDate: moment.now()
    })
    .bind("datepicker-change", function(event, obj) {
      if ($("#datepicker").val().length > 0) {
        $(".accept-continue-btn").html(
          "Submit & Approve<img src=images/arrow-right.svg />"
        );
        $(".accept-continue-btn").removeClass('not-active');
        $('.button-div a img').removeClass('arrow-inactive');
        $(".accept-continue-btn").attr("disabled", false);
      }
    });

  $(".reset").click(function() {
    $("#datepicker")
      .data("dateRangePicker")
      .clear();
      $(".accept-continue-btn").addClass('not-active');
      $('.button-div a img').addClass('arrow-inactive');
      $(".accept-continue-btn").attr("disabled", true);
  });

  $(".accept-continue-btn").click(function() {
    if ($("#datepicker").val().length > 0) {
      $(".accept-continue-btn").attr("href", "thankyou.html");
    } else {
      $("#review-tab").hide();
      $(".review-tab").removeClass("active");
      $("#dates-tab").show();
      $(".dates-tab").addClass("active");
    }
  });
});

function openTab(evt, tabID) {
  stop.evt;
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
