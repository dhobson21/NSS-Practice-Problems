let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        
            // If the current value of `i` divided by 3 has no
            // remainder, add an exclamation point to the end of
            // the word and then concatenate it to `buildMeUp`.
      if ((i + 1) % 3 === 0) {
          buildMeUp = buildMeUp + " " + sentence[i] + "!";
          // add 1 to i to start it from 1 and take remainder
        
      }
            // Otherwise, just concatenate the word itself.
            else {
                buildMeUp = buildMeUp + " " + sentence[i];
              
            }
         


        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

addExcitement(sentence)