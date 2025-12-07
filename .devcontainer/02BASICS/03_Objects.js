//singleton-constructor se banega. Object.create

const mySymbol=Symbol("key1");



// /object literal
const JsUser={
    name:"Omkar",
    "full name":"Omkar yadav",
    [mySymbol]:"myKey1",
    age:21,
    locaton:"Jaipur",
    email:"Omkar@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monady","Saturday"]
}
// console.log(JsUser.email)//not more efficient
// console.log(JsUser.full name);//it will give error
// console.log(JsUser["full name"])

// console.log(JsUser["email"])//omakr@gmail.com
// console.log(JsUser["email"])

// console.log(JsUser[mySymbol]);//myKey1// taking symbol and implementing in object always use square bracket to make it in Symbol type

// console.log(typeof mySymbol);//Symbol--to access it as symbol use square precket

// UPDATION_______+++++++++++++
JsUser.email="Akash@gmail.com";
// Object.freeze(JsUser);//no updation will take place
JsUser.email="akka@gmail.com";//email will not update agter this
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js User")
}

// console.log(JsUser.greeting);//undefined
// console.log(JsUser.greeting())//Hello Js User/// Undefined

JsUser.greetingTwo=function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());



