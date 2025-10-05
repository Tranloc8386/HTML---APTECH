

// nums.splice(2,2,99);
// console.log(nums)
// let hahs=[773,65,45]
// for(let i=0; i<hah.length; i++)
// {
//     console.log(hah[i]);
// }
let okoks = [
    {
        msv: 332,
        age: 19,
    },
    {
        msv: 12298,
        age: 22,
    }
];

// okoks.forEach((okok)=>{
//     console.log(okok,'okok');
// })

let el = okoks.filter((okok) => {
    return okok.age>20;

});
console.log(el)