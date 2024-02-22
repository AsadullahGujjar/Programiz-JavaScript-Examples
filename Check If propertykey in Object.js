function checkKey(key){
    
    let person = {
    name: 'Asad',
    age: 22,
    occupation: 'Student',
    hobbies: ['Football','Reading','Walking'],
    score:{
        math:90,
        science:100,
        }
}
let haskey = key in person;
if(haskey){
    return key + " key exists in Object "+ person+".";
}
else{
    return key + " key does not exist in Object " + person+".";
}
}
console.log(checkKey('name'));