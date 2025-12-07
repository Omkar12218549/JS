// const { use } = require("react")

// const tinderUser=new Object()//singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammay"
tinderUser.IsloogedIn=false

// console.log(tinderUser);//{ id: '123abc', name: 'sammay', IsloogedIn: false }

const regularUser={
      email:"ala@gmail.com",
      fullName:{
        firstname:"Omkar",
        secondName:"Yadav"
      },
      address:"Goa"
}
// console.log(regularUser)//{ email: 'ala@gmail.com',fullName: { firstname: 'Omkar', secondName: 'Yadav' },address: 'Goa'}
// console.log(regularUser.fullName)//{ firstname: 'Omkar', secondName: 'Yadav' }
// console.log(regularUser.fullName.secondName)//Yadav

const obj1={1:"a",2:"b"}
const obj2={6:"j",7:"j",}
const obj3={1:"a",2:"b",73:"chh",45:"dh",56:"he"}
const obj={obj1,obj2,obj3}
//console.log(obj);//{obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' },obj2: { '6': 'j', '7': 'j', '8': 'j', '85': 'eh', '87': 'jjk' },obj3: { '1': 'a', '2': 'b', '45': 'dh', '56': 'he', '73': 'chh' }}
const OBJ=Object.assign({},obj1,obj2,obj3);
// console.log(OBJ);//{ '1': 'a', '2': 'b', '6': 'j', '7': 'j' }

const obbj={...obj1, ...obj2}
// console.log(obbj);//{ '1': 'a', '2': 'b', '6': 'j', '7': 'j' }


const user=[
  {
    id:1,
    name:"John"

  },
  {
      id:2,
    name:"kohn"
  },
  {
    id:3,
    name:"tphn"
  },
  {
    id:4,
    name:"Naanny"
  }
]
// console.log(user);
// console.log(user[1].name)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))//[ 'id', 'name', 'IsloogedIn' ]. in form of array
// console.log(Object.values(tinderUser))//[ '123abc', 'sammay', false ]. in form of array
// console.log(Object.entries(tinderUser))// get array inside array
console.log(tinderUser.hasOwnProperty('IsloogedIn'))//true



