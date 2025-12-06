//Dates
 let myDate=new Date()
//  console.log(myDate.toString());//Fri Dec 05 2025 04:19:43 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString());//Fri Dec 05 2025 04:19:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());//12/5/2025, 4:19:43 AM
// console.log(myDate.toISOString());//2025-12-05T04:19:43.001Z
// console.log(typeof myDate);//object


let myCreateddat3=new Date(2023,0,23,5,2)//moth start with ZERO in js
// console.log(myCreateddat3.toDateString())//Mon Jan 23 2023
// console.log(myCreateddat3.toLocaleString())//1/23/2023, 12:00:00 AM

let myadta=new Date("2-01-2014")
// console.log(myadta.toLocaleString())



let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myadta.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
console.log(
newDate.toLocaleString('default', {
    weekday:"short",
    // timeZone:
})
)