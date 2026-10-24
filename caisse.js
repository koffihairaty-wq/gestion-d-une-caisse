// déclaration des variables;
let budget = 20000;
let prixcahier = 1500;
let quantitecahiers = 4;
let prixstylo = 500;
let quantitestylo = 3;
// calcul du montant des cahiers et stylos;
let montantdescahiers = prixcahier * quantitecahiers;
let montantdesstylos = prixstylo * quantitestylo;
console.log(montantdescahiers);
console.log(montantdesstylos);
// montant total des achats;
let montanttotaldesachats = montantdescahiers + montantdesstylos;
console.log(montanttotaldesachats);
//utilisation d'une condition pour afficher si le budget est suffisant ou pas;
if (montanttotaldesachats <= budget){
    console.log("budget suffisant");

}else {
    console.log("budget insuffisant");

}