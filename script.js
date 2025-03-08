// Set the date we're counting down to
const countdownDate = new Date("Oct 22, 2025 10:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with IDs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector('.countdown').innerHTML = "CONFERENCE HAS STARTED!";
    }
}, 1000);