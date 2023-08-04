const Tesseract = require('tesseract.js');

Tesseract.recognize(
  './resim.png',
  'tur', 
  {
    // logger: info => console.log(info.progress), // progress bilgisini görmek için kullanılabilir
  }
).then(({ data: { text } }) => {
  console.log(`Tespit edilen metin:\n ${text}`);
}).catch(err => {
  console.error('Hata:', err);
});