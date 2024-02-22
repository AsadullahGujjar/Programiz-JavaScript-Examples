function getFileExtension(fileName){
    extension=fileName.split('.').pop();
    return extension;
}
console.log(getFileExtension('Get File Extension.txt'));