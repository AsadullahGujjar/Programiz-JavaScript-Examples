function combiningTwoSets(set1,set2){
    set1 = new Set(['apple', 'mango', 'orange']);
    set2 = new Set(['grapes', 'mango', 'pineapple']);
    let unionset = new Set(set1);
    for (i of set2){
        unionset.add(i);
    }
    return unionset;
}
console.log(combiningTwoSets());