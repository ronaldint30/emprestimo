document.getElementById("participation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ticketNumber = generateTicketNumber();
    document.getElementById("participation-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("ticket-number").textContent = ticketNumber;
});

function generateTicketNumber() {
    return Math.floor(1000000 + Math.random() * 9000000);
}
