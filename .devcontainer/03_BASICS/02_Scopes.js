// // var c=30000

// const { use } = require("react")

// if(true){
// let a = 10
// const b=20
// var c=30

// // console.log(a);//10//inside scope it will give the correct answer but outside the scope it will give error
// // console.log(b);//20//

// }



// //console.log(a);//it will give error due to out of scope
// // console.log(b);//it will also give same error i.e b is not defined
// console.log(c);//30 //but this will give 30 which is the drawback of using var+++++++++


//

let a=300
if(true){
    let a=10
    const b=20
// console.log("INNER",a);//10
}
// console.log(a);//300

// var global scope ke variable ko inner scope wale se update kr deta hai jo ek draw back hai 

function one(){
    const username="Omkar"

    function two(){
        const website="Youtube"
        console.log(username)//Omkar
    }
    // console.log(website)//will give error bcz parent function cannot call child fun variable
    two();
}

// child fun can use parent fun var but parent cannot use child fun var
// one();

if(true){
    const username="Omkar"
    if(username=="Omkar"){
        const website=" youtube"
        // console.log(username+website)//Omkar youtube
    }
    // console.log(website)//will give error bcz outer loop cannot use inner loop variable
}
// console.log(username)//this will also give the error


// +++++++++++++++++++++INTERESTING_________+++++++++______))))))((((((((((()))))))))))


console.log(addone(5))
function addone(num){
    return num+1;
}
//addone(5);|^^^ when we move fun call above the function nothing will happen

// addtwo(9);error will come so if the fun is stored in variable then u c annot put it above the declaraton(hoisting problem) 
const addtwo=function(num){
    return num+2;
}
// addtwo(5);//|^^ when we move the fun call above it will give the error

