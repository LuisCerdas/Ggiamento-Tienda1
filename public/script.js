const slides = document.getElementById('carouselSlides');
const totalSlides = slides.children.length;
let index = 0;

const updateCarousel = () => {
  slides.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});