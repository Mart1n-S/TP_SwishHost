let currentIndex = 0;
const cards = document.querySelectorAll("#carousel .card");
const totalCards = cards.length;
const carousel = document.getElementById("carousel");
const numberElement = document.getElementById("number");

let cardWidth = cards[0].offsetWidth; // Initialiser la largeur d'une carte

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Mettre à jour la largeur des cartes dynamiquement lors du redimensionnement de l'écran
window.addEventListener("resize", () => {
  cardWidth = cards[0].offsetWidth; // Recalculer la largeur
  updateCarousel(); // Réajuster la position du carrousel
});

// Initialiser le carrousel
carousel.style.transform = `translateX(0px)`;
numberElement.textContent = currentIndex + 1;

nextButton.addEventListener("click", () => {
  // Incrémenter l'index de la carte suivante
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  // Décrémenter l'index de la carte précédente
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});

function updateCarousel() {
  // Calculer l'offset en fonction de l'index actuel
  const offset = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${offset}px)`; // Déplacer le carrousel

  // Mettre à jour le numéro affiché
  numberElement.textContent = currentIndex + 1;
}
