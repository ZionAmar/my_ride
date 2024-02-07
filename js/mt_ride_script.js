// עדכון התאריך והשעה
function updateDateTime() {
    const currentDate = new Date();
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Jerusalem",
    };
    const now = new Intl.DateTimeFormat("he-IL", options).format(
        currentDate
    );

    const currentTimeElement = document.getElementById("datetime");
    currentTimeElement.innerHTML = now.replace(", ", "<br>");
}
function ExitTime() {
    let exitTime = document.querySelector("#exitTime");
    if (localStorage.exitTime) {
        exitTime.innerHTML = `:שעת יציאה<br/>${localStorage.exitTime}`;
        exitTime.style.backgroundColor = "red";
    } else {
        exitTime.innerHTML = ":שעת יציאה<br/>15:10";
    }
}
function updateExitTime() {
    let password = prompt("הכניסו סיסמה:");
    if (password === "301754826") {
        let timeInput = document.createElement("input");
        timeInput.id = "exit-time-input";
        timeInput.type = "time";

        let modal = document.createElement("div");
        modal.id = "exit-time-modal";
        modal.style.display = "none";
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                let selectedTime = timeInput.value;
                if (selectedTime) {
                    localStorage.setItem("exitTime", selectedTime);
                    ExitTime();
                    scheduleNotification(selectedTime);
                }
            }
        });

        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContent.appendChild(timeInput);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modal.style.display = "flex";
    } else {
        alert("סיסמה שגויה");
    }
}

function namesLoad() {
    if (localStorage.getItem("driver")) {
        document.querySelector("#driver").innerHTML =
            localStorage.getItem("driver");
    }
    for (let i = 1; i <= 4; i++) {
        if (localStorage.getItem(`passenger${i}`)) {
            document.querySelector(`#passenger${i}`).innerHTML =
                localStorage.getItem(`passenger${i}`);
            document.querySelector(`#passenger${i}`).style.backgroundColor =
                "red";
            document.querySelector(`#passenger${i}`).style.color = "white";
        } else {
            document.querySelector(`#passenger${i}`).innerHTML = "הוספת נוסע/ת";
        }
    }
    let currentHour = new Date().getHours();

    if (currentHour < 11) {
        namesDefault();
    }
}
function addDriver(tag) {
    let password = prompt("הכניסו סיסמה:");
    if (password === "301754826") {
        let newName = prompt("הכניסו שם נהג/ת:");
        if (newName == "" || newName.length > 15) {
            alert("שם אינו תקין");
        } else {
            tag.innerHTML = `${newName}`;
            localStorage.setItem(tag.id, newName);
        }
    } else {
        alert("סיסמה שגויה");
    }
}
function namesDefault() {
    let passengers = document.getElementsByClassName("person");
    let names = ["הדר", "אסתי", "מאירה", "שילת"];
    for (let j = 1; j <= 4; j++) {
        if (!localStorage.getItem(`passenger${j}`)) {
            passengers[j].innerHTML = `${
                names[j - 1]
            }<br/><button onclick="acsseptNames(${j},event)">אשר/י</button>`;
        }
    }
}
function acsseptNames(tag, event) {
    event.stopPropagation(); // מונע התפשטות של האירוע לתגית האחרונה
    let passengers = document.getElementsByClassName("person");
    let names = ["הדר", "אסתי", "מאירה", "שילת"];
    for (let j = 1; j <= 4; j++) {
        if (j == tag) {
            passengers[j].innerHTML = `${names[j - 1]}`;
            passengers[j].style.color = "white";
            passengers[j].style.backgroundColor = "red";
            localStorage.setItem(passengers[j].id, names[j - 1]);
        }
    }
}
function addName(tag) {
    if (tag.innerHTML === "הוספת נוסע/ת") {
        let newName = prompt("הוסיפו שם נוסע/ת:");
        if (newName == "" || newName.length > 15) {
            alert("שם אינו תקין");
        } else {
            tag.innerHTML = `${newName}`;
            tag.style.color = "white";
            tag.style.backgroundColor = "red";
            localStorage.setItem(tag.id, newName);
        }
    } else {
        let password = prompt("הכניסו סיסמה:");
        if (password === "301754826") {
            let newName = prompt("הוסיפו שם נוסע/ת:");
            if (newName == "" || newName.length > 15) {
                alert("שם אינו תקין");
            } else {
                tag.innerHTML = `${newName}`;
                tag.style.color = "white";
                tag.style.backgroundColor = "red";
                localStorage.setItem(tag.id, newName);
            }
        } else {
            alert("סיסמה שגויה");
        }
    }
}
// function scheduleNotification(exitTime) {
//   if ("Notification" in window) {
//     Notification.requestPermission().then(function (permission) {
//       if (permission === "granted") {
//         let currentDateTime = new Date();
//         let exitDateTime = new Date();
//         exitDateTime.setHours(exitTime.split(":")[0]);
//         exitDateTime.setMinutes(exitTime.split(":")[1]);

//         if (
//           exitDateTime - currentDateTime <= 60 * 60 * 1000 &&
//           exitDateTime - currentDateTime > 0
//         ) {
//           let notification = new Notification("יוצאים עוד כשעה", {
//             body: "הירשם לנסיעה!",
//             icon: "path/to/icon.png",
//           });

//           // סגירת ההתראה לאחר שעה
//           setTimeout(function () {
//             notification.close();
//           }, 60 * 60 * 1000);
//         }
//       }
//     });
//   }
// }

function endDay() {
    for (let i = 1; i <= 4; i++) {
        localStorage.removeItem(`passenger${i}`);
    }
    localStorage.removeItem(`exitTime`);
    document.querySelector(
        "body"
    ).innerHTML = `<h1 id="endDay">נתראה מחר</h1>`;
    document.querySelector("#endDay").style.fontSize = "60px";
    document.querySelector("#endDay").style.textAlign = "center";
    document.querySelector("#endDay").style.alignItems = "center";
}
function changeView() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    if (
        (currentHour >= 15 && currentHour < 24) ||
        (currentHour >= 0 && currentHour < 6)
    ) {
        endDay();
    }
}
function changeColor() {
    let body = document.querySelector("body");
    let main = document.querySelector("main");
    let logo = document.querySelector("#logo");
    if (localStorage.getItem("color") === "pink") {
        body.style.backgroundColor = "rgb(254, 230, 253)";
        main.style.backgroundColor = "rgb(232,169,250)";
    } else {
        body.style.backgroundColor = "rgb(230, 237, 254)";
        main.style.backgroundColor = "rgb(128,168,255)";
    }
}
function init() {
    changeColor();
    // changeView();
    namesLoad();
    ExitTime();
    updateDateTime();
}
// scheduleNotification(localStorage.getItem("exitTime"));

//בדיקה האם עבר 11 בבוקר
setInterval(namesLoad, 60000); // 600000 מייצגות 10 דקות במילישניות
// עדכון התאריך והשעה כל שנייה
setInterval(updateDateTime, 1000);