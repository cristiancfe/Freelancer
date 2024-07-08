// // const prevBtn = document.getElementById('prevBtn');
// // const nextBtn = document.getElementById('nextBtn');
// // const carouselImages = document.querySelector('.carousel-images');

// // let index = 0;

// // prevBtn.addEventListener('click', () => {
// //     index = (index > 0) ? index - 1 : carouselImages.children.length - 1;
// //     updateCarousel();
// // });

// // nextBtn.addEventListener('click', () => {
// //     index = (index < carouselImages.children.length - 1) ? index + 1 : 0;
// //     updateCarousel();
// // });

// // function updateCarousel() {
// //     const width = carouselImages.clientWidth;
// //     carouselImages.style.transform = `translateX(${-index * width}px)`;
// // }

// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const carouselImages = document.querySelector('.carousel-images');
// const totalImages = carouselImages.children.length;

// let index = 0;

// prevBtn.addEventListener('click', () => {
//     index = (index > 0) ? index - 1 : totalImages - 1;
//     updateCarousel();
// });

// nextBtn.addEventListener('click', () => {
//     index = (index < totalImages - 1) ? index + 1 : 0;
//     updateCarousel();
// });

// function updateCarousel() {
//     const width = carouselImages.clientWidth / totalImages;
//     carouselImages.style.transform = `translateX(${-index * width}px)`;
// }

// // Automação do carrossel
// setInterval(() => {
//     nextBtn.click();
// }, 3000); // Troca a cada 3 segundos

const carouselImages = document.querySelector('.carousel-images');

let index = 0;
const totalImages = carouselImages.children.length / 2; // Consider only the original set

function updateCarousel() {
    const width = carouselImages.clientWidth / totalImages;
    carouselImages.style.transform = `translateX(${-index * width}px)`;

    index = (index + 1) % totalImages;
}

// Automação do carrossel
setInterval(updateCarousel, 3000); // Troca a cada 3 segundos
