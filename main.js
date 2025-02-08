let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    clearTimeout(timeout)
    showSlides(slideIndex += n);
  
}

function currentSlide(n) {
    clearTimeout(timeout)
    showSlides(slideIndex = n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timeout = setTimeout(function() {plusSlides(1)}, 5000);
}

var foodObj = document.getElementsByClassName('food');
var drinkObj = document.getElementsByClassName('drink');

var foodbutt = document.getElementById('foodButton')
var drinkbutt = document.getElementById('drinkButton')

foodbutt.style = "background-color: lightblue"
for (var i in foodObj){
    foodObj[i].style = "display: flex; flex-direction: column"
    console.log(i)
}
for (var i in drinkObj){
    drinkObj[i].style = "display: none"
}



function food(){
    for (var i in foodObj){
        foodObj[i].style = "display: flex; flex-direction: column"
    }
    for (var i in drinkObj){
        drinkObj[i].style = "display: none"
    }
    
    foodbutt.style = "background-color: lightblue"
    drinkbutt.style = "background-color: transparent"

}

function drink(){
    for (var i in drinkObj){
        drinkObj[i].style = "display: flex; flex-direction: column"
    }
    for (var i in foodObj){
        foodObj[i].style = "display: none"
    }
    