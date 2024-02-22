function palindromeString(string){
    size = string.length;
    let reversedString = "";
    for(i = size-1 ;i >= 0 ; i--){
        reversedString += string.charAt(i);
    }
    if(string === reversedString){
        return string+ " is a Palindrome string.";
    }
    else{
        return string+ " is not a Palindrome string.";
    }
}
console.log(palindromeString('asa'));