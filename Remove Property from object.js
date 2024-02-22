function removeProperty(property){
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
    delete person[property];
    return person;
}
console.log(removeProperty('name'));