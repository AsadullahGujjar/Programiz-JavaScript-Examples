function randomNumberBetweenInterval(min,max){
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return "Random number between "+ min +" and " + max + " is "+ result+".";
}
console.log(randomNumberBetweenInterval(1,50));