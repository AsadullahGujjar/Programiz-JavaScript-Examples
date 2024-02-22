function reverseAString(string){
    size = string.length;
    let reversedString = "";
    for(i = size-1 ;i >= 0 ; i--){
        reversedString += string.charAt(i);
    }
    return reversedString;
}
console.log(reverseAString("Asad"));