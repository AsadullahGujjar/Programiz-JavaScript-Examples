function checkLeapYear(year){
    result = year%4;
    if(result===0){
        return year + " is a Leap Year.";
    }
    else{
        return year + " is not a Leap Year.";
    }
}
console.log(checkLeapYear(2023));