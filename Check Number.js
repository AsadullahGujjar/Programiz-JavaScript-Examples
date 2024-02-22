function checkNumber(num){
    if(num>0){
        return (num + " is a positive number.");
    }
    else if (num < 0){
        return (num + " is a negative number.");
    }
    else if (num == 0){
        return (num + " is Zero.")
    }
}
console.log (checkNumber(0));