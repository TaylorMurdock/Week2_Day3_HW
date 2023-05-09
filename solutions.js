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

// Count Odd Numbers
// Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.
// Example expected output:
// oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
// oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 16)

function oddNumberCount(num) { // creates a function that finds how many positive odd numbers are inside of the num given 
    let count = 0; // starts at 0 because we want positive numbers
    for (let i = 1; i < num; i+= 2) { // beginning with 1 (odd numbers only), if the count is less the num given, add 2 (to keep it odd)
        count+=1; // add one to the count and run it again till the loop stops
    }
    return count; // returns the total count after the loop as ran through all the nums from 1-num
}

oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
console.log(oddNumberCount(7))
oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 16)
console.log(oddNumberCount(16))

// Disemvoweling Trolls
// Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. That'll make them look real silly.
// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.
// Example expected output:
// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"

function trollsBeGone(sentence) { // takes a sentence as a parameter 
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // creates an array of vowels upper and lower case
    let newSentence  = ""; // a new string where the new sentence with no vowels will be held
    for (i=0; i < sentence.length; i +=1) { //runs through the sentence 
        if (!vowels.includes(sentence[i])) { //if the letter the loop is on is not a vowel then store it in newSentence 
            newSentence += sentence[i]
        }
    }
    return newSentence; // after the loop is done it returns the new sentence 
}
console.log(trollsBeGone("This website is for losers LOL")) // => returns "Ths wbst s fr lsrs LL"