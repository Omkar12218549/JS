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
chai()