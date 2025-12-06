//ARRAY
const array=[1,2,3,4,5,6,7]
//array of javaScript is resizable means size can be change
//array of javaScript is mix of data type means number, sting, boolean etc.
//shallowCopy- REFERNCE-Value which is updated is also changed to main file
//deepCopy-BY VALUE -value updated is not changed to main file
// console.log(array[0])//1

const meHero=["ironman","HULk"]
const arr2=new Array(1,2,3,45,5)
// console.log(arr2)//[1,2,3,45,5]

//ARRRAY METHOD 
// array.push(99)//add 99 at the end
// array.push(69)//add 69 at the end 
// array.pop()//remove 69 from end



// array.unshift(9)//add 9 at begning
// array.shift()//remove 9 from begining


// console.log(array.includes(7))/// return boolean type
// console.log(array.indexOf(6))//


const newARR=array.join()
// console.log(array)//[1,2,3,4,5,6,7]
// console.log(newARR)//1,2,3,4,5,6,7
// console.log(typeof newARR)//type changes to string

//+++++++++SLICE and SPLICE

console.log("A ",array);//A [1,2,3,4,5,6,7]
const arr=array.slice(1,3)
console.log(arr)//[2,3]
console.log("B ",array)//B [1,2,3,4,5,6,7]

const arro=array.splice(1,3)
console.log("C ",array)//C [1,5,6,7]
console.log(arro)//[2,3,4]

// main difference between slice and splice is 
//-slice only return the section and does not include last index and do not changes the main array 
//-splice return the section and include last index and also remove the part in main array
















