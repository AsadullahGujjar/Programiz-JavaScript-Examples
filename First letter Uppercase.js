function firstLetterUppercase(string){
    let capitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalized; 
}
console.log(firstLetterUppercase("my name is Asadullah Tariq."));