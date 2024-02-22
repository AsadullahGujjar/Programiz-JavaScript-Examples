function multiplicationTable(num){
    table = " ";
    for(i =1 ; i <= 10; i++){
        result = num*i; 
        table += num + " * " + i + " = " + result + "\n";
    }
    return table;
}
console.log(multiplicationTable(10));