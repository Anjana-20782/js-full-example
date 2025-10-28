// 1

// function changeText() {
//       document.getElementById("message").innerHTML = "You clicked the button! 🎉";
//     }



//2

//  let a = 10;                                             //30
//   let b = 20;
//   let sum = a + b;

//   document.getElementById("result").innerHTML = "The sum is: " + sum;



//3 you can declare same variable name again using var 

// var name = "Anjana"; // Output: Anjana
// console.log(name);

// var names = "Sivadasan";  // Redeclared
// console.log(names); // Output: Sivadasan



//4 if var is declared inside the block ,it can still be acessed outside the block

// {
//   var city = "Kochi";
// }
// console.log(city);                          //kochi



//5 cannot redeclare in same block

// let age = 25;
// age = 26;  // ✅ can be updated
// console.log(age);



//6 if let is declared inside the block,outside the block is not working

// {
//   let city = "Kozhikode";
//   console.log(city); // ✅ Works
// }
// console.log(city);


//7 It means constant — the value cannot be changed once assigned.

// const country = "India";
// console.log(country);



//8 Difference Between var, let, and const

// var x = 10;
// let y = 20;
// const z = 30;

// x = 15;  // ✅ var can be updated
// y = 25;  // ✅ let can be updated
// //  z = 35; // ❌ const cannot be updated

// console.log(x, y, z); 



//9 hoisted

// console.log(a); // undefined
// var a = 5;

// console.log(b); // error
// let b = 5;


// // a=5;
// var a;
// // a=5                                   //5
// console.log(a);

// a=5
// let a;                                      //reference error
// console.log(a);



// console.log(x); // ❌ ReferenceError
// let x = 10;



//Example Comparing All Three

// console.log(a); // ✅ undefined (var is hoisted)
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError

// var a = 1;
// let b = 2;
// const c = 3;



// function normalFunc() {
//   console.log(this);
// }
// normalFunc()


// const arrowFunc = () => {
//   console.log(this);
// }
// arrowFunc()


// let numbers = [10, 20, 30, 40];

// let total = numbers.reduce(function(sum, num) {
//   return sum + num;
// }, 0);

// console.log(total);


// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubled);




//Simple Countdown Using Recursion


// function countdown(number) {
//   console.log(number);

//   // base condition – stop when number reaches 0
//   if (number > 1) {
//     countdown(number - 1); // recursive call
//   }
// }

// countdown(5);



//Factorial Using Recursion

function factorial(n) {
  if (n === 1) {      // base condition
    return 1;
  }
  return n * factorial(n - 1); // recursive call
}

let result = factorial(5);
console.log("Factorial is:", result);
