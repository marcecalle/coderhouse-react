
//* forEach

// let numbers = [1,2,3,4,5,6]

//  let showNumbers = (num) => console.log(num)

// numbers.forEach(showNumbers) 

//* find 

// const courses = [
//    {name: 'Javascript', price: 15000},
//    {name: 'ReactJs', price: 22000}
// ]

// let searchByName = courses.find( (courseObject) => courseObject.name === 'Javascript' )

// let searchByName2 = courses.find( (courseObject) => courseObject.name === 'Angular' )

// let searchByPrice = courses.find( (courseObject) => courseObject.price === 22000 )

// console.log(searchByName);
// console.log(searchByName2);
// console.log(searchByPrice);

//* filter

// const courses = [
//    {name: 'Javascript', price: 15000},
//    {name: 'ReactJs', price: 22000},
//    {name: 'AngularJs', price: 22000},
//    {name: 'Desarrollo Web', price: 16000}
// ]

// let filterResult = courses.filter( (courseObject) => courseObject.price === 22000 )

// let filterResult2 = courses.filter((courseObject) => courseObject.price === 16000)

// let filterResultInclude = courses.filter((courseObject) => courseObject.name.includes('Js'))

// let filterResultByPrice = courses.filter((courseObject) => courseObject.price < 17000)

// console.log(filterResult)

// console.log(filterResult2)

// console.log(filterResultInclude)

// console.log(filterResultByPrice)

//* some

// const courses = [
//    {name: 'Javascript', price: 15000},
//    {name: 'ReactJs', price: 22000},
//    {name: 'AngularJs', price: 22000},
//    {name: 'Desarrollo Web', price: 16000}
// ]

// let someResult = courses.some((courseObject) => courseObject.name === 'Javascript')

// let someResult2 = courses.some((courseObject) => courseObject.name === 'Java')

// console.log(someResult)

// console.log(someResult2)

//* map

// const courses = [
//    {name: 'Javascript', price: 15000},
//    {name: 'ReactJs', price: 22000},
//    {name: 'AngularJs', price: 22000},
//    {name: 'Desarrollo Web', price: 16000}
// ]

// let mapResult = courses.map( courseObject => courseObject.name )

// let pricesWithIva = courses.map( courseObjet => courseObjet.price * 1.21)

// console.log(mapResult)

// console.log(pricesWithIva)

//* reduce

// const numbers = [0,1,2,3,4,5]

// const total = numbers.reduce( (total, element) => total += element , 0 )

// console.log(total)

//* sort
//! => MODIFICA EL ARRAY ORIGINAL

// const numbers = [40,1,5,200]
// const numbers2 = [40,1,5,200]

// numbers.sort((num1, num2) => num1 - num2)  // ascendente
// numbers2.sort((num1, num2) => num2 - num1) // descendente

// console.log(numbers);
// console.log(numbers2);

// const courses = [
//    {name: 'Javascript', price: 15000},
//    {name: 'ReactJs', price: 22000},
//    {name: 'AngularJs', price: 22000},
//    {name: 'Desarrollo Web', price: 16000}
// ]

// // ascendente
// courses.sort((a, b) => {
//    if(a.name > b.name) {
//       return 1
//    }
//    if(a.name < b.name) {
//       return -1
//    }
//    return 0
// })

// // descendente
// courses.sort((a, b) => {
//    if(a.name > b.name) {
//       return -1
//    }
//    if(a.name < b.name) {
//       return 1
//    }
//    return 0
// })

// console.log(courses)

