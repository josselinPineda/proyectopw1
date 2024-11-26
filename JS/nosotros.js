const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);

setInterval(moveToRight, 3000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "none";
        setTimeout(() => {
            slider.style.transition = "transform 0.6s ease";
        }, 50);
        return;
    }
    counter++;
    operacion += widthImg;
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "transform 0.6s ease";
}

function moveToLeft() {
    if (counter <= 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * counter;
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "none";
        setTimeout(() => {
            slider.style.transition = "transform 0.6s ease";
        }, 50);
        return;
    }
    counter--;
    operacion -= widthImg;
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "transform 0.6s ease";
}
