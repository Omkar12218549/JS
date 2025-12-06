const marvel_hero=["Thor","Ironman","Spiderman"]
const dc_hero=["SuperMan","Flash","BAtman"]


//PUSHHH
// marvel_hero.push(dc_hero)
// console.log(marvel_hero)//we get array inside array --[ 'Thor', 'Ironman', 'Spiderman', [ 'SuperMan', 'Flash', 'BAtman' ] ]
// console.log(marvel_hero[3])//here second array is treated as one single element--[ 'SuperMan', 'Flash', 'BAtman' ] 
// console.log(marvel_hero[3][1])//Flash---we get the 1st element of the second array

// CONCAT
// const all_hero=marvel_hero.concat(dc_hero)
// console.log(all_hero)//[ 'Thor', 'Ironman', 'Spiderman', 'SuperMan', 'Flash', 'BAtman' ]


//SPREAD(MORE EFFICIENT)
// const all_hero=[...marvel_hero,...dc_hero]
// console.log(all_hero);//[ 'Thor', 'Ironman', 'Spiderman', 'SuperMan', 'Flash', 'BAtman' ]


//FLAT________++++++++++++++++++--------------
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array)//[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
// const real_anotherArray=another_array.flat(Infinity)//flat gives a single array 
// console.log(real_anotherArray)//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


//isArray________----------and from_______________--------------
// console.log(Array.isArray("Omkar"))//false---- check whether it is array or not 
// console.log(Array.from("omkar"))//[ 'o', 'm', 'k', 'a', 'r' ]--from convert into array
// console.log(Array.from({name:"omakr"}))//[] --- interesting situation 


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
