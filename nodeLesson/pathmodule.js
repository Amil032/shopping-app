const path = require('fs');
console.log(path.sep);
const filePath = path.join('content','subfolder', 'text.txt');//filin linkini qauyatarir (incinde oldugu papkadan sonraki urli )
console.log(filePath); 
console.log(path.basename(filePath));//sonunucu filin adini qaytarir

console.log(__dirname);

// const absolutePath = path.resolve(__dirname,'content','subfolder', 'text.txt' );//full linki qaytarir
const absolutePath = path.resolve(__dirname,filePath );//full linki qayarir 
console.log(absolutePath,'absolutepath')