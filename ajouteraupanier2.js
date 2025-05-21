function ajouterAuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
  
    const produitExiste = panier.find(p => p.id === produit.id);
  
    if (produitExiste) {
      produitExiste.quantite += 1;
    } else {
      panier.push({ ...produit, quantite: 1 });
    }
  
    localStorage.setItem('panier', JSON.stringify(panier));
    
  }
  
  function ajouterProduitalevre() {
    ajouterAuPanier({
      id: 1,
      nom: "Rouge a levre liquide mat",
      prix: 20.99,
      image: "image/rouge a levre liquide.webp"
    });
}
function ajouterProduityeux() {
    ajouterAuPanier({
      id: 2,
      nom: "fard a paupiere",
      prix: 35.95,
      image: "image/palette.webp"
    });
}
function ajouterProduitvisage() {
  ajouterAuPanier({
    id: 3,
    nom: "fond de teint soft touch",
    prix: 58,
    image: "image/fond de teint.webp"
  });
}
function ajouterProduitbrillant() {
  ajouterAuPanier({
    id: 4,
    nom: "highlighter",
    prix: 47.99,
    image: "image/highlighter.webp"
  });
}
function ajouterProduitmascara() {
  ajouterAuPanier({
    id: 5,
    nom: "mascara",
    prix:20,
    image:"image/mascara.webp"
  });
}

function ajouterProduitbronzer()
{
  ajouterAuPanier({
    id:6,
    nom: "bronzer",
    prix:29,
    image:"image/bronzer.webp"
  });
}
function ajouterproduitvest()
{
  ajouterAuPanier({
  id:7,
  nom: "Veste tendance",
  prix:40.99,
  image:"image/vestedestockage.jpeg"
  });
}
function ajouterproduithaut()
{
  ajouterAuPanier({
  id:8,
  nom:"Haut Comfy Chic",
  prix:9.99,
  image:"image/hautdestockage.jpg"
  });
}
function ajouterproduitensemble()
{
  ajouterAuPanier({
  id:9,
  nom:"Ensemble Chic",
  prix:49.99,
  image:"image/ensembledestockage.jpeg"
  });
}
function ajouterproduitcorset()
{
  ajouterAuPanier({
  id:10,
  nom: "Corset Sweet Hourglass",
  prix:39.99,
  image:"image/corsetdestockage.jpeg"
  });
}
function ajouterproduitrobe()
{
  ajouterAuPanier({
  id:11,
  nom:"Robe printaniére",
  prix:12,
  image:"image/robedestockage.jpeg"
  });
}
function ajouterproduitpull()
{
  ajouterAuPanier({
  id:12,
  nom:"Pull compfy",
  prix:9,
  image:"image/pulldestockage.jpeg"
  });
}
function ajouterproduittop()
{
  ajouterAuPanier({
  id:13,
  nom:"Red Velvet Top",
  prix: 5,
  image:"image/cuteredvelvettop.jpeg"
  });
}   
function ajouterproduitjean()
{
  ajouterAuPanier({
  id:14,
  nom:"Jean Vintage",
  prix:14.99,
  image:"image/cutejeans.jpeg"
  });
}
function ajouterproduitcarreaux()
{
  ajouterAuPanier({
  id:15,
  nom:"Robe à carreaux",
  prix:20,
  image:"image/cutedress.jpeg"
  });
}
function ajouterproduitcute()
{
  ajouterAuPanier({
  id:16,
  nom:"Stripped Top",
  prix: 5,
  image:"image/cutestrippedtop.jpeg"
  });
}
function ajouterproduitvintage()
{
  ajouterAuPanier({
  id:17,
  nom:"Haut vintage",
  prix:7,
  image:"image/cutetop.jpeg"
  });
}
function ajouterproduitjacket()
{
  ajouterAuPanier({
  id:18,
  nom:"Red Leather Jacket",
  prix: 15,
  image:"image/Red leather jacket.jpeg"
  });
}
function ajouterproduitvase()
{
  ajouterAuPanier({
  id:19,
  nom:"set de 2 vases",
  prix: 30.99,
  image:"image/vase.avif"
  });
}
function ajouterproduithorloge()
{
  ajouterAuPanier({
  id:20,
  nom:"horloge avec chiffre romain",
  prix: 15,
  image:"image/horloge.jpg"
  });
}
function ajouterproduitpot()
{
  ajouterAuPanier({
  id:21,
  nom:"pot de fleur original et aesthetic",
  prix: 18.99,
  image:"image/potfleur.jpg"
  });
}
function ajouterproduitmug()
{
  ajouterAuPanier({
  id:22,
  nom:"set de 2 mug en porcelaine",
  prix: 30.99,
  image:"image/mug.jpg"
  });
}
function ajouterproduitlampe()
{
  ajouterAuPanier({
  id:23,
  nom:"lampe vintage",
  prix: 20,
  image:"image/lampe.avif"
  });
}
function ajouterproduitrideaux()
{
  ajouterAuPanier({
  id: 24,
  nom:"rideaux",
  prix: 49,
  image:"image/rideaux.webp"
  });
}
function ajouterproduitpince()
{
  ajouterAuPanier({
  id: 25,
  nom:"Pince a chveveux en forme d'etoile hyper tendence",
  prix: 1.50,
  image:"image/pignette.jpg"
  });
}
function ajouterproduitnoeud()
{
  ajouterAuPanier({
  id: 26,
  nom:"Noeud papillon chic",
  prix: 5,
  image:"image/noeud.jpg"
  });
}
function ajouterproduitboucles()
{
  ajouterAuPanier({
  id: 27,
  nom:"Boucles d'oreilles preppy en forme d'etoiles",
  prix:0.99 ,
  image:"image/boucle.jpg"
  });
}
function ajouterproduitparure()
{
  ajouterAuPanier({
  id: 28,
  nom:"Parure coquette [edition limitée]",
  prix:7.50 ,
  image:"image/collier.jpg"
  });
}
function ajouterproduitbracelet()
{
  ajouterAuPanier({
  id: 29,
  nom:"Bracelet",
  prix: 6,
  image:"image/bracelet.jpg"
  });
}
function ajouterproduitsac()
{
  ajouterAuPanier({
  id: 30,
  nom:"Sac miumiu a la mode",
  prix: 14 ,
  image:"image/sac.jpg"
  });
}