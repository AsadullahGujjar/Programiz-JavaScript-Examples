function variableUndefinedOrNull(variable){
    if(variable==null){
        return "This variable is null or undefined.";
    }
    else{
        return "This variable is neither null nor undefined.";   
    }
}
console.log(variableUndefinedOrNull());