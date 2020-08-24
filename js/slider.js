let ra = document.querySelector(".right-arrow");
let la = document.querySelector(".left-arrow");
let slider = document.querySelectorAll(".slider-screen");
let slider_bar = document.querySelector(".slider-bar");

var timer = setInterval(function() {
  moveSlider();
  moveBar();
}, 10000);

ra.addEventListener("click", function() {
  clearInterval(timer);
  let child = document.querySelector("div.cur");
  let parent = child.parentNode;
  // console.log(Array.prototype.indexOf.call(parent.children, child));
  if (
    Array.prototype.indexOf.call(parent.children, child) <
    slider.length - 1
  ) {
    child.classList.remove("cur");
    child.nextElementSibling.classList.add("cur");
  } else {
    child.classList.remove("cur");
    parent
      .querySelector(".slider .inner-content > div:nth-of-type(1)")
      .classList.add("cur");
  }
  moveBar();
  timer = setInterval(function() {
    moveSlider();
    moveBar();
  }, 10000);
});
la.addEventListener("click", function() {
  clearInterval(timer);
  let child = document.querySelector("div.cur");
  let parent = child.parentNode;
  console.log(Array.prototype.indexOf.call(parent.children, child));
  if (Array.prototype.indexOf.call(parent.children, child) > 0) {
    child.classList.remove("cur");
    child.previousElementSibling.classList.add("cur");
  } else {
    child.classList.remove("cur");
    parent
      .querySelector(".slider .inner-content > div:last-of-type")
      .classList.add("cur");
  }
  moveBar();
  timer = setInterval(function() {
    moveSlider();
    moveBar();
  }, 10000);
});

function moveSlider() {
  let child = document.querySelector("div.cur");
  let parent = child.parentNode;
  if (
    Array.prototype.indexOf.call(parent.children, child) <
    slider.length - 1
  ) {
    child.classList.remove("cur");
    child.nextElementSibling.classList.add("cur");
  } else {
    child.classList.remove("cur");
    parent
      .querySelector(".slider .inner-content > div:nth-of-type(1)")
      .classList.add("cur");
  }
}

function moveBar() {
  slider_bar.classList.remove("full");
  setTimeout(function() {
    slider_bar.classList.add("full");
  }, 100);
}
moveBar();
