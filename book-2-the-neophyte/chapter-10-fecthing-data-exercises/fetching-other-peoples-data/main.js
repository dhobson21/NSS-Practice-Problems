const foodListContainer = document.getElementById("food-list")

fetch("http://localhost:8088/food")
    .then(response => response.json()) //translating .json to .js
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            // console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json()) //translating .json to .js
                .then(productInfo => {
                    food.ingredients = []
                    food.country = []
                    food.calories = []
                    food.fat = []
                    food.sugar = []

                   for (let i = 0; i < productInfo.product.ingredients.length; i++) {
                       food.ingredients.push(` ${productInfo.product.ingredients[i].text}`)
                     console.log(food.ingredients)
                     console.log(`"${food.name}"`, productInfo)
                   }
                   for (let i = 0; i < productInfo.product.countries_hierarchy.length; i++) {
                    food.country.push(` ${productInfo.product.countries_hierarchy[i]}`)
                  console.log("country", food.country)
                }
                // for (let i = 0; i < productInfo.product.nutriments.energy_serving; i++) {
                //     food.calories.push(` ${productInfo.product.nutriments.energy_serving[i].value}`)
                //   console.log(food.calories)
                // }
                  // for (let i = 0; i < productInfo.product.ingredients.length; i++) {
                //     food.ingredients.push(` ${productInfo.product.ingredients[i].text}`)
                //   console.log(food.ingredients)
                // }


                    
                    foodListContainer.innerHTML += 
                    `
                    <div id="items">
                    <h1>${food.name}</h1>
                    <h3>Ingredients</h3>
                    <p>${food.ingredients}</p>
                    <h3>Country of Origin</h3>
                    <p>${food.country}</p>
                    <h3>Calories per Serving</h3>
                    <p>${food.calories}</p>
                    <h3>Fat per Serving</h3>
                    <p>${food.fat}</p>
                    <h3>Sugar per Serving</h3>
                    <p>${food.sugar}</p>
                    </div>
                    `
                
                    
                    // food.ingredients   
                })
            })
        })

        // // Produce HTML representation
        // const foodAsHTML = foodFactory(food)

        // Add representaiton to DOM
        // addFoodToDom(foodAsHTML)