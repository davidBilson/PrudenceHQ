window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.boxShadow = "0px 0px 50px grey";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar").style.background = "#d3eae9";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

// Hamburger Menu Tablet/Mobile
const hamMenu = document.getElementById("ham");
const closeHam = document.querySelector(".closeHam");
const menu = document.querySelector('.menu-items');

 hamMenu.addEventListener("click", function() {
  menu.style.display = "flex";
  hamMenu.style.display = "none";
  closeHam.style.display = "block";
 });

 closeHam.addEventListener("click", function() {
  menu.style.display = "none";
  hamMenu.style.display = "block";
  closeHam.style.display = "none";
 });