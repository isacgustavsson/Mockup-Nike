const slides = document.querySelectorAll(".carousel--hero--image");
const dots = document.querySelectorAll(".dot");

const list = document.querySelector(".carousel--list");
const item = document.querySelector(".carousel--list--item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let heroSlideIndex = 1;
showHeroSlides(heroSlideIndex);
showSlides();

function getCardWidth() {
  return item.offsetWidth + 25;
}

nextBtn.addEventListener("click", () => {
  list.scrollBy({ left: getCardWidth(), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  list.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
});

function heroSlides(n) {
  showHeroSlides((heroSlideIndex += n));
}

function showSlides() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  heroSlideIndex++;

  if (heroSlideIndex > slides.length) {
    heroSlideIndex = 1;
  }

  slides[heroSlideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

function showHeroSlides(n) {
  let i;

  if (n > slides.length) heroSlideIndex = 1;

  if (n < 1) heroSlideIndex = slides.length;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace("active", "");

  slides[heroSlideIndex - 1].style.display = "block";
  dots[heroSlideIndex - 1].className += " active";
}
