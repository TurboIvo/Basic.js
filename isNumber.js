function isNumber (Num) {
let [Num1,Num2,Num3,Num4] = Num.map(Number);
let errors = [];

if ([Num1,Num2,Num3,Num4].every(isNaN)) {
    console.log("None is Number!")
    return;
}

if (isNaN(Num1)) errors.push(`"${Num[0]}" is not a Number!`);
if (isNaN(Num2)) errors.push(`"${Num[1]}" is not a Number!`);
if (isNaN(Num3)) errors.push(`"${Num[2]}" is not a Number!`);
if (isNaN(Num4)) errors.push(`"${Num[3]}" is not a Number!`);

if (errors.length > 0) {
    console.log("Please be careful!\n" + errors.join("\n"));
    return;
}

console.log(`"Your Numbers are:\n ${Num[0]}\n ${Num[1]}\n ${Num[2]}\n ${Num[3]}\n`);
}

isNumber(["37","9","16","2"]);