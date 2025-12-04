"use strict";//treat all js code as newer version of code
//alert("hello omkar"). The error occurs because alert is not available in Node.js (it's a browser function). To fix the error, replace

console.log(8+9+"om"+23+12);
 console.log("hello omkar");//code readibility is violeted


//primitives datatypes
//number=>2 to power 53
//bigint=>more than 2 to power 53
//string=>'' "" ``
//boolean=>true/false
//null=>standalone value
//undefined=>value is not assigned
//object=>collection of key value pair
//symbol=>unique

// console.log(typeof Boolean)
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
// console.log(typeof Symbol);


const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id === anotherid)


//non-primitve (reference type) Array,Object,Function
let superHero=["IronMAn","Hulk","Wanda"]

let myObj= {
    name:"omkar",
    surname:"Yadav",
    status:"Nothing",

}

const myFun = function(){
    console.log("This is my first js function");
}

let ans=myFun();
// console.log(myObj)
// console.log(ans)
// console.log(superHero)

// ++++++++++++++++. Memory in JS
//  Primitive(Call by value)_______---------Use STACK. (main value does not change)
//  Non-Primitive(Call by reference)_______---------Use HEAP. 
let myName="OMkar YAdav"
let anotherNAme=myName

anotherNAme="AkashYAdav"
console.log(myName)//Omakr
console.log(anotherNAme)// Akash.  here value of main var  does not  change 
 

 // call by reference in HEAP
let userOne={
    email:"userone@gmail.com",
    upi:"userOneUPI"

}
let userTwo=userOne
userTwo.email="user@gmail.com"
userTwo.upi="user2UPI"

console.log(userOne)// main value changed to updated one
console.log(userTwo)
