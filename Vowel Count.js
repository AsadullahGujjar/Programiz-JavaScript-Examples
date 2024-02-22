function vowelCount(string){
    let array = ['a','e','i','o','u','A','E','I','O','U'];
    size = string.length;
    size1=array.length;
    count = 1;
    for (i = 0; i<=size;i++){
        for (j = 0; j<=size1;j++){
            if(string[i]===array[j]){
                count+=1;
            }
            else if(string[i]!=array[j]){
                continue;
            }
        }
    }
    return count;
}
console.log(vowelCount("My name is Asadullah Tariq."));