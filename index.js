     "use strict"

var nav = document.querySelectorAll("a");
var present = document.querySelectorAll("li")

for (var i = 0; i < nav.length; i++){
  nav[i].addEventListener("click", function() {
      if (this.classList.contains("active"))
      {
          this.classList.remove("active");
      }
   else{
       var activeLink = document.querySelector("a.active")
       if (activeLink){
           activeLink.classList.remove("active");
       }
       this.classList.add("active");
   }
  }
  );

  //stickynav
 function stickynav() {

  if (window.scrollY > 80) {
    document.querySelector(".container_flex").classList.add("sticky");
  } else if (window.scrollY <= 49) {
    document.querySelector(".container_flex").classList.remove("sticky");
  }
 
}
  window.addEventListener("scroll", stickynav)
   
  //typing effect
     let textsIWannaUse = ["deliver the best", "are efficient", "are reliable"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

  (function type() {
    
    if (count === textsIWannaUse.length) {
      count = 0;
    }

    currentText = textsIWannaUse[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }

     setTimeout(type, 300);
  })();

}
    var container = document.querySelector(".header_title");
    var navbar = document.querySelector(".navbar");
    var navlinks = document.querySelector(".nav_links");
    var hamburger = document.querySelector(".hamburger");
    var hamburgerlines = document.querySelector(".hamburger_line");
    var logo = document.querySelector(".logopart");
    var hamburgerElement = hamburgerlines.parentElement;
    
    function togglenavbar() {
      hamburgerElement.children[0].classList.toggle("first");
      hamburgerElement.children[1].classList.toggle("none");
      hamburgerElement.children[2].classList.toggle("second");
    }
   
    

    hamburger.addEventListener("click", function () {
      navlinks.classList.toggle("open");
      togglenavbar();
    }, true);

 

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_dot";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}


$(".scene .cards").click(function(){
  $('.scene .cards.is_flipped').not(this).removeClass('is_flipped');
  $(this).toggleClass('is_flipped');
})
