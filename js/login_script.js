function changeColor() {
    let body = document.querySelector("body");
    let logo = document.querySelector("#logo");
    let title = document.querySelector("#loginCard > header");
    let btns = document.getElementsByClassName("button");
    if (localStorage.getItem("color") === "pink") {

        for (let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = "rgb(76, 99, 175)";
            title.style.backgroundColor = "rgb(76, 99, 175)";
            logo.style.color = "rgb(195, 219, 255)";
            body.style.backgroundColor = "rgb(230, 237, 254)";
            localStorage.setItem("color", "blue");
        }
    } else {
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = "rgb(175, 76, 149)";
            title.style.backgroundColor = "rgb(175, 76, 149)";
            logo.style.color = "rgb(255, 195, 237)";
            body.style.backgroundColor = "rgb(254, 230, 253)";
            localStorage.setItem("color", "pink");
        }
    }
}

function redirectToDriverPage(name, phone) {
    alert("שלום נהג! השם שלך: " + name + ", והטלפון שלך: " + phone);
    // כאן יש להוסיף קוד שיעביר לדף הבא לנהג
}

function redirectToPassengerPage(name, phone) {
    alert("שלום נוסע! השם שלך: " + name + ", והטלפון שלך: " + phone);
    // כאן יש להוסיף קוד שיעביר לדף הבא לנוסע
}

function loginAsDriver() {
    var name = document.getElementById("nameInput").value;
    var phone = document.getElementById("phoneInput").value;

    redirectToDriverPage(name, phone);
}

function loginAsPassenger() {
    var name = document.getElementById("nameInput").value;
    var phone = document.getElementById("phoneInput").value;

    redirectToPassengerPage(name, phone);
}
function toggleColor() {
    var colorSwitch = document.getElementById("colorSwitch");
    if (colorSwitch.classList.contains("left")) {
        colorSwitch.classList.remove("left");
        colorSwitch.classList.add("right");
    } else {
        colorSwitch.classList.remove("right");
        colorSwitch.classList.add("left");
    }
    changeColor();

}
localStorage.setItem("color", "blue");
// changeColor();
