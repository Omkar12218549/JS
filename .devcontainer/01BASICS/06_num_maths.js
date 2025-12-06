const score=400
const balance=new Number(1000)
// console.log(balance)
// console.log(score) 

// console.log(balance.toString().length);//4
// console.log(typeof balance)//object
// console.log(balance.toFixed(2))//1000.00
// const anotherNUM=128.9766//
// console.log(anotherNUM.toPrecision(4))//123.9
// console.log(anotherNUM.toPrecision(3))//124

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// ++++++++++. MATHS(comes directly by default)++++++++++++++

// console.log(Math)//Object [Math] {}

// console.log(Math.abs(-23))//23

// console.log(Math.round(23.345332))//23

// console.log(Math.ceil(4.3))//5

// console.log(Math.floor(4.3))//4

// console.log(Math.min(23,223,43,22))//22

// console.log(Math.max(23,223,43,22))//223

console.log(Math.random())//it always give value between 0 And 1
console.log(Math.random()*10+1)//it always in b/n 1to 10.9999
console.log(Math.floor(Math.random()*10)+1)//same as upper one

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//if u want value above certain min value the use 