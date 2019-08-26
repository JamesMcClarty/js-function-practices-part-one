for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5 and 7, and check if the remainder is 0  
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log("ChickenMonkey!") // ChickenMonkey will appear!
    }
    // Else, if it's only divisible by 5
    else if (currentNumber % 5 === 0) {
        console.log("Chicken!") // Chicken will appear!
    }
    //Else, if it's only divisible by 7
    else if (currentNumber % 7 === 0) {
        console.log("Monkey!") // Monkey will appear!
    }

    else{
        console.log(currentNumber);
    }

}