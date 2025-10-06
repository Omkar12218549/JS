const accountid = 14107
let accountEmail="omkar@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
// var has scope problem
/*
prefer not to use var 
because of issue in block scope and functional scope
var has block scope problem
because of issue in loop and if else block

const has no scope problem
*/
//accountid=2
let accounstate;
accountEmail="om@.com"
accountPassword="54321"
accountCity="Delhi"

console.log(accountid);
console.table([accountid,accountEmail,accountPassword,accountCity,accounstate])
