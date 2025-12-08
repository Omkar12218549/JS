// console.log("O");
// console.log("M");
// console.log("K");
// console.log("A");
// console.log("R");

// const { use } = require("react");

function sayMyNAme(){
console.log("O");
console.log("M");
console.log("K");
console.log("A");
console.log("R");

}
// sayMyName// it is only refernce//function kha rhata hai
// sayMyNAme();//function execute ho rha hai

// function addTwoNum(num1,num2){//parameter
//     console.log(num1+num2)
// }
// addTwoNum(543,343)// argunment;// if the parameter does not pass then then o/p will be NaN(Not a number)
// const result=addTwoNum(23,23)
// console.log(result)//46 undefined

function addTwoNum(num1,num2){
    // let result=num1+num2
    // return result

    return num1+num2
}
const result=addTwoNum(12,23)
// console.log("Result: ",result)//35



// function loginUserMessage(username){
//     if(username===undefined){//if(!username)
//         console.log("Please enter userNmae")//Please enter userNmae
//         return

//     }
//     return `${username} just looged in`
// }
// console.log(loginUserMessage("OMKAR"))//OMKAR just looged in
// console.log(loginUserMessage(""))// just looged in
// console.log(loginUserMessage())//Please enter userNmae undefined


function loginUserMessage(username="OM"){//setting default value if any value does not pass then OM will pass other wise override occur
    if(username===undefined){//if(!username)
        console.log("Please enter userNmae")//Please enter userNmae
        return

    }
    return `${username} just looged in`
}
// console.log(loginUserMessage())//OM just looged in
// console.log(loginUserMessage("AKASHHSH̤"));//AKASHHSH̤ just looged in


//shopping card user just keep on adding do not know how much argunment is passed

// function calculateCartPrice(...num1){//rest operator acc to use case
//     return num1
// }
// console.log(calculateCartPrice(243,3442,3234,33434));//[ 243, 3442, 3234, 33434 ]

function calculateCartPrice(val1,val2,...num1){//rest operator acc to use case
    return num1
}
// console.log(calculateCartPrice(243,3442,3234,33434));//[ 3234, 33434 ]


const user={
    username:"Omkar",
    price:34455
}

function handleObject(anyObject){
      console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"SAM",
    price:399
})

const myNewArray=[200,400,600]

function returnSeconVal(getArray){
    return getArray[2]
}
// console.log(returnSeconVal(myNewArray))//600
// console.log(returnSeconVal([200,400,600]))//600


