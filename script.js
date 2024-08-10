let burger = document.querySelector(".burger");
let xMark = document.querySelector(".xMark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  xMark.style.display = "block";
  mobileMenu.classList.add("show");
});

xMark.addEventListener("click", () => {
  xMark.style.display = "none";
  burger.style.display = "block";
  mobileMenu.classList.remove("show");
});
