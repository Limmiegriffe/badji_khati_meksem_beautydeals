
let PRIX_PAR_PRODUIT = 0;

function ouvrirPopup(bouton) {
  PRIX_PAR_PRODUIT = parseFloat(bouton.dataset.prix);
  document.getElementById("popup2").style.display = "flex";
  document.getElementById("resultat").textContent = "";
  document.getElementById("questionInscription").style.display = "none";
  document.getElementById("quantite2").value = "";
}

function fermerPopup() {
  document.getElementById("popup2").style.display = "none";
}

function calculerTotal() {
  const quantite2 = parseInt(document.getElementById("quantite2").value);
  if (isNaN(quantite2) || quantite2 <= 0) {
    alert("Veuillez entrer une quantité valide.");
    return;
  }
  const total = (Math.round(quantite2 * PRIX_PAR_PRODUIT * 100) / 100).toFixed(2);
  document.getElementById("resultat").textContent = `💸 Total: ${total} €`;
  document.getElementById("questionInscription").style.display = "block";
}

function rediriger(estInscrit) {
  if (estInscrit) {
    window.location.href = "authentification.html";
  } else {
    window.location.href = "inscription.html";
  }
}
