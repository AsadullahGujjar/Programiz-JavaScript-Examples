function stringyfy(){
    let person = {
        name: 'Asad',
        age: 23,
        class: 12 + 'nd class',
    }
    result = JSON.stringify(person);
    return result;
}
console.log(stringyfy());