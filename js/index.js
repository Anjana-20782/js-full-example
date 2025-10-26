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


// a=5;
var a;
// a=5
console.log(a);



