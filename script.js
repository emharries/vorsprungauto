document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Elakkan laman reload

    const vehicle = document.getElementById('vehicle').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    const confirmationMessage = `Anda telah berjaya menempah ${service} untuk ${vehicle} pada ${date}.`;
    document.getElementById('confirmation').innerText = confirmationMessage;
});
