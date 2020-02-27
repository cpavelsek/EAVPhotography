

$(init);

function init(){
    $("#contactButton").click(displayContact);
    $("#refresh").click(refresh);
    $("#cost").click(estimate);
    var slideIndex = 1;

    showSlides(slideIndex);

}





// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots =$(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex  -1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function displayContact(){

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#myE-mail").val();
    var phone = $("#myPhone").val();

   $("#contactResponse").text("Thank you " + firstName + " " + lastName + " for contacting us.  We will respond to your inquiry within 24 hours.");
    //alert("Thank you " + firstName + " " + lastName + " for contacting us.  We will respond to your inquiry within 24 hours.");

    return false;

}

function estimate(){
    hours = $("#qtyHour").val();
    mileage = $("#qtyMile").val();
    copies = $("#qtyPhoto").val();



    finalCost = (hours *100) + (mileage * .25) + (copies*.35);
    tip = finalCost*.20;

    finalFinalCost= finalCost+tip;

    $("#finalEstimate").text("This is an estimated cost: $" + finalFinalCost + " Tip is: $"+ tip);

    if(finalFinalCost<300){
     $("#finalEstimate").text("This project isn't worth my time, please leave my website.")
    }
    else if(finalFinalCost<500){
        $("#finalEstimate").text("This is an estimated cost: $" + finalFinalCost + " Tip is: $"+ tip);
        $("#comment").text("Feel Free to contact me.")
    }
    else{
        $("#finalEstimate").text("This is an estimated cost: $" + finalFinalCost + " Tip is: $"+ tip);
        $("#comment").text("Contact me right away!")
    }
}
function refresh(){
    location.reload();

}