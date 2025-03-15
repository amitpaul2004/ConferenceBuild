$(document).ready(function () {
    setTimeout(function () { $(".loader").fadeOut(200) }, 150);
    $('.lazy').lazy();
    AOS.init({ once: true });
    $(".nav-item").click(function () {
        let jp = "#" + $(this).find("a").data("jump"); let hg = $(jp).offset().top;
        let tp = $("#fixtop").height(); $("html,body").animate({ scrollTop: hg - tp }, 200, 'swing');
        $(".nav-item").removeClass("selected");
        $(this).addClass("selected");
    });
    $('.hmb').click(function () { $(this).toggleClass('open'); });
    $("#toggle").click(function () { $("#menu").slideToggle(); });
});
// --------------------countdown code start----------------------

var countDownDate = new Date("Jul 25, 2025 10:00:00").getTime();

var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    let d = days;
    if (days < 10) d = "0" + days;
    let h = hours;
    if (hours < 10) h = "0" + hours;
    let m = minutes;
    if (minutes < 10) m = "0" + minutes;
    let s = seconds;
    if (seconds < 10) s = "0" + seconds;
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("mins").innerHTML = m;
    document.getElementById("sec").innerHTML = s;

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("mins").innerHTML = "00"
        document.getElementById("sec").innerHTML = "00"
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);

// Function to handle smooth scrolling for internal hyperlinks
function smoothScrollToAnchor() {
    // Get all internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    // Loop through each anchor link
    anchorLinks.forEach(anchorLink => {
      anchorLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
  
        const targetId = this.getAttribute('href'); // Get target ID from the href
        const targetElement = document.querySelector(targetId); // Find target element
  
        // If target element exists, scroll to it smoothly
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', // Enable smooth scrolling
            block: 'start'       // Align the top of the element to the top of the viewport
          });
        }
      });
    });
  }
  
  // Call the function to enable smooth scrolling after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', smoothScrollToAnchor);