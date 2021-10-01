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

  // Set the date we're counting down to
  var countDownDate = new Date("Oct 1, 2021 13:11:00 GMT-700").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var el = document.getElementById("countdown");
    // Display the result in the element with id="demo"
    el.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      el.innerHTML = "";
    }
  }, 1000);
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
