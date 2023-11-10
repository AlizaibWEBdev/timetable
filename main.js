const data = {
    "Monday": [
        {
            "class": "lab#3",
            "time": "5:00 to 7:00",
            "code": "2309e"
        },
       
    ],
    "Tuesday": [
        {
            "class": "lab#4",
            "time": "3:00 to 5:00",
            "code": "2311d"
        },
        {
            "class": "lab#3",
            "time": "1:00 to 3:00",
            "code": "2309c" 
        }
    ],
    "Wednesday": [
        {
            "class": "lab#3",
            "time": "5:00 to 7:00",
            "code": "2309e"
        }
    ],
    "Thursday": [
        {
            "class": "lab#4",
            "time": "3:00 to 5:00",
            "code": "2311d"
        },
         {
            "class": "lab#3",
            "time": "1:00 to 3:00",
            "code": "2309c" 
        }

    ],
    "Friday": [
        {
            "class": "lab#3",
            "time": "5:00 to 7:00",
            "code": "2309e"
        }
    ],
    "Saturday": [
        {
            "class": "lab#4",
            "time": "3:00 to 5:00",
            "code": "2311d"
        },
         {
            "class": "lab#3",
            "time": "1:00 to 3:00",
            "code": "2309c" 
        }
    ],
    "Sunday": [
        {
            "class": "lab#4",
            "time": "3:00 to 5:00",
            "code": "2311d"
        }
    ]
}
// Create a Date object
const date = new Date();

// Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
const dayOfWeek = date.getDay();

// Create an array of day names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day name using the dayOfWeek as an index
let index = 0;

function updateUi() {
    console.log(index);

    const today = daysOfWeek[dayOfWeek];
    const classes = data[today];
    let card = document.getElementById("card")

    let classCount = classes.length;

    if (index >= classCount) {
        index = 0;
       

    }
    if (index < 0) {
        index = classCount - 1;
    }

    const lab  = classes[index].class;
    const time = classes[index].time;
    const code = classes[index].code;


    card.innerHTML = `
        <div class="navigation-button previous" onclick="back()">
       
        <span>&lt;</span>
    </div>

    <h1 id="day">${today}</h1>
    <p class="entry">showing ${index+1} of ${classCount}</p>
    <h3 id="class"><span>Class: </span> ${lab}</h3>
    <div class="class-details">
        <p id="time"><span>Time: </span>${time}</p>
        <p id="code"><span>Code: </span>${code}</p>
    </div>
    <div class="navigation-button next" onclick="next()">
        <span>&gt;</span>
    </div>
        
        
        `
}
updateUi();

document.getElementsByClassName("previous")[0].addEventListener("click", back);

function next() {
    index++;
    updateUi();
}
function back() {

    index--;
    updateUi();
}

document.getElementsByClassName("next")[0].addEventListener("click", next)





