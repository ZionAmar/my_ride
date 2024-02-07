const rideForm = document.getElementById("rideForm");
const ridesList = document.getElementById("rides");

rideForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const rideName = rideForm.elements["rideName"].value;
    const exitTime = rideForm.elements["exitTime"].value;
    const password = rideForm.elements["password"].value;

    // Check password validity here

    // Create ride element
    const rideElement = document.createElement("div");
    rideElement.classList.add("ride");

    // Add ride name and exit time
    const rideHeader = document.createElement("h3");
    rideHeader.textContent = rideName;
    rideElement.appendChild(rideHeader);

    const rideInfo = document.createElement("p");
    rideInfo.textContent = `שעת יציאה: ${exitTime}`;
    rideElement.appendChild(rideInfo);

    // Add passengers section
    const passengersSection = document.createElement("div");
    passengersSection.classList.add("passengers");
    rideElement.appendChild(passengersSection);

    // Add button to add passengers
    const addPassengerButton = document.createElement("button");
    addPassengerButton.textContent = "הוסף נוסע";
    addPassengerButton.classList.add("add-passenger-btn");
    addPassengerButton.addEventListener("click", function () {
        // Implement logic to add passenger here
        // You can use prompt or input fields to get passenger details
        const passengerName = prompt("Please enter passenger name:");
        if (passengerName) {
            const passenger = document.createElement("p");
            passenger.classList.add("passenger");
            passenger.textContent = `נוסע: ${passengerName}`;
            passengersSection.appendChild(passenger);
        }
    });
    rideElement.appendChild(addPassengerButton);

    // Add ride element to rides list
    ridesList.appendChild(rideElement);

    // Clear form fields
    rideForm.reset();
});
function changeColor() {
    let body = document.querySelector("body");
    let logo = document.querySelector("#logo");
    if (localStorage.getItem("color") === "pink") {
        body.style.backgroundColor = "rgb(255,203,253)";
    } else {
        body.style.backgroundColor = "rgb(196,212,252)";

    }
}
changeColor();