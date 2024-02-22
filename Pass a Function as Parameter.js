function greet() {
    return 'Hello';
}
function name(func,user)
{
    const message = func();

    console.log(`${message} ${user}`);
}
console.log(name(greet,'John.'));