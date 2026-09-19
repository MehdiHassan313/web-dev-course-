let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let ph = document.getElementById("ph");
let dob = document.getElementById("dob");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {

    e.preventDefault();

    console.log("First Name:", fname.value);
    console.log("Last Name:", lname.value);
    console.log("Email:", email.value);
    console.log("Password:", pswd.value);
    console.log("Phone:", ph.value);
    console.log("Date of Birth:", dob.value);

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (gender) {
        console.log("Gender:", gender.value);
    } else {
        console.log("Gender: Not Selected");
    }

    let hobbies = document.querySelectorAll(
        'input[name="hobbies"]:checked'
    );

    console.log("Hobbies:");

    hobbies.forEach((hobby) => {
        console.log(hobby.value);
    });

});