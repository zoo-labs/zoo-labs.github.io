"use strict";

$(document).ready(function () {
  /* Video Lightbox */
  if (!!$.prototype.simpleLightboxVideo) {
    $(".video").simpleLightboxVideo();
  }

  /*ScrollUp*/
  if (!!$.prototype.scrollUp) {
    $.scrollUp();
  }

  /*Responsive Navigation*/
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").on("click", function () {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
    } else {
      $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
      $(this).addClass("open");
    }
  });

  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-mobile ul a").on("click", function () {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $("#nav-trigger span").removeClass("open");
    }
  });

  /* Sticky Navigation */
  if (!!$.prototype.stickyNavbar) {
    $("#header").stickyNavbar();
  }

  $("#content").waypoint(function (direction) {
    if (direction === "down") {
      $("#header").addClass("nav-solid fadeInDown");
    } else {
      $("#header").removeClass("nav-solid fadeInDown");
    }
  });

  const clipboard = new ClipboardJS(".copy-to-clipboard");

  clipboard.on("success", function (e) {
    Toastify({
      text: "Copied!",
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      // close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "black",
      // stopOnFocus: true, // Prevents dismissing of toast on hover
      // onClick: function(){} // Callback after click
    }).showToast();

    e.clearSelection();
  });

  simplyCountdown("#countdown", {
    year: 2021, // required
    month: 10, // required
    day: 1, // required
    hours: 8, // Default is 0 [0-23] integer
    minutes: 11, // Default is 0 [0-59] integer
    // seconds: 0, // Default is 0 [0-59] integer
    words: {
      days: { singular: "day", plural: "days" },
      hours: { singular: "hour", plural: "hours" },
      minutes: { singular: "minute", plural: "minutes" },
      seconds: { singular: "second", plural: "seconds" },
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
    enableUtc: true,
    onEnd: function () {

    },
    refresh: 1000, //default refresh every 1s
    sectionClass: "simply-section", //section css class
    amountClass: "simply-amount", // amount css class
    wordClass: "simply-word", // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
  });
});

/* Preloader and animations */
$(window).load(function () {
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350).css({ "overflow-y": "visible" });

  /* WOW Elements */
  if (typeof WOW == "function") {
    new WOW().init();
  }

  /* Parallax Effects */
  if (!!$.prototype.enllax) {
    $(window).enllax();
  }
});
