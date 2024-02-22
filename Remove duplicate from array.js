function removeDuplicateFromArray(){
    array = [0,0,1,2,2,3,3,4,5,6,6,6,7];
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
console.log(removeDuplicateFromArray())