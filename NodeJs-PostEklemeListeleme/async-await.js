let posts = [
    { title: "Post Title 1", content: "Post Content 1", author: "Author 1" },
    { title: "Post Title 2", content: "Post Content 2", author: "Author 2" },
    { title: "Post Title 3", content: "Post Content 3", author: "Author 3" }
];

let newPost = {title:"Post Title 4" , content:"Post Content 4", author:"Author 4"}

function addNewPost(newPost){
    return new Promise((resolve,reject)=>{
        console.log("Yeni Post Ekleniyor..")
        if(newPost){
            posts.push(newPost)
            resolve("Yeni Post Eklendi.")
        }else{
            reject("Yeni Post Eklenemedi.")
        }
    })
}

function listPosts(data){
    return new Promise((resolve,reject)=>{
        console.log("Postlar Listeleniyor..")
        if(data){
            console.log("Postlar Listelendi.")
            resolve(posts)
        }else{
            reject("Postlar Listelenemedi.")
        }
    })
}

async function processPost(){
    try {
        
        console.log("*********** POSTS *************")
        console.log(await listPosts(true))
        console.log("*******************************")

        const addedPost = await addNewPost(newPost)
        console.log(addedPost)
        
        console.log("*********** POSTS *************")
        console.log(await listPosts(true))
        console.log("*******************************")

    } catch (error) {
        console.log(error)
    }
}

processPost()

