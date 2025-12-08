// // var c=30000

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
    constb=20
console.log("INNER",a);//10
}
console.log(a);//300

// var global scope ke variable ko inner scope wale se update kr deta hai jo ek draw back hai 