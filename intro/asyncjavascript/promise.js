// const promise1 = new Promise((resolve,reject) => {
//     resolve('veriler alındı')
//     reject("bağlantı hatası")
// });

// //console.log(promise1);

// promise1
//     .then(value => {
//         console.log(value);
//     }).catch(error =>{
//         console.log(error);
//     })

let books =[
    {name: "Kitap1", author: "Yazar1"},
    {name: "Kitap2", author: "Yazar2"}
]

const listBooks = ()=>{
    books.map(book=>{
        console.log(book.name);
    })
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve,reject)=>{
        books.push(newBook)
        resolve(books) 
        reject('Bir hata oluştu')
    })
    return promise1
}

addBook({name: "Kitap3", author: "Yazar3"})
    .then(()=>{
        console.log("YENİ LİSTE");
        listBooks()
    }).catch((error)=>{
        console.log(error);
    })
