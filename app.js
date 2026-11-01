// // // Qustion Number One 


// // function addingNumbers(num1 , num2){
// //     return num1 + num2
// // }
// // console.log(addingNumbers(5 , 10));



// // // Question Number Two


// // function subtractingNumbers(num1 , num2){
// //     return num1 - num2
// // }
// // console.log(subtractingNumbers(98 , 87));



// // // Question Number Three 



// // function multyplingNumbers(num1 , num2) {
// //     return num1 * num2
// // }
// // console.log(multyplingNumbers(69 , 89))



// // // Questionm Number Four 




// // function dividingNumbers(num1 , num2) {
// //     return num1 / num2
// // }
// // console.log(dividingNumbers(65,5));




// // // Question Number Five 



// // function gettingRemainder(num1 , num2) {
// //     return num1 % num2
// // }
// // console.log(gettingRemainder(10 , 2));






// // // Question Number Six 







// // function checkPositive(num1 , num2){
// //     if(number < 0){
// //         return "Not Positive Number"
// //     } else {
// //         return "Positive Number"
// //     }
// // }
// // console.log(checkPositive(90));





// // // Question Number Seven 




// // function negativeNumbers(num1 , num2){
// //     if(number > 0){
// //         return "Positive Number"
// //     } else {
// //         return "Negative Number"
// //     }
// // }
// // console.log(negativeNumbers(-67));









// // // Quetion Number eight 




// // function evenNumber(num1 , num2) {
// //     if(number / 2){
// //         return "Even Number"
// //     } else {
// //         return "Odd Number"
// //     }
// // }

// // console.log(evenNumber(10));






// // // Question Number Nine 






// // function equalNumber(num1 , num2) {
// //     if(num1 = num2){
// //         return "Equal Number"
// //     } else{
// //         return "Not Equal"
// //     }
// // }

// // console.log(equalNumber(89 , 89));










// // // Question Number Ten   


// // function compareNumbers(a, b) {
// //     if (a > b) {
// //         return "Greater";
// //     } else {
// //         return "Smaller";
// //     }
// // }

// // console.log(compareNumbers(10, 5));
// // console.log(compareNumbers(3, 8)); 



// // // Question NUmber Eleven 

// // function fullName(firstName, lastName) {
// //     return firstName + " " + lastName;
// // }

// // console.log(fullName("Ali", "Khan"));







// // // Question Number Twelve 



// // function checkResult(score) {
// //     if (score >= 40) {
// //         return "Pass";
// //     } else {
// //         return "Fail";
// //     }
// // }

// // console.log(checkResult(75));
// // console.log(checkResult(30)); 






// // // Question Number Thirteen 




// // function checkAge(age) {
// //     if (age >= 13 && age <= 19) {
// //         return "Teenager";
// //     } else {
// //         return "Not a Teenager";
// //     }
// // }

// // console.log(checkAge(15)); 
// // console.log(checkAge(25)); 





// // // Question Number Fourteen 

// // function greet(name) {
// //     return "Hello, " + name + "!";
// // }

// // console.log(greet("Ahmed"));




// // // Question Number Fifteen 

// // function checkEligibility(age) {
// //     if (age >= 18) {
// //         return "Eligible";
// //     } else {
// //         return "Not Eligible";
// //     }
// // }

// // console.log(checkEligibility(20));
// // console.log(checkEligibility(16)); 





// // // Question Number Sixteen 




// // function absoluteValue(num) {
// //     if (num < 0) {
// //         return -num;
// //     } else {
// //         return num;
// //     }
// // }

// // console.log(absoluteValue(-5));
// // console.log(absoluteValue(10)); 
// // console.log(absoluteValue(0));  





// // // Question Number Seveteen 





// // function checkTemperature(temp) {
// //     if (temp > 30) {
// //         return "Hot";
// //     } else if (temp < 10) {
// //         return "Cold";
// //     } else {
// //         return "Normal";
// //     }
// // }

// // console.log(checkTemperature(35)); 
// // console.log(checkTemperature(5));  
// // console.log(checkTemperature(20)); 



// // // Question Number Eighteen 




// // function checkTriangle(a, b, c) {
// //     if (a === b && b === c) {
// //         return "Equilateral";
// //     } else if (a === b || b === c || a === c) {
// //         return "Isosceles";
// //     } else {
// //         return "Scalene";
// //     }
// // }

// // console.log(checkTriangle(5, 5, 5));
// // console.log(checkTriangle(5, 5, 3)); 
// // console.log(checkTriangle(3, 4, 5));




// // // Question Number Ninteen 



// // function discountedPrice(price, discount) {
// //     let finalPrice = price - (price * discount / 100);
// //     return finalPrice;
// // }

// // console.log(discountedPrice(1000, 20)); 
// // console.log(discountedPrice(500, 10));  



// // // Question Number Twenty  




// // function checkPassword(password) {
// //     if (password.length >= 8) {
// //         return "Valid Password";
// //     } else {
// //         return "Too Short";
// //     }
// // }

// // console.log(checkPassword("Ahmed123"));
// // console.log(checkPassword("abc123"));   






// // // DOM QUESTIONS 


// document.getElementById("message").textContent = "Welcome!";






// function showName() {
//     let name = document.getElementById("nameInput").value;
//     document.getElementById("result").textContent = name;
// }






// function changeColor() {
//     document.getElementById("container").style.backgroundColor = "lightblue";
// }






// document.getElementById("mainTitle").style.color = "red";
















// function add() {
//     let a = Number(document.getElementById("first").value);
//     let b = Number(document.getElementById("second").value);

//     let result = a + b;

//     document.getElementById("sum").innerHTML = result;
// }



// function changeText() {
//     document.querySelector(".description").innerHTML = "Updated successfully";
// }



// let box = document.getElementById("box");

// box.style.width = "200px";
// box.style.backgroundColor = "green";



// document.querySelector("p").style.fontSize = "24px"; 



// document.getElementById("btn").onclick = function() {
//     let name = document.getElementById("fullName").value;

//     document.getElementById("greeting").innerHTML = "Hello, " + name;
// };


// let elements = document.querySelectorAll(".highlight");

// elements.forEach(function(item) {
//     item.style.color = "orange";
// });





// function showEmail() {
//     let email = document.getElementById("email").value;

//     console.log(email);
// }


// function checkAgree() {
//     let check = document.getElementById("agree").checked;

//     if (check == true) {
//         document.getElementById("result").innerHTML = "Agreed";
//     } else {
//         document.getElementById("result").innerHTML = "Not Agreed";
//     }
// }



