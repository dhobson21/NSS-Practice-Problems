let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
    copies_sold: 14000000,
    formats: ["radio", "TV", "film", "graphic novel"],
    ultimate_answer: {
      meaning_of_life: 42
    }
  }
};


// #1) Use dot notation to access the value of the key "meaning_of_life" in this object
      console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);
      //Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`
      let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life
      console.log(meaning)
      
//2) ## An object's properties can be accessed by dot notation or bracket notation     
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}`);

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`${employee["name"]} was hired on ${employee["hire_date"]}`)

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
// employee.vacation_days = 20
// console.log(employee)
employee["vacation_days"] = 20
// console.log(employee);

// 4. Use the variable below to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation? WANT TO USE BRACKET NOTATION OTHERWISE 'eom' IS THE NEW PROPERTY

let eom = "employee_of_the_month";
employee[eom]= false;
console.log(employee)

//#3) ## Objects' keys can contain values of any type, even functions.
let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}
//1. Add an action that the painter can perform.
painter.doSomething = function (action) {
  console.log(`The painter is ${action}`)
}
//2. Have her take that action by execucting the method you created.
painter.doSomething("climbing the ladder")

//Add a method that allows us to add new tools for the painter.
painter.newTools = function (tool) {
  painter.tools.push(tool);
  console.log(painter.tools);
}
painter.newTools("scraper");
painter.newTools("bucket");

painter.lostTools = function (tool) {
  console.log(`The painter fell off his ladder and lost his ${tool}`);
  painter.tools.pop();
}
// painter.lostTools = function (tool) {
// for (let i = 0; i < painter.tools.length; i++)
//    if(painter.tools[i] === tool ) {
//     //  delete painter.tools[i]
//       painter.tools.splice(i, 1)
//    }
// }
// painter.lostTools("")
// console.log(painter.tools)

//building Dom Components


// Create an index.html file with a section element with an ID of 'family':
// Loop over this array of objects and insert the names of the family members into `<h3>` tags, and append them to the DOM.
let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]

// Create an index.html file with a section element with an ID of 'family':
// Loop over this array of objects and insert the names of the family members into `<h3>` tags, and append them to the DOM.

//For Each
family.forEach( function(person) {
  document.querySelector("#family").innerHTML += `<h3>${person.name}</h3>`
})

//For Loop
for (let i = 0; i < family.length; i++) {
  document.querySelector("#family").innerHTML += `<h3>${family[i].name}</h3>`
}



//SCOPE AND VARIABLES AND STUFF

//assign a value of a string
var name = "Fred"

//reassign the value as an array
name = [1,2,3]

var
let
const 
