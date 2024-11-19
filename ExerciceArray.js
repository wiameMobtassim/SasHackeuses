//Exemple 1 // Array
// const fruits = ["Pomme", "Banane", "Cerise"]; 
// console.log(fruits[0]); 
// console.log(fruits.length); 

//Exemple 2 // Object
// const utilisateur = { 
//     nom: "Alice", 
//     âge: 25, 
//     profession: "Développeuse" 
// };
// console.log(utilisateur.nom);
// console.log(utilisateur["âge"]); 

//Exemple 3 // For..in
// const utilisateur = { 
//     nom: "Alice", 
//     âge: 25, 
//     profession: "Développeuse" 
// };

// for (const clé in utilisateur) {
//     console.log(`${clé} : ${utilisateur[clé]}`);
// }
//Exemple 4 // For..of
// const fruits = ["Pomme", "Banane", "Cerise"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }

//Exemple Combine 
// const utilisateurs = [
//     { nom: "Alice", âge: 25 },
//     { nom: "Bob", âge: 30 },
//     { nom: "Charlie", âge: 35 }
// ];

// for (const utilisateur of utilisateurs) {
//     console.log("Utilisateur :");
//     for (const clé in utilisateur) {
//         console.log(`${clé} : ${utilisateur[clé]}`);
//     }
// }
//Exemple Modif/supp/ajou

const utilisateur = {
    nom: "Alice",
    âge: 25,
    profession: "Développeuse"
};
// Modifier une propriété existante
// utilisateur.age = 100;
// console.log(utilisateur.age); // Affiche : Bob
// // Modifier une propriété avec la notation par crochets
// utilisateur["profession"] = "Designer";
// console.log(utilisateur); 
// // // Ajouter une propriété
// utilisateur.adresse = "Paris";
// console.log(utilisateur);
// // Supprimer une propriété existante
delete utilisateur.âge;
console.log(utilisateur);
 

