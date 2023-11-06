var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var milliseconds = document.getElementById("milliseconds")
var start = document.getElementById("start")
var lap = document.getElementById("lap")
var restart = document.getElementById("restart")

var millisecondsNumber = 0
var secondsNumber = 0
var minutesNumber = 0

function startTime() {

    setInterval(function () {
        millisecondsNumber++
        if (millisecondsNumber < 10) {
            milliseconds.innerHTML = "0" + millisecondsNumber
        } else {
            if (millisecondsNumber < 100) {
                milliseconds.innerHTML = millisecondsNumber

            } else {
                millisecondsNumber = 0
                secondsNumber++
                if (secondsNumber < 10) {
                    seconds.innerHTML = "0" + secondsNumber + ":"
                } else {
                    if (secondsNumber < 60) {
                        seconds.innerHTML = secondsNumber + ":"
                    } else {
                        secondsNumber = 0
                        minutesNumber++
                        if (minutesNumber < 10) {
                            minutes.innerHTML = "0" + minutesNumber + ":"
                        } else {
                            minutes.innerHTML = minutesNumber + ":"
                        }

                    }
                }
            }
        }





    }, 10)
}