function objectClone(){
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
    let copyObject = person;
    return copyObject;
}
console.log(objectClone());