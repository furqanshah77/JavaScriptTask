// // Task One


// // Get user input
// var name = prompt("Enter Your Name");
// var phoneNumber = prompt("Enter Your phone Number: ");
// var email = prompt("Enter Your Email: ");
// var password = prompt("Enter Your Password: ");
// var confirmPassword = prompt("Confirm Your Password: ");

// // Check for empty inputs
// if (!name || !phoneNumber || !email || !password || !confirmPassword) {
//     alert("Error: Please Fill in All The Fields.");
// } else {
//     // Check if password and confirm password match
//     if (password === confirmPassword) {
//         alert("Alert: You Are Successfully Registered!");
//     } else {
//         alert("Error: Password And Confirm Password Do Not Match.");
//     }
// }









// // Task Two


// var value = prompt("Enter Your Value");
// var string = value.toLowerCase();
// var len = string.length;
// var massege = "It Is A Palindrome";

// for (var i = 0; i < len / 2; i++); {
//     if (string[i] != string[len - 1 - i]) {
//         massege = "It Is Not A Palindrome";
//         // break;
//     }
// }
// alert(`${string} : ${massege}`);









// // Task Three


// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let evenNumber = [];
// let oddNumber = [];

// for (let i = 0; i < numberArray.length; i++) {

//     if (numberArray[i] % 2 == 0) {
//         evenNumber.push(numberArray[i]);
//     } else {
//         oddNumber.push(numberArray[i]);
//     }

// }

// document.write("Even Numbers: " + evenNumber.join(", ") + "<br>");
// document.write("Odd Numbers: " + oddNumber.join(", "));


// console.log("Even Numbers: " + evenNumber.join(", "));
// console.log("Odd Numbers: " + oddNumber.join(", "));