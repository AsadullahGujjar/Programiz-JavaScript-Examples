function mergeAndRemoveDuplicateFromArray(){
    array1 = [0,1,2,3,4,5,6];
    array2 = [6,5,4,3,21,2,3,5,7,8];
    array = array1.concat(array2);
    len = array.length;
    for(i=0;i<len;i++){
        for(j=i+1;j<len;j++){
            if(array[i]===array[j]){
                array.splice(i,1);
                j--;
                len--;
            }
            else{
                continue;
            }
        }
    }
    return array;
}
console.log(mergeAndRemoveDuplicateFromArray());