function factors(num){
    array =[];
    for(i=1;i<=num/2;i++){
        if(num%i==0){
            array.push(i);
        }
    }
    return array;
}
console.log(factors(12));