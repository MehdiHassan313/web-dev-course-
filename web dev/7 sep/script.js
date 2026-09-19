let plus = document.querySelector(".plus");
let age = document.getElementById("age");
let minus = document.querySelector(".minus");

let change = document.getElementById("change");
let number = 0;

console.log(number);
plus.addEventListener("click", () => {

    if (number <18) {
        number++;
        age.textContent = number;
        change.textContent = "INCREASE YOUR AGE";} 
    else {
    change.textContent = "AGE CANNOT BE LESS THAN 0";
}

});




minus.addEventListener("click", () => {
    if (number > 0) {
        number--;
        age.textContent = number;
        change.textContent = "DECREASE YOUR AGE";
    }
    else {
    change.textContent = "AGE CAN NOT BE LESS THAN 1";
}
});