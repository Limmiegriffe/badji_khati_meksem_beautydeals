 
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const btnOui = document.getElementById("btnOui");
    const btnNon = document.getElementById("btnNon");

    function ajouterAuPanier(event) {
        event.preventDefault(); // Empêche un éventuel rechargement de page

        // Ici, tu peux ajouter la logique d'ajout au panier si elle existe déjà
        console.log("Produit ajouté au panier !");

        afficherPopup(event);
    }

    function afficherPopup(event) {
        let produit = event.target.closest(".produit"); // Trouver le produit cliqué

        if (produit) {
            let rect = produit.getBoundingClientRect(); // Récupère sa position

            // Positionner le pop-up juste en dessous du produit cliqué
            let topPosition = window.scrollY + rect.bottom + 10;
            let leftPosition = window.scrollX + rect.left;

            // Vérifie si le pop-up dépasse la fenêtre en bas
            if (topPosition + popup.offsetHeight > window.innerHeight + window.scrollY) {
                topPosition = window.scrollY + rect.top - popup.offsetHeight - 10; // Le mettre au-dessus
            }

            popup.style.top = `${topPosition}px`;
            popup.style.left = `${leftPosition}px`;
            popup.style.display = "block";
            popup.classList.add("show"); // Ajoute une classe pour une éventuelle animation CSS
        }
    }

    // Gérer le bouton "Oui" => Aller à la page panier
    btnOui.addEventListener("click", function () {
        window.location.href = "panier.html"; // Change 'panier.html' par le bon lien de ta page panier
    });

    // Gérer le bouton "Non" => Fermer le popup
    btnNon.addEventListener("click", function () {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300); // Laisse le temps à l’animation de disparaître avant de cacher le popup
    });

    // Attacher l'événement aux boutons "Ajouter au panier"
    document.querySelectorAll(".ajouter-panier").forEach(button => {
        button.addEventListener("click", ajouterAuPanier);
    });
});
