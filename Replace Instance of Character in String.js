function replaceInstancesOfCharacterInString(string){
    let result = string.replace(/a/g, "A");
    return result;   
}
console.log(replaceInstancesOfCharacterInString('Learning JavaScript'));