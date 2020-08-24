document.addEventListener("scroll", function() {
  if (window.scrollY > 40) {
    document.querySelector(".menu").classList.add("sticky-nav");
  } else {
    document.querySelector(".menu").classList.remove("sticky-nav");
  }
});

document.querySelector(".bars").addEventListener("click", function() {
  document.querySelector(".menu nav").classList.add("opened");
});
document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".menu nav").classList.remove("opened");
});
