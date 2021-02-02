//old js 1
// function doubleIt(num){
//     return num*2;
// }
//old js 2
// const doubleIt = function myFun(num){
//     return num * 2;
// }
////modern ES6
const doubleIt = num => num *2;
const add = (x,y=0) => x + y;
const give5 = () => 5;
const bishal = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum *diff;
    return result;
}

 const result = bishal(7,5);
console.log(result);