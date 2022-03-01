// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

const fs = require("fs")

const writeFile =(file,data) =>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file, data, 'utf8', (err) => {
            if(err) reject("Dosya oluşturulamadı.")
            resolve("Dosya oluşturuldu.")
        })
    })
}

const readFile = (file) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err)=>{
            if(err) reject("Dosya okunamadı")
            resolve("Dosya okundu.")
        })
    })
}

const updateFile =(file,newData) =>{
    return new Promise((resolve,reject)=>{
        fs.appendFile(file, '\n' + newData, (err)=>{
            if(err) reject("Dosya Güncellenemedi.")
            resolve("Dosya güncellendi.")
        })
    })
}

const deleteFile = (file) => {
    return new Promise((resolve,reject)=>{
        fs.unlink(file, (err) => {
            if(err) reject("Dosya silinemedi.")
            resolve("Dosya silindi.")
        })
    })
}

async function start(){
    const filePath = 'employees.json'
    const data = '{"name": "Employee 1 Name", "salary": 2000}'

    let fileWrite = await writeFile(filePath,data)
                            .then(result => console.log(result))
                            .catch(err => console.log(err) )

    let fileRead = await readFile(filePath)
                            .then(result => {console.log(result)})
                            .catch(err => console.log(err))

    let fileUpdate = await updateFile(filePath, '{"name": "Employee 2 Name", "salary": 4000}')
                            .then(result => console.log(result))
                            .catch(err => console.log(err))

    let fileDelete = await deleteFile(filePath)
                            .then(result => console.log(result))
                            .catch(err => console.log(err))
}

start()




