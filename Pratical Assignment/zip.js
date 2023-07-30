var fs = require('fs')
var zlib = require('zlib')


fs.createReadStream('./text1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./text.txt.gz'));


console.log('File compressed..!!');
