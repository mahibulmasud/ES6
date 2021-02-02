// function add(num1,num2){
//     return num1+num2;
// }

// const total = add (15,17);
// console.log(total);
////////////////////////////////////////////////////////////////
//if we forget to set data in the argument
function add(num1,num2 = 0){
    return num1+num2;
}

const total = add (15);
console.log(total);


