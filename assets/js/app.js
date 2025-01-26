// let currentIndex = 0;
// const cards = document.querySelectorAll("#carousel .card");
// const totalCards = cards.length;
// const carousel = document.getElementById("carousel");

// // Largeur d'une carte
// const cardWidth = 1057;

// const nextButton = document.getElementById("next");
// const prevButton = document.getElementById("prev");

// nextButton.addEventListener("click", () => {
//   // Incrémenter l'index de la carte suivante
//   currentIndex = (currentIndex + 1) % totalCards;
//   updateCarousel();
// });

// prevButton.addEventListener("click", () => {
//   // Décrémenter l'index de la carte précédente
//   currentIndex = (currentIndex - 1 + totalCards) % totalCards;
//   updateCarousel();
// });

// function updateCarousel() {
//   // Calculer l'offset en fonction de l'index actuel
//   const offset = -currentIndex * cardWidth;
//   carousel.style.transform = `translateX(${offset}px)`; // Déplacer le carrousel
// }
