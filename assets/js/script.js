const firstsidebar = document.getElementById("sidebar_1");
const secondsidebar = document.getElementById("sidebar_2");
const thirdsidebar = document.getElementById("sidebar_3");

const bar = document.getElementById("bars");

const pageShow = document.getElementById("sidebar_page");
const shopShow = document.getElementById("sidebar_shop");


const pageHide = document.getElementById("s_page_hide");
const shopHide = document.getElementById("s_shop_hide");

const firstClose = document.getElementById("close_1");
const secondClose = document.getElementById("s_close_2");
const thirdClose = document.getElementById("s_close_3");



firstClose.addEventListener('click', function(){
     if(firstsidebar.style.display = "block"){
          firstsidebar.style.display = "none";
     }
})

bar.addEventListener('click', function(){
     firstsidebar.style.display = 'block';
})

pageShow.addEventListener('click', function(e){
     e.preventDefault();
     secondsidebar.style.display = 'block';
     firstsidebar.style.display = "none";
})

pageHide.addEventListener('click', function(){
     secondsidebar.style.display = 'none';
     firstsidebar.style.display = "block";
})
shopShow.addEventListener('click', function(){
     thirdsidebar.style.display = 'block';
     firstsidebar.style.display = "none";
})
shopHide.addEventListener('click', function(){
     thirdsidebar.style.display = 'none';
     firstsidebar.style.display = "block";
})
secondClose.addEventListener('click', function(){
     secondsidebar.style.display = 'none';
     firstsidebar.style.display = "none";
})
thirdClose.addEventListener('click', function(){
     thirdsidebar.style.display = 'none';
     firstsidebar.style.display = "none";
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// first slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
}

// s\second slishow
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}


// stick nav bar
// filter js code 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

     // Get the navbar
     var navbar = document.getElementById("sticky-nav");
     
     // Get the offset position of the navbar
     var sticky = navbar.offsetTop;
     
     // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky"      when you leave the scroll position
     function myFunction() {
       if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky")
       } else {
         navbar.classList.remove("sticky");
       }
}
