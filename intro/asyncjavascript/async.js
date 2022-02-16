function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor..");

        if (data) {
            resolve("Veriler alındı.")
        } else {
            reject("Veriler alınamadı.")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..");

        if (receivedData) {
            resolve("Veriler düzenlendi.")
        } else {
            reject("Veriler düzenlenemedi.")
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(true)
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })

// Async - Await

// async function processData(){
//     try{
//         const receivedData =await getData(true)
//         console.log(receivedData)

//         const cleanedData = await cleanData(true)
//         console.log(cleanedData)

//     } catch(err){
//         console.log(err)
//     } 

// }

// processData()

let books = [
    { name: "Kitap1", author: "Yazar1" },
    { name: "Kitap2", author: "Yazar2" }
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
        reject('Bir hata oluştu')
    })
    return promise1
}

// addBook({ name: "Kitap3", author: "Yazar3" })
//     .then(() => {
//         console.log("YENİ LİSTE");
//         listBooks()
//     }).catch((error) => {
//         console.log(error);
//     })

async function showBooks() {
    try {
        await addBook({ name: "Kitap5", author: "Yazar5" })
        listBooks()
    } catch (error) {
        console.log(error);
    }
}

showBooks()