// Happy Monday! Here are a couple of memory-jogging lightning exercises for ya:
// Exercise #1 Take the following data and represent it in

// 1. A string
// 2. An object
// 3. An array

// var string = "lunch, peanut butter and jelly, whole wheat, grape juice, apple"

// let food = {
//   meal: "lunch",
//   sandwich: "peanut butter and jelly",
//   bread: "whole wheat",
//   drink: "grape juice",
//   fruit: apple, 

// }

// const nourishment = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice", "apple"]

// Exercise #2 Use string template literal syntax to create the following sentence from the variables below
// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

console.log(`Hi, my name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years i'll be ${ parseInt(age) + 55}! I guess that means i'll be a ${dadJoke} then. Ha ha!`);

let blogContainer = document.querySelector('.blogPosts');
let myArticles = document.querySelectorAll('.blogArticle');

console.log('blogContainer', blogContainer);
console.log('myArticles', myArticles);

blogContainer.classList.add("currentBlog");

// Not the correct way to target nodes
// myArticles[0].classList.add("currentBlog");
// myArticles[1].classList.add("currentBlog");
// myArticles[2].classList.add("currentBlog");

//correct way to target nodes
for( let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add("currentBlog");
}





