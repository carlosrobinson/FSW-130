
   let hours= 0
   let min= 0
   let sec= 0
   let mil= 0
//Holds timer values
   let diplaySeconds = 0;
   let diplayMinutes= 0;
   let displayHours= 0

//  Holds setInterval() funcvtion
let interval = null

// Holds stopwatch status.
let status = "stopped"

// Increments hours, min, sec.
function stopWatch() {
    mil++
//Increments next value
    if(mil / 60 ===1) {
        mil= 0;
        sec++

        if(sec /60=== 1) {
            sec= 0;
            min++
        }
            if(min / 60 ===1) {
                min= 0;
                hours++
            
            }
    }

    //If hours, min, sec are only one digit (0 -9) add a leading 0 to value.
    if(sec < 10) {
        diplaySeconds = "0" + sec.toString();
    }
    else{
        diplaySeconds = sec
    }

    if(min < 10) {
        diplayMinutes = "0" + min.toString();
    }
    else{
        diplayMinutes = min
    }

    if(hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours
    }

    // Display Updated time to user
    document.getElementById("timer").innerHTML = displayHours + ":" + diplayMinutes + ":" + diplaySeconds + ":" + mil;
}



//Start Clock.
function startClock() {
    if(status === "stopped") {
        //Start the stop watch
        interval = window.setInterval(stopWatch, 15)
        document.getElementById("start")
        document.getElementById("stop").innerHTML= "Stop"
        status = "started"
    }
}
function stopClock() {
    window.clearInterval(interval)
    document.getElementById("stop").innerHTML= "Stop"
    status = "stopped"
}

//Reset stopwatch.
function reset() {
    window.clearInterval(interval)
    hours= 0;
    min= 0;
    sec= 0;
    document.getElementById("timer").innerHTML= "00:00:00:00"
    document.getElementById("stop").innerHTML= "Refresh Clock"
    document.getElementById("records").innerHTML= ""
}

//Record laps
const myRec = document.getElementById("records")
const recordlap = document.getElementById("lap")
recordlap.addEventListener("click", function(e) {
    e.preventDefault()
    let li = document.createElement("li")
    li.textContent = displayHours + ":" + diplayMinutes + ":" + diplaySeconds + ":" + mil;
    myRec.append(li)
})
