// עדכון התאריך והשעה
function updateDateTime() {
    var datetimeElement = document.querySelector("#datetime");
    var now = moment().format("DD MMMM YYYY, HH:mm:ss ");
    datetimeElement.innerHTML = now;
}
function ExitTime() {
    let exitTime = document.querySelector("#exitTime");
    if (localStorage.exitTime) {
        exitTime.innerHTML = localStorage.exitTime;
        exitTime.style.backgroundColor = "red";
    } else {
        exitTime.innerHTML = ":שעת יציאה<br/>15:15";
    }
}
function updateExitTime() {
    let password = prompt("הכניסו סיסמה:");
    if (password == "301754826") {
        let newTime = prompt("הכניסו שעת יציאה:");
        exitTime.innerHTML = `:שעת יציאה<br/>${newTime}`;
        exitTime.style.backgroundColor = "red";
        localStorage.setItem("exitTime", exitTime.innerHTML);
    } else {
        alert("סיסמה שגויה");
    }
}
function namesLoad() {
    if (localStorage.getItem(`driver`)){
        document.querySelector("#driver").innerHTML = localStorage.getItem(
            "driver");
    }
    for (let i = 1; i <= 4; i++) {
        if (localStorage.getItem(`passenger${i}`)) {
            document.querySelector(`#passenger${i}`).innerHTML = localStorage.getItem(
                `passenger${i}`
            );
            document.querySelector(`#passenger${i}`).style.backgroundColor = "red";
            document.querySelector(`#passenger${i}`).style.color = "white";
        }
    }
}
function addDriver(tag){
    let password = prompt("הכניסו סיסמה:");
    if (password == "301754826") {
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
        if (password == "301754826") {
            let newName = prompt("הוסיפו שם נוסע/ת:");
            if (newName == "" || newName.length > 15) {
                alert("שם אינו תקין");
            } else {
                tag.innerHTML = `${newName}`;
                tag.style.color = "white";
                tag.style.backgroundColor = "red";
            }
        } else {
            alert("סיסמה שגויה");
        }
    }
}
function endDay() {
    let driver =localStorage.getItem(`driver`);
    localStorage.clear();
    localStorage.setItem(`driver`,driver);
    document.querySelector("body").innerHTML = `<h1 id="endDay">נתראה מחר</h1>`;
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

changeView();
namesLoad();
ExitTime();
updateDateTime();
// עדכון התאריך והשעה כל שנייה
setInterval(updateDateTime, 1000);
