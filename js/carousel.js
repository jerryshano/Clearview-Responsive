const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arrange the slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
//move slides to Left on click
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});
//move slide to Right on click
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});
//move to slide on track indicator click
dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on ?
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  // if (targetIndex === 0) {
  //   prevButton.classList.add("is-hidden");
  //   nextButton.classList.remove("is-hidden");
  // } else if (targetIndex === slides.length - 1) {
  //   prevButton.classList.remove("is-hidden");
  //   nextButton.classList.add("is-hidden");
  // } else {
  //   prevButton.classList.remove("is-hidden");
  //   nextButton.classList.remove("is-hidden");
  // }
});
