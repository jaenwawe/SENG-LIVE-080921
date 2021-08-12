// // creating objects 

// // literal syntax 

// let cat = {
//     name: 'Timmy',
//     breed: 'Siamese',
//     age: 2
// }

// const pikachu = {
//     name: 'Pikachu',
//     likes: 0,
//     img: 'www.img.com'
// }

// // accessing property values

// // bracket notation
// console.log(cat['breed'])

// // dot notation 
// console.log(cat.age)

// function printName(obj, property){
//     return obj[property]
// }

// console.log(printName(pikachu, 'name'))



// Let's access and return the value 'lightning-rod'
// console.log(pikachu.abilities[1].name)

let cat = {
    name: 'Timmy',
    breed: 'Siamese',
    age: 2
}

// modify an object property 
cat['age'] = 3

// console.log(cat)

// add a new property called 'fave_snack' to cat

// cat.fave_snack = 'cat nip'
cat['fave_snack'] = 'cat nip'

// console.log(cat)

// delete an object property 

delete cat.fave_snack

// console.log(cat)



// console.log(referenceOfPikachu)
// const referenceOfPikachu = pikachu 
// delete referenceOfPikachu.abilities 
// console.log(referenceOfPikachu)
// console.log(pikachu)

// console.log(referenceOfPikachu === pikachu)

// what is a non destructive way of making a copy of the object

// use spread operator make a copy of the original object

// const copyOfPikachu = {...pikachu}
// // console.log(copyOfPikachu === pikachu)

// const newPikachu = Object.assign({}, pikachu, {test: null})
// delete newPikachu.abilities
// // console.log(newPikachu)
// console.log(newPikachu)
// newPikachu.test = 'we did it!!!!'
// console.log(newPikachu)


// loop over an object 

// for..in 

const pikachu = {
    name: "Pikachu",
    img: "www.img.com",
    likes: 0,
    abilities: [
      {
          name: "static",
      },
      {
          name: "lightning-rod",
      },
    ],
  };

function loopObjs(obj){
    for (const property in obj){
        // so if key is returning the property of the object, how would i then return the value associated with the key
        // debugger;
        console.log(obj[property])
    }
}

// how to test loopObjs

// call it 

// loopObjs(pikachu)

// can use a debugger

console.log(Object.keys(pikachu))
console.log(pikachu[Object.keys(pikachu)[0]])
// pikachu['name']