// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const researchValue = urlParams.get("research");
const domain = urlParams.get("domain");
const email = urlParams.get("email");

// Vérifier si "research" est présent et l'afficher ou un autre paramètre attendu est présent
if (researchValue) {
  document.getElementById("researchText").innerText =
    "Research : " + decodeURIComponent(researchValue);
} else if (domain) {
  document.getElementById("researchText").innerText =
    "Research domain: " + decodeURIComponent(domain);
} else if (email) {
  document.getElementById("researchText").innerText =
    "Email : " + decodeURIComponent(email);
}
