function comparetwoStrings(string1,string2){
    result = string1.toUpperCase() === string2.toUpperCase();
    if(result){
        return "Both Strings are similar.";
    }
    else{
        return "Strings are different."
    }
}
console.log(comparetwoStrings("Javascript","havascript"));