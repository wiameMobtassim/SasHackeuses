console.log("-------------21");
//Exercice 21
let Nombre = [1, 2, 3, 4, 5];
function somme(a,b){
    return a + b;
}
let sm = Nombre.reduce(somme);
console.log(sm);