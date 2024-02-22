function checkForSpecificItemInArray(valueToCheck){
    array = [1,2,3,4,5,6];
    len = array.length;
    for(i=0;i<len;i++){
        if(array[i]===valueToCheck){
            return valueToCheck + " exists in array.";
        }
    }
    return valueToCheck + " does not exists in array.";
}
console.log(checkForSpecificItemInArray(2));