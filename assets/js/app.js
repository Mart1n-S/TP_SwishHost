let currentIndex = 0;
const cards = document.querySelectorAll("#carousel .card");
const totalCards = cards.length;
const carousel = document.getElementById("carousel");
const numberElement = document.getElementById("number");

// Largeur d'une carte
const cardWidth = cards[0].offsetWidth; // Dynamique pour gérer différentes largeurs de cartes

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Initialiser le carrousel à la première carte
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
