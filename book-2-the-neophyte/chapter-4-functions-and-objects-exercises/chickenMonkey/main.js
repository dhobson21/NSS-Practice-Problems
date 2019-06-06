function chickenMonkey() {

    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
        // Divide the current number by 5 and 7, and check if the remainder is 0
        
        
        if  (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
            document.write("ChickenMonkey, "); // Prints numbers divisible by 5 and 7 and changes print to "Chicken Monkey"
        }
        else if (currentNumber % 5 === 0) {
            document.write("Chicken, "); // Prints numbers divisible by 5 and changes them to "Chicken"
        } 
        else if (currentNumber % 7 === 0) {
            document.write("Monkey, "); // Prints numbers divisible by 7 and changes them to "Monkey"
        } else {
            document.write(' ' + currentNumber + ', '); //prints every number not divisibile by 5, 7 or both
        }
    }
}
chickenMonkey();


    