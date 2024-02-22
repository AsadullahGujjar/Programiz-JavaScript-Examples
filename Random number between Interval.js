function randomBetInterval(lowestNumber,highestNumber){
    return Math.floor(Math.random() * (highestNumber - lowestNumber) + lowestNumber);
}
console.log(randomBetInterval(1,100));