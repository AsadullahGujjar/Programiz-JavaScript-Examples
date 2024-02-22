function objectInArray(arr, obj) {
    function isEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (isEqual(arr[i], obj)) {
            return 'Object exists in array.';
        }
    }
    return 'Object does not exist in array.';
}
array = [1, 2, 3, { x: 12,y:8 }];
let object = { x: 12,y:8 };
console.log(objectInArray(array, object));