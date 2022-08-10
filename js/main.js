const elLoader = document.querySelector(".js-loader");
document.addEventListener("DOMContentLoaded", function (){
  setTimeout(function () {

    elLoader.classList.add("lds-facebook-wrapper-open");
  }, 1000);
});