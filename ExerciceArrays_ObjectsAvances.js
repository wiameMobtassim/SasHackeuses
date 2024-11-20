console.log("-------------21");
//Exercice 21
let Nombre = [1, 2, 3, 4, 5];
function somme(a,b){
    return a + b;
}
let sm = Nombre.reduce(somme);
console.log(sm);
console.log("-------------22");
//Exercice 22
let livres = [
    {title:"la boite", author:"Sefrioui", year: 1954},
    {title:"candide", author:"Voltaire", year: 1759},
    {title:"dernier jour", author:"Hugo", year: 1729}
]
console.log(livres[0]);
console.log("-------------27");
//Exercice 27
let products = [
    {name : 'pro1' , price : 50},
    {name : 'pro2' , price : 150},
    {name : 'pro3' , price : 20},
    {name : 'pro4' , price : 500}
]
let expensiveProduct = products.filter(product => product.price < 100)
console.log(expensiveProduct);
console.log("-------------28");
//Exercice 28
let person ={
    name : "Wiame",
    age: 22, 
    city : "Deroua"
}

let keysPerson = Object.keys(person)
console.log(keysPerson)

let valuesPerson = Object.values(person)

console.log(valuesPerson);
