const fs = require("fs")

// DOSYA OKUMA
fs.readFile('password.txt', "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("DOSYA OKUNDU")
});

// DOSYA YAZMA
fs.writeFile('example.txt', 'KODLUYORUZZZ', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Dosya başarılı bir şekilde oluşturuldu")
});

let users = [
    { "id": 1, "name": "Ali", "age": 20 },
    { "id": 2, "name": "Can", "age": 12 },
    { "id": 3, "name": "Ayşe", "age": 25 },
    { "id": 4, "name": "Dilek", "age": 22 }
];


fs.writeFile('user.json', JSON.stringify(users), 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Json dosya başarılı bir şekilde oluşturuldu")
});

// DOSYAYA VERİ EKLEME

fs.appendFile('example.txt', '\nNodeJs', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Metin başarıyla eklendi.")
});

// DOSYAYA SİLME

fs.unlink('password.txt', (err) => {
    if (err) console.log(err);
    console.log('password.txt başarıyla silindi.');
  });
  
// KLASOR OLUŞTURMA

fs.mkdir("uploads/img", {recursive: true}, (err) => {
    if(err) console.log(err)
    console.log("Klasörler oluşturuldu")
})