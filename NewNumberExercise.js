// function logToConsole(asd) {
//      console.log(asd);
// }


// function addOne(number) {
//     return number + 1;
// }
// let newNumber = addOne(5);
// logToConsole(newNumber);



// function addTwoNumbers(a, b) {
//     let Num1 = Number(a[0]);
//     let Num2 = Number(b[0]);
//     return Num1 + Num2;
//   }
//   let result = addTwoNumbers(["5"], ["4"]);
//   console.log(result);


// function addTwoNumbers(arr) {
//     let Num1 = Number(arr[0]);
//     let Num2 = Number(arr[1]);
//     return Num1 + Num2;
//   }
//   let result = addTwoNumbers(["5", "13"]);
//   console.log(result);


// function addTwoNumbers(a, b) {
//     let Num1 = Number(a[1]);
//     let Num2 = Number(b[0]);
//     return Num1 + Num2;
//   }
//   let result = addTwoNumbers(["5", "13"], ["2", "5"]);
//   console.log(result);


// function addTwoNumbers(a, b) {
//     let Num1 = Number(a[0]);
//     let Num2 = Number(a[1]);
//     let Num3 = Number(b[0]);
//     let Num4 = Number(b[1]);

//     let largest1 = Math.max(Num1,Num2);
//     let largest2 = Math.max(Num3,Num4);
//     let Smallest1 = Math.min(Num1,Num2);
//     let Smallest2 = Math.min(Num3,Num4);
   
//     return (largest1 + largest2) - (Smallest1 + Smallest2);
    
//   }
  
// let result = addTwoNumbers(["5", "13"], ["2", "5"]);
// console.log(result);



// function addTwoNumbers(a, b) {

//   let [Num1, Num2] = a.map(Number);
//   let [Num3, Num4] = b.map(Number);
  
//   if (isNaN(Num1)) {
//     console.log(`Invalid value in a[0]: "${a[0]}"`);
//     return;
//   } else if (isNaN(Num2)) {
//     console.log(`Invalid value in a[1]: "${a[1]}"`);
//     return;
//   } else if (isNaN(Num3)) {
//     console.log(`Invalid value in b[0]: "${b[0]}"`);
//     return;
//   } else if (isNaN(Num4)) {
//     console.log(`Invalid value in b[1]: "${b[1]}"`);
//     return;
//   }
  
//    else {

//   let largest1 = Math.max(Num1,Num2);
//   let largest2 = Math.max(Num3,Num4);
//   let smallest1 = Math.min(Num1,Num2);
//   let smallest2 = Math.min(Num3,Num4);

//   let result = (largest1 + largest2) - (smallest1 + smallest2);
//   console.log("Your new Number is" +" "+ result + ".");
//   return result;
  
// }
// }

// addTwoNumbers(["2", "8"], ["5", "43"]);



function addTwoNumbers(a, b) {

  let [Num1, Num2] = a.map(Number);
  let [Num3, Num4] = b.map(Number);
  let errors = [];

  // if (isNaN(Num1) && isNaN(Num2) && isNaN(Num3) && isNaN(Num4)) {
  //   console.log("All Positions are wrong! Please input numbers only!");
  //   return;
  // }

  if ([Num1,Num2,Num3,Num4].every(isNaN)) {
    console.log("All Positions are wrong! Please input numbers only!");
    return;
  }

  if (isNaN(Num1)) errors.push(`Invalid value in the first position: "${a[0]}"`);
  if (isNaN(Num2)) errors.push(`Invalid value in the second position: "${a[1]}"`);
  if (isNaN(Num3)) errors.push(`Invalid value in the third position: "${b[0]}"`);
  if (isNaN(Num4)) errors.push(`Invalid value in the fourth position: "${b[1]}"`);

  if (errors.length > 0) {
    console.log("Please fix the following:\n" + errors.join("\n"));
    return;
  }

  let largest1 = Math.max(Num1,Num2);
  let largest2 = Math.max(Num3,Num4);
  let smallest1 = Math.min(Num1,Num2);
  let smallest2 = Math.min(Num3,Num4);

  let result = (largest1 + largest2) - (smallest1 + smallest2);
  console.log("Your new Number is" +" "+ result + ".");
  return result;
  
}

addTwoNumbers(["ui", "d"], ["4e", "a"]);
