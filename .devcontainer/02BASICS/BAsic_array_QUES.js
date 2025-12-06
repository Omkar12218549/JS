//1. Reverse an array
//2.Find the largest number in an array
//3. Remove duplicate elements
//4. Check if element exists
//5. Sum of all elements

//Question1 : Reverse [1, 2, 3, 4, 5]
let arr=[1,2,3,4,5]
let reversed=arr.reverse()
// console.log(reversed)//[5,4,3,2,1]
// console.log(...reversed)//5,4,3,2,1

// Question2: Find the largest number in [10, 45, 23, 99, 67]
let array=[10,45,23,99,67]
let max=Math.max(...array)//... i.e spread operator is used to convert [10,45,23,99,67] to 10,45,23,99,67
// console.log(max)//99


//Question: Remove duplicates from [1,2,2,3,4,4,5]
let arr3=[1,2,2,3,4,4,5]
let neaARRAy=[...new Set(arr3)]//[...new Set(arr3)] it remove all the duplicates
// console.log(neaARRAy);


//Question: Check if 20 is present in [5,10,15,20,25]
let newarray=[5,10,15,20,25]
// console.log(newarray.includes(20));//true


//Question5: Find sum of [2,4,6,8]
let arrr=[2,4,6,8]
let sum=0;

for(let i=0;i<arrr.length;i++){
    sum +=arrr[i]
    // console.log(sum)
}
console.log("SUM = ",sum)





