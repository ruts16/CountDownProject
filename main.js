// Set the target end date for the countdown timer
const endDate = "21 November 2026 10:00 PM";

// Display the target end date on the page
document.getElementById("end-date").innerText = endDate;

// Select all input fields (assumed to display days, hours, minutes, seconds)
const inputs = document.querySelectorAll("input");

// Function to update the countdown timer
function clock() {
    // Parse the target end date as a Date object
    const end = new Date(endDate);

    // Get the current date and time
    const now = new Date();

    // Calculate the difference in seconds between the end date and the current time
    const diff = (end - now) / 1000;

    // If the countdown has finished (difference is negative), stop the function
    if (diff < 0) return;

    // Calculate the remaining time and update the input fields
    // Calculate and set the number of days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    // Calculate and set the number of hours remaining after full days
    inputs[1].value = Math.floor((diff / 3600) % 24);

    // Calculate and set the number of minutes remaining after full hours
    inputs[2].value = Math.floor((diff / 60) % 60);

    // Calculate and set the number of seconds remaining after full minutes
    inputs[3].value = Math.floor(diff % 60);
}

// Initial call to display the countdown immediately
clock();

// Update the countdown every second using setInterval
setInterval(() => {
    clock();
}, 1000);
