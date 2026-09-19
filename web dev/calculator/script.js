let inputfield = document.getElementById("display");
let equal = document.getElementById("equal");
let reset = document.getElementById("reset");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let decimal = document.getElementById("decimal");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let deleteBtn = document.getElementById("delete");

let calculation = "";
let isCalculated = false;

// ---- NUMBERS (0-9) ----
// FIX #1: sab digit buttons ek hi array mein daal ke loop se handle kiya,
// taake har button par "isCalculated" check consistently lage (pehle sirf 0-4 par tha)
let numberButtons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isCalculated) {
            calculation = "";
            isCalculated = false;
        }
        calculation += btn.value;
        inputfield.value = calculation;
    });
});

// ---- OPERATORS (+ - * /) ----
// FIX #2: operator dabane par isCalculated false kar dete hain,
// taake purana result operator ke sath continue ho (e.g. 10 + 5)
// FIX #6: agar last character pehle se koi operator hai, to naya operator
// usko REPLACE kar dega (append nahi hoga) — isse "5++-3" jaisi cheez nahi banegi
let operators = ["+", "-", "*", "/"];

function addOperator(symbol) {
    if (calculation === "") return; // shuru mein operator na lagne dein
    let lastChar = calculation.slice(-1);
    if (operators.includes(lastChar)) {
        calculation = calculation.slice(0, -1) + symbol; // replace last operator
    } else {
        calculation += symbol;
    }
    inputfield.value = calculation;
    isCalculated = false;
}

plus.addEventListener("click", (e) => {
    e.preventDefault();
    addOperator("+");
});

minus.addEventListener("click", (e) => {
    e.preventDefault();
    addOperator("-");
});

multiply.addEventListener("click", (e) => {
    e.preventDefault();
    addOperator("*");
});

divide.addEventListener("click", (e) => {
    e.preventDefault();
    addOperator("/");
});

// ---- DECIMAL ----
// FIX #5: current number segment mein pehle se "." ho to dobara add nahi karenge
decimal.addEventListener("click", (e) => {
    e.preventDefault();
    let lastNumber = calculation.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
        calculation += ".";
        inputfield.value = calculation;
    }
});

// ---- DELETE ----
deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calculation = calculation.slice(0, -1);
    inputfield.value = calculation;
});

// ---- RESET ----
reset.addEventListener("click", (e) => {
    e.preventDefault();
    calculation = "";
    isCalculated = false;
    inputfield.value = "";
});

// ---- EQUAL ----
// FIX #3 & #4: eval() ko try/catch mein wrap kiya (invalid expression crash nahi karegi)
// aur isFinite() se divide-by-zero (Infinity) ko "Error" mein convert kiya
equal.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        let result = eval(calculation);
        if (!isFinite(result)) {
            throw new Error("Invalid result");
        }
        inputfield.value = result;
        calculation = result.toString();
    } catch {
        inputfield.value = "Error";
        calculation = "";
    }
    isCalculated = true;
});