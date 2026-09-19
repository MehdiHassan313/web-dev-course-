let fname = document.getElementById("fname");
let sname = document.getElementById("sname");
// let age = document.getElementById("age");
let salery = document.getElementById("salery");
// let gender = document.getElementById("gender");
let CNIC = document.getElementById("CNIC");
let submit = document.getElementById("submit");


                // submit
submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("First Name:", fname.value);
    console.log("Last Name:", sname.value);
    console.log("age:", age.value);
    console.log("salery:", salery.value);
    console.log("CNIC Number Is:", CNIC.value);

                // gender
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (gender) {
        console.log("Gender:", gender.value);
    } else {
        console.log("Gender: Not Selected");
    }

                // hobbies
    let hobbies = document.querySelectorAll(
        'input[name="hobbies"]:checked'
    );    
    console.log("Hobbies:");
    hobbies.forEach((hobby) => {
        console.log(hobby.value);
    });

                    // city
    let city = document.querySelector('select[name="city"]');
    console.log("City:", city.value);



                    // age
    // let age = document.addEventListener(e)=>{
    //     elseif ( age>5&& <=21);{
    //         alert("error");
    //     }
    // }

});



