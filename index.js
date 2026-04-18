function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Add a leading zero to numbers less than 10 (e.g., "05" instead of "5")
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const timeString = `${h}:${m}:${s}`;
    
    // Insert the time into the HTML element
    document.getElementById("clock").textContent = timeString;
}

// Call updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Run once immediately so it doesn't wait 1 second to start
updateClock();