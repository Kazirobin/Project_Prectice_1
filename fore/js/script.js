const bars=document.querySelector(".bars")
const navMenu=document.querySelector(".nav .menu")
const searchIcon=document.querySelector("#search__icon")
   bars.addEventListener('click',function(){
     bars.classList.toggle('active')
     navMenu.classList.toggle('active')
   })
   searchIcon.addEventListener('click',function(){
    bars.classList.toggle('active')
     navMenu.classList.toggle('active')
   })



   // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}