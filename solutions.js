// setAlarm
// Write a function named setAlarm that has two arguments.
// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.
// Example expected output:
// setAlarm(true, true) // => returns false
// setAlarm(false, false) // => returns false
// setAlarm(false, true) // => returns false
// setAlarm(true, false) // => returns true

function setAlarm(employed, vacationing) {
    if (employed && !vacationing) {  // if employed and not vacationing (! means false) return true
        return true; 
    } else { // you are employed and on vacation. You are not employed and not on vacation. You are not employed and on vacation.
        return false;
    }
}

setAlarm(true, true) // => returns false (working and not vacationing)
console.log(setAlarm(true, true))
setAlarm(false, false) // => returns false (not working and not vacationing)
console.log(setAlarm(false, false))
setAlarm(false, true) // => returns false (not working and vacationing )
console.log(setAlarm(false, true))
setAlarm(true, false) // => returns true (working and not vacationing)
console.log(setAlarm(true, false))

