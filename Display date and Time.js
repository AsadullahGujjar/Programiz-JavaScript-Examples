function displayDateAndTime(values) {
    let date = new Date(values[0], values[1] - 1, values[2], values[3], values[4], values[5]);
    let dateString = 'Date: ' + date.toDateString();
    let timeString = 'Time: ' + date.toLocaleTimeString();
    return dateString + '\n' + timeString;
}
console.log(displayDateAndTime([2017, 2, 12, 9, 25, 30]));