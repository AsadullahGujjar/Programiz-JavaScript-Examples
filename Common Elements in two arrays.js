function commonElementsInTwoArrays(array1,array2){
    const setA = new Set(array1);
    const setB = new Set(array2);
    let array = [];
    for (let i of setB) {
        if (setA.has(i)) {
            array.push(i);
        }   
    }
    return array;
}
array1 = [0,1,2,3,4];
array2 = [6,5,4,3,21,2,3,5,7,8];
console.log(commonElementsInTwoArrays(array1,array2));