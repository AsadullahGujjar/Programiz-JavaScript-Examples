function mergeObject(){
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
    let gender = {
        sex: 'Male'
    }
    let result = Object.assign(person,gender);
    return result;
}
console.log(mergeObject());