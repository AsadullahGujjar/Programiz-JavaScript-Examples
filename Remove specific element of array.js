function removeSpecificItemFromArray(valueToRemove){
    array = [1,2,3,4,5,6];
    len = array.length;
    for(i=0;i<len;i++){
        if(array[i]===valueToRemove){
            array.splice(i,1);
            i--;
        }
    }
    return array;
}
console.log(removeSpecificItemFromArray(6));