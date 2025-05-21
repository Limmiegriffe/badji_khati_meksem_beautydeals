document.addEventListener("DOMContentLoaded", function () {
    const selectTri = document.getElementById("tri");

    
    selectTri.addEventListener("click", function () {
        this.dispatchEvent(new Event("change"));
    });

    selectTri.addEventListener("change", trierProduits);

    function trierProduits() {
        const critere = selectTri.value;
        const produits = Array.from(document.querySelectorAll('.produit'));
        const container = document.querySelector('.conteneur-produits');

        produits.sort((a, b) => {
            const prixA = parseFloat(a.getAttribute('data-prix'));
            const prixB = parseFloat(b.getAttribute('data-prix'));
            const nomA = a.querySelector('h4').textContent.toLowerCase();
            const nomB = b.querySelector('h4').textContent.toLowerCase();

            switch (critere) {
                case 'prix-asc': return prixA - prixB; 
                case 'prix-desc': return prixB - prixA; 
                case 'nom-asc': return nomA.localeCompare(nomB); 
                case 'nom-desc': return nomB.localeCompare(nomA); 
                default: return 0;
            }
        });

        
        produits.forEach(produit => container.appendChild(produit));
    }

    
    trierProduits();
});
