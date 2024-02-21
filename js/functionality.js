let slide_number = 1;
let next_slide = function (n) {
    display_slides(slide_number += n)
}
let display_slides = function (n) {
    let i;
    let slides = document.getElementsByClassName("c_image");
    if (n > slides.length) {
        slide_number = 1;
    }
    if (n < 1) {
        slide_number = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_number - 1].style.display = "block";
}
display_slides(slide_number)