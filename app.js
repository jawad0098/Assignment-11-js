                                                           // CHAPTER=26-30

// /* Q.NO=1
// ANS=
// a). number
// const userInput = prompt("Enter a positive integer:");
// const number = parseInt(userInput);
//     if (!isNaN(number) && number > 0) {
//       document.write(`Number: ${number}`);
//     } else {
//       document.write("Invalid input. Please enter a positive integer.");
//  }
// B).round off value of the number
// var number = 12.52;
// var result = Math.round(number);
// console.log(result);
// C).floor value of the number
// var number = 12.52;
// var result = Math.floor(number);
// console.log(result);
// D).ceil value of the number
  //  var number = 11.01
  //  var result = Math.ceil(number);
  //  console.log(result); */
// ------------------------------------------------------------------------
// Q.NO=2
// ANS=
// a. number
// const userInput = prompt("Enter a negative floating-point number:");
// const number = parseFloat(userInput);
// if (!isNaN(number) && number < 0) {
//   document.write(`Number: ${number}<br>`);
//   // b. round off value of the number
//   const roundedValue = Math.round(number);
//   document.write(`Rounded Value: ${roundedValue}<br>`);
//   // c. floor value of the number
//   const floorValue = Math.floor(number);
//   document.write(`Floor Value: ${floorValue}<br>`);
//   // d. ceil value of the number
//   const ceilValue = Math.ceil(number);
//   document.write(`Ceil Value: ${ceilValue}<br>`);
// } else {
//   document.write("Invalid input. Please enter a negative floating-point number.");
// }
// ----------------------------------------------------------------------------------
// Q.NO=3
// ANS=

// let userInput = prompt("Put The Number");
// let number = parseFloat(userInput);
// if (!isNaN(number)) {
//   let absoluteValue = Math.abs(number);
//   alert(`The absolute value of ${number} is ${absoluteValue}`);
// } else{
//   alert("Invalid input. Please enter a valid number.");
// }
// -----------------------------------------------------------

// Q.NO=4
// ANS=

// let diceValue = Math.floor(Math.random() * 6) + 1;
// alert("Random Dice Value Is "+ diceValue)

// -------------------------------------------------

// Q.NO=5
// ANS=

// let randomValue = Math.random();
// let coinResult = randomValue < 0.5 ? "Heads" : "Tails";
// alert("Coin Toss Result: " + coinResult);
// -------------------------------------------------------

// Q.NO=6
// ANS=

// let randomValue = Math.floor(Math.random()*100) + 1 ;
// alert("Random Number Between 1 And 100 : " + randomValue)
// ---------------------------------------------------------
// Q.NO=7
// ANS=

// let userInput = prompt("Enter your weight:");

//     let regex = /^(\d+(\.\d+)?)\s*(kgs?|kilograms?)?$/i;

//     let match = userInput.match(regex);

//     if (match && match[1]) {
//       let weight = parseFloat(match[1]);
//       document.write(`Your weight is: ${weight} kilograms`);
//     } else {
//       document.write("Invalid input. Please enter a valid weight.");
//     }
// --------------------------------------------------------------------

// Q.NO=8
// ANS=

// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

// if (userGuess === secretNumber) {
//   alert(`Congratulations! ${secretNumber} is the correct number.`);
// } else {
//   alert(`Sorry, the correct number was ${secretNumber}. Try again!`);
// }










// =====================================================================================================================================
// =====================================================================================================================================
// =====================================================================================================================================
// =====================================================================================================================================


                                                            //  CHAPTER N0 = 31-34
                                                            // ====================

// Q.NO-1
// ANS=


// var date = new Date();
// document.write(date)

// ----------------------

// Q.NO-2
// ANS=
// var date = new Date();
// var month = date.getMonth();
// var arr =  ["January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"]
// alert(arr[month]);
// document.write("Current Month: " +arr[month]) 
// ---------------------------------------------
// Q.NO=3
// ANS=
// var date = new Date();
// var day = date.getDay();
// var arr = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];
// alert(arr[day]);
// document.write("Today is "+ arr[day])
// -----------------------------------------------------

