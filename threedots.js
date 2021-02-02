const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [22,33,34];
// const allages = ages.concat(ages2).concat([500]).concat(ages3);
const allages2 = [...ages,...ages2,5,...ages3];
// console.log(allages2);
///////////////////////////////////////
// const business = 650;
// const minister = 450;
// const sochib = 250;
// const maximum = Math.max(business,minister,sochib);
// console.log(maximum);
const takapoisa = [650,450,250,200,900];
const maximum = Math.max(...takapoisa);
console.log(maximum);
