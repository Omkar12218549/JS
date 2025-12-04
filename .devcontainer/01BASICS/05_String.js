let name="Omkar-YA-dav"
const repocount=50

// console.log(name + repocount + "value")

//string interpolation. (` `).  console.log(``);

// console.log(`my name is ${name} and my repoCount is ${repocount}`);

// anotherway to declare string is 
const gameName= new String("OMAKRYADAV")

console.log(gameName)

// console.log(gameName[0])
// console.log(gameName[1])
// console.log(gameName[2])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('Y'))

const newString=gameName.substring(0,4)
console.log(newString)

const newSlice=gameName.slice(-8,4)
console.log(newSlice)

const StringTrim="   gameified.    "
console.log(StringTrim)
console.log(StringTrim.trim())

const url="https://om.com/omkar%20Yadav"
console.log(url.replace("%20","-"))
console.log(url.includes("om"))


console.log(name.split('-'))