// Q.NO=4
// ANS=
// var date = new Date();
// var day = date.getDay();
// var arr = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];
// if (day=== "Sat" || day=== "Sun"){
//   alert("it's fun day")
  
// } else {
//   alert("it's not fun day")
// }
// -----------------------------------------------------
// Q.NO=5
// ANS=
// let currentDate = new Date();
// let days = currentDate.getDate();
// if(days < 16){
//   alert("First fifteen days of the month")
// } else {
//   alert("Last days of the month")
// }
// ------------------------------------------
// Q.NO=6
// ANS=
// let date = new Date();
// let timeMili = date.getTime();
// let minut =Math.floor(timeMili / 600000)
// alert(`Minutes since midnight, Jan. 1, 1970: ${minut}`)
// -------------------------------------------------------
// Q.NO-7=
// ANS=
// let date = new Date();
// let hour = date.getHours();
// if(hour < 12){
//   alert("it's AM")
// } else{
//   alert("it's PM")
// }
// --------------------------
// Q.NO=8
// ANS=

// let lastDate = new Date(2020, 11, 31);
// document.write("Later date: "+lastDate);
// ----------------------------------------
// Q.NO=9
// ANS=
// let ramdan2015 = new Date("june 18, 2015")
// let date = new Date();
// let diffrence = date-ramdan2015;
// let daypased = Math.floor(diffrence/(1000*60*60*24))
// document.write(daypased + " days have passed since 1st Ramadan,2015")
// ---------------------------------------------------------------------
// Q.No=10
// ANS=
// let reference = new Date("january 1, 1970");
// let year2015 = new Date("january 1, 2015");
// let diffrence = year2015-reference;
// let second = Math.floor(diffrence/1000);
// document.write(second + " Seconds had passed since beginning of 2015 ")
// -----------------------------------------------------------------------
// Q.NO=11
// ANS=
// let currentDate = new Date();
// document.write(currentDate + "<br>");
// let currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// document.write("Updated Date and Time (1 hour ahead): " + "<br>" + currentDate)
// -------------------------------------------------------------------------------
// Q.NO=12
// ANS=
// let currentDate = new Date();
// document.write("Current Date : " + "<br>"+ currentDate + "<br>");
// currentDate.setFullYear(currentDate.getFullYear()-100);
// document.write("100 Year Back : " +"<br>" + currentDate)
// -----------------------------------------------------------------
// Q.NO=13
// ANS=
// var userAge = prompt("Put Your Age");
// var date = new Date();
// var year = date.getFullYear();
// var birthYear = year - userAge;
// alert("Your birth year is : "+ birthYear)
// -----------------------------------------
// Q.NO=14
// ANS=

    // Prompt user for input
    // let customerName = prompt("Enter customer name:");
    // let currentMonth = prompt("Enter current month:");
    // let numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
    // let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
    // let isLatePayment = confirm("Is the payment late? Click OK if yes, Cancel if not.");
    // let netAmountPayable = numberOfUnits * chargesPerUnit;
    // let latePaymentSurcharge = isLatePayment ? 0.1 * netAmountPayable : 0;
    // let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
    // // Display the bill details
    // document.write(`<h2>Bill Details</h2>`);
    // document.write(`Customer Name: ${customerName}<br>`);
    // document.write(`Current Month: ${currentMonth}<br>`);
    // document.write(`Number of Units: ${numberOfUnits}<br>`);
    // document.write(`Charges per Unit: ${chargesPerUnit.toFixed(2)}<br>`);
    // document.write(`Net Amount Payable (within Due Date): ${netAmountPayable.toFixed(2)}<br>`);
    // document.write(`Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}<br>`);
    // document.write(`Gross Amount Payable (after Due Date): ${grossAmountPayable.toFixed(2)}<br>`);
  // ------------------------------------------------------------------------------------------------
