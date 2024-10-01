// Popup Notification Logic
document.addEventListener('DOMContentLoaded', () => {
    const upcomingPopup = document.getElementById('upcoming-event-popup');
    const pastPopup = document.getElementById('past-event-popup');
    const closeUpcoming = document.getElementById('close-upcoming-popup');
    const closePast = document.getElementById('close-past-popup');

    // Show Upcoming Event Popup after 2 seconds
    setTimeout(() => {
        upcomingPopup.style.display = 'block';
    }, 2000);

    // Show Past Event Popup after 10 seconds
    setTimeout(() => {
        pastPopup.style.display = 'block';
    }, 10000);

    // Close Upcoming Event Popup
    closeUpcoming.addEventListener('click', () => {
        upcomingPopup.style.display = 'none';
    });

    // Close Past Event Popup
    closePast.addEventListener('click', () => {
        pastPopup.style.display = 'none';
    });
});