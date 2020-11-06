// DOM Selector
const durHours = document.querySelector(".duration");
const reservationFee = document.querySelector("#fee");
const availableSeats = document.querySelector("#available")
const tableType = document.querySelector("#tableType");

// Calculate price
function price() {
  let total = 0;
    if (durHours.checkValidity() && tableType.checkValidity()) {
      total = durHours.value * tableType.options[tableType.selectedIndex].value + 10;
    }
    else {
        reservationFee.innerHTML = 0;
    }

  reservationFee.innerHTML = total;
  }

// Simulate server availaility
function seats() {
  let availability = 0;
  if (tableType.checkValidity() && (tableType.options[tableType.selectedIndex].value == 5)) {
    availability = Math.floor(Math.random() * (21 - 0) + 0);
  }
  else if (tableType.checkValidity() && (tableType.options[tableType.selectedIndex].value == 10)) {
    availability = Math.floor(Math.random() * (11 - 0) + 0);
  }
  else if (tableType.checkValidity() && (tableType.options[tableType.selectedIndex].value == 20)) {
    availability = Math.floor(Math.random() * (6 - 0) + 0);
  }

  availableSeats.innerHTML = availability;
}