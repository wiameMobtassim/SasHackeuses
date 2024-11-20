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