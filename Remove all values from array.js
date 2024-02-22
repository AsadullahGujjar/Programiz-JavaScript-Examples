function removeAllValuesFromArray(){
    array = [1,2,3,4,5,6];
    len = array.length;
    for(i=0;i<len;i++){
        array.pop();
    }
    return array;
}
console.log(removeAllValuesFromArray());