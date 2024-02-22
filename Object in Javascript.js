function object(){
    const person = {
        name: 'Asad',
        age: 22,
        occupation: 'Student',
        hobbies: ['Football','Reading','Walking'],
        score:{
            math:90,
            science:100,
        }
    }
    return person;
}
const myobject = object();
console.log(myobject.score.science);