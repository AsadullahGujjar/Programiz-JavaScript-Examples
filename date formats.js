function datesFormat(datevalues) {
    const currentDate = new Date(datevalues[2], datevalues[0] - 1, datevalues[1]);
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }
    const formattedDate1 = month + '/' + day + '/' + year;
    const formattedDate2 = month + '-' + day + '-' + year;
    const formattedDate3 = day + '-' + month + '-' + year;
    const formattedDate4 = day + '/' + month + '/' + year;

    return formattedDate1 + '\n' + formattedDate2 + '\n' + formattedDate3 + '\n' + formattedDate4;
}
console.log(datesFormat([10,2,2024]));