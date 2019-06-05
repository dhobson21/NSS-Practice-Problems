//Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value




const pet = {
  name: "Buster",
  species: "Yellow Lab",
  nicknames: ["B-man", "Butters", "Booster"],
  age: 8,
  goOut: function(action) {
      console.log(`${this.name} wants to go out and ${action}.`) //used this.name in case we need to change the name of the object
  }
}

pet.goOut("chase chipmunks")