function stringToBase64(string){
    let result = btoa(string);
    return string + " in the form of Base64 is equal to " + result + ".";
}
console.log(stringToBase64('Learning JavaScript'));