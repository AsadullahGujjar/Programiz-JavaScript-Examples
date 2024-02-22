function displayCurrentDateAndTime(){
    const values = new Date();
    const date = values.toDateString();
    const time = values.toLocaleTimeString();
    return 'Date: ' + date + '\n' + 'Time: '+ time;
}
console.log(displayCurrentDateAndTime());