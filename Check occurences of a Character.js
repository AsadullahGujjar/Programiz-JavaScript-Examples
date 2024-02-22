function checkOccurrences(char){
    let string = "hello, my name is asadullah tariq.";
    size = string.length;
    let count = 0;
    for(let i = 0; i < size;i++){
        if(string[i]!=char){
            continue;
        }
        else if(string[i]===char){
            count += 1;
        }
    }
    return count;
}
console.log(checkOccurrences('a'));