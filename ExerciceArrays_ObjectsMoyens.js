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
