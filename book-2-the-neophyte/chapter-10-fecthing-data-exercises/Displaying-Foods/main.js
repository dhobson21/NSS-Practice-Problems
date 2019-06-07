// let food_List = document.querySelector(".foodList")

// const makeHTML = function (food) {
// return`
// <h1>${food.name}</h1>
// <p>${food.ethnicity}</p>
// <p>${food.category}</p>
// `
// }

// const insertHTML = function (func) {
//   food_List.innerHTML(makeHTML())
// }
let foodBox = item => {
  return `
  <div id="items">
  <h1>${item.name}</h1>
  <p>${item.ethnicity}<br>
  ${item.category}</p>
  </div>
  `
}

fetch("http://localhost:8088/food")

.then( food => food.json())

.then( food => {
  console.table(food)
  let foodContainer = document.querySelector("#food_List")
  food.forEach(item => foodContainer.innerHTML += foodBox(item))
  
  
  }
)






// fetch("http://localhost:8088/food")

// .then(food => food.json())
// .then(parsedFoods => parsedFoods.forEach(item => insertHTML())

// // 1) Ask the db to gimmie some data
// fetch("http://localhost:8088/food")
// // 2) wait, using a Promise
// // 3) receive the data
// .then( data => data.json())
// .then( food => {
//   // 5) loop over the array of objects
//   // 6) Do stuff to the data
//   console.table(food)
//   let foodContainer = document.querySelector("#food-list")
//   // 7) Display the data in the DOM as HTML
//   food.forEach( item => foodContainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`)
// })
