let arr = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

let unique = new Set(arr);  
for (let num of unique) {
  let count = arr.filter(x => x === num).length;
  console.log(`Phần tử ${num} xuất hiện ${count} lần`);
}