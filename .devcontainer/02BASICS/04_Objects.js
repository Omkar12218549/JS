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
console.log(regularUser)//{ email: 'ala@gmail.com',fullName: { firstname: 'Omkar', secondName: 'Yadav' },address: 'Goa'}
console.log(regularUser.fullName)//{ firstname: 'Omkar', secondName: 'Yadav' }
console.log(regularUser.fullName.secondName)//Yadav


