function sumOfArrayElements() {  
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    } 
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }
    else {
        let result = 0;
        let length = arguments.length;
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}
console.log(sumOfArrayElements(1, 2, 3, 4, 5, 6, 7, 8, 9));