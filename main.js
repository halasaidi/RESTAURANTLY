

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/**/ 
let myNavbar = document.getElementById("navbar");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    myNavbar.style.display="flex";
    myNavbar.style.background="rgba(255, 255, 255, 0.938)";
  }else{
    myNavbar.style.background="rgba(255, 255, 255, 0.637)";
  }
}



