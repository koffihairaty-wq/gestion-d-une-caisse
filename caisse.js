// déclaration des variables;
let budget = 20000;
let prixcahier = 1500;
let quantitecahiers = 10;
let prixstylo = 500;
let quantitestylo = 20;
// calcul du montant des cahiers et stylos;
let montantdescahiers = prixcahier * quantitecahiers;
let montantdesstylos = prixstylo * quantitestylo;
console.log("===== CAISSE =====");
console.log("cahiers :", montantdescahiers, "FCFA");
console.log("stylos :", montantdesstylos, "FCFA");
// montant total des achats;
let montanttotaldesachats = montantdescahiers + montantdesstylos;
console.log("total :", montanttotaldesachats, "FCFA");
console.log("budget :", budget, "FCFA");
//utilisation d'une condition pour afficher si le budget est suffisant ou pas;
if (montanttotaldesachats <= budget){
    console.log("budget suffisant");

}else {
    console.log("budget insuffisant");

}
// affichage du montant total et de la verification du budget;
// affichage des achats de 1 à 5;
for (let i = 1; i<= 5; i++){
    console.log("achat numéro", i);
}