function ifStringStartWithAnotherString(string,checkString){
    if(string.startsWith(checkString)) {
        return "The string starts with " + checkString + ".";
    }
    else {
        return "The string does not starts with " + checkString + ".";
    }
}
console.log(ifStringStartWithAnotherString("Hello World","we"));