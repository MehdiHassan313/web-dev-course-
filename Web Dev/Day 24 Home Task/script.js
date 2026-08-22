let num1 = 10;
let num2 = 2;
let operation = "*";

switch (operation) {

case "*" :
    console.log("The multipe Of Num 1 and Num 2 is:  ", num1 *num2);
    break;

case "+" :
    console.log("The sum of Num 1 and Num 2 is:  " , num1 + num2);
    break;

case "/" :
    console.log("The division of Num 1 and Num 2 is:  " , num1 / num2);
    break;

case "-" :
    console.log("The subtraction of Num 1 and Num 2 is:  ",  num1 - num2);
    break;

case "%" :
    console.log("The % of Num 1 and Num 2 is:  ",  num1 % num2);
    break;


default:
    console.log("You Enterd Invalid Operator!!!")
}