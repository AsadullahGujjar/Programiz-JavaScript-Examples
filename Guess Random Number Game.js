function guessRandomNumber(lowestNumber, highestNumber, usersinput) {
    const value = Math.floor(Math.random() * (highestNumber - lowestNumber + 1) + lowestNumber);
    
    console.log("Enter values between", lowestNumber, "and", highestNumber);
    console.log("Generated random number:", value);

    if (usersinput === value) {
        return "You Won!";
    } else if (usersinput < value) {
        return "Guess a bit higher value.";
    } else if (usersinput > value) {
        return "Guess a bit lower value.";
    } else {
        return "Invalid Input!!!";
    }
}
console.log(guessRandomNumber(1, 10, 9));