console.log("-------------11");
//Exercice 11 
let elements = [1,2,3,4,5];
for (let ele in elements){
    console.log(ele);
}
console.log("-------------12");
//Exercice 12
let numbers = [1,2,3,4,5,6,7,8,9,10];
function estPair(n) {
    return n %2 === 0 ;
}
let numbersPairs = numbers.filter(estPair);
console.log("les nombres " + numbers);
console.log("les nombres pairs est "+ numbersPairs);

console.log("-------------13");
//Exercice 13
let tab1 = [1, 2, 3];
let tab2 = [4, 5, 6];
let fusion1 = tab1.concat(tab2);
console.log(fusion1);

console.log("-------------14");
//Exercice 14 
let fruits1 = ["apple","banana","cherry","date"];
fruits1.splice(1,1);
console.log(fruits1);

console.log("-------------15");
//Exercice 15 
//Methode 1
console.log("methode 1");
let numbers1 = [5,1,8,4,7];
function croissante(a,b){
    return a-b;
}
numbers1.sort(croissante);
console.log(numbers1);
console.log("Methode 2");
//Methode 2
numbers1.sort((a, b) => a - b);
console.log(numbers1);

console.log("-------------16");
//Exercice 16
let nbrs1 = [1, 2, 3, 4];
let multip = nbrs1.map(x=>x*2);
console.log(multip);
console.log("-------------17");

//Exercice 17
let car = {make:"Toyota",model:"Corolla",year: 2020, color:"purple"}
let propriete = Object.keys(car).length;
console.log(propriete);

console.log("-------------18");
//Exercice 18
let person = {nom:"Wiame",age: 22 ,occupation:"developpeuse"}
for (let cle in person){
    console.log(cle + ": " + person[cle]);
}