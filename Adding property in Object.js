function propertyAdding(){
    let person = {
        name: 'Asad',
        age: 22,
        occupation: 'Student',
        hobbies: [ 'Football', 'Reading', 'Walking' ],
        score: { math: 90, science: 100 },
        gender: 'Male'
    }
    person.IQ=164;
    return person;
}
console.log(propertyAdding());