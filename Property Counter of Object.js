function propertyCounter(){
    count = 0;
    let person = {
        name: 'Asad',
        age: 22,
        occupation: 'Student',
        hobbies: [ 'Football', 'Reading', 'Walking' ],
        score: { math: 90, science: 100 },
        gender: 'Male'
    }
    for (let i in person){
        count++;
    }
    return count;
}
console.log(propertyCounter());