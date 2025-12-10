// const { use } = require("react");

const user={
    username:"Omkar",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        // this keyword is used to refer the current context
        console.log(this)//{ username: 'Omkar',price: 999,welcomeMessage: [Function: welcomeMessage]}}

}
}


// user.welcomeMessage()//Omkar , welcome to website
// user.username="OM"
// user.welcomeMessage()//OM , welcome to website

// console.log(this)//{} empty

// sabse jyada global object hai window object

// function chai(){
//     const username="omkar"
//     // console.log(this.username)//undefined
// }
// chai()

// const chai=function(){
//     const username="omkar"
//     console.log(this.username)//undefined
// }
// chai()

//ES6 me arrow fun ko laya gya isme bs function hta ke => replace kr dena hai


const chai=()=>{
    const username="omkar"
    console.log(this.username)//undefined
    console.log(this)//{}
}
// chai()

//()=>{}

    // const addtwoNUm=(num1,num2)=>{
    //     return num1+num2

    // }
    //   console.log(addtwoNUm(34,43))//77

 //arrow function using impicit returnn 
    //  const addtwoNUm=(num1,num2)=> num1+num2//both are the same 
    // const addtwoNUm=(num1,num2)=> (num1+num2)//both are the same
    // console.log(addtwoNUm(34,43))//77

    const addtwoNUm=(num1,num2)=> ({username:"omkar"})
    console.log(addtwoNUm(22,33))
    const objinFun=(num1,num2)=>({username:"AKKA"})
    console.log(objinFun(33,43))
    
