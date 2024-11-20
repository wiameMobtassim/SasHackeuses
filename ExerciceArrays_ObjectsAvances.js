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