// Récupérer le panier depuis le localStorage ou créer un panier vide
let panier = JSON.parse(localStorage.getItem('panier')) || [];

function afficherPanier() {
  const panierDiv = document.getElementById("panier");
  panierDiv.innerHTML = "";

  panier.forEach(produit => {
    const produitDiv = document.createElement("div");
    produitDiv.className = "produit";
    produitDiv.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <div class="produit-info">
        <h4>${produit.nom}</h4>
        <p>${produit.prix}€</p>
      </div>
      <input type="number" min="1" class="quantite" value="${produit.quantite}" onchange="changerQuantite(${produit.id}, this.value)">
      <button class="bouton-supprimer" onclick="supprimerProduit(${produit.id})">Supprimer</button>
    `;
    panierDiv.appendChild(produitDiv);
  });

  calculerTotal();
}

function changerQuantite(id, nouvelleQuantite) {
  const produit = panier.find(p => p.id === id);
  if (produit) {
    produit.quantite = parseInt(nouvelleQuantite);
    sauvegarderPanier();
    calculerTotal();
  }
}

function supprimerProduit(id) {
  panier = panier.filter(p => p.id !== id);
  sauvegarderPanier();
  afficherPanier();
}

function calculerTotal() {
  let total = 0;
  panier.forEach(p => {
    total += p.prix * p.quantite;
  });
  document.getElementById("total").innerText = `Total : ${total}€`;
}



function confirmerAchat() {
  const confirmation = confirm("Êtes-vous inscrit ?");
  if (confirmation) {
    window.location.href = "authentification.html";
  } else {
    window.location.href = "inscription.html";
  }
}

function sauvegarderPanier() {
  localStorage.setItem('panier', JSON.stringify(panier));
}

// Au chargement de la page
afficherPanier();
