function quadraticEquation(a,b,c){
    num = (b*b-4*a*c);
    result = Math.sqrt(num);
    if (num > 0){
        root1 = ((-b + result)/2*a);
        root2 = ((-b - result)/2*a);
        return [root1,root2];
    }
    else{
        return "Discriminant is smaller than Zero." ;
    }
}
console.log(quadraticEquation(1, -3, 2));