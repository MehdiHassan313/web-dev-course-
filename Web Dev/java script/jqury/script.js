let button = $("button")
let p = $("#p")




button.click(()=> {
    if (button.text() === "Hide") {
        $("p").css("display","none");
        button.text("Show");
    } 
    else {
        $("p").css("display","block");
        button.text ("Hide");
    }
});







// $("#button").click(function () {
//     $("#p").toggle();
