var fs = require('fs')
var unzip = require('zlib')


fs.createReadStream('./text.txt.gz')
    .pipe(unzip.createGunzip())
    .pipe(fs.createWriteStream('./txet.txt'));


console.log('File Decompressed..!!');
