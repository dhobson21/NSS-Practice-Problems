const foodListContainer = document.getElementById("food-list")

fetch("http://localhost:8088/food")
    .then(data => data.json()) //translating .json to .js
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            // console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(data => data.json()) //translating .json to .js
                .then(foodData => {
                    food.ingredients = []
                  

                   for (let i = 0; i < foodData.product.ingredients.length; i++) {
                       food.ingredients.push(` ${foodData.product.ingredients[i].text}`)
                     console.log(food.ingredients)
                     console.log(`"${food.name}"`, foodData)
                   }
              


                    
                    foodListContainer.innerHTML += 
                    `
                    <div id="items">
                    <h1>${food.name}</h1>
                    <h3>Ingredients</h3>
                    <p>${food.ingredients}</p>
                    `
                
                    
                    // food.ingredients   
                })
            })
        })

        // // Produce HTML representation
        // const foodAsHTML = foodFactory(food)

        // Add representaiton to DOM
        // addFoodToDom(foodAsHTML)