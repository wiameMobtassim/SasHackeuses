console.log("----------------1");
//Exercice 1
let nombres = [1, 2, 3, 4, 5];
console.log(nombres);
console.log("----------------2");
//Exercice 2
let fruits = ["apple","banana","cherry"];
console.log(fruits[1]);
console.log("----------------3");
//Exercice 3 
let nbrs = [10, 20, 30, 40];
console.log(nbrs);
nbrs[2] = 50;
console.log(nbrs);
console.log("----------------4");
//Exercice 4 
let frts = ["mango","peach","pear"];
console.log(frts);
frts[3] = "pomme";
console.log(frts);
console.log("----------------5");
//Exercice 5 
let animale = ["dog","cat","bird"];
console.log(animale);
animale.pop();
console.log(animale);
console.log("----------------6");
//Exercice 6 
let personne = { nom:"Wiame", age:22 };
for(let cle in personne){
    console.log(cle);
}