const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

// const findPostById = (id)=>{
//     const post = posts.find(item=>item.id==id);

//     return new Promise ((resovle,reject)=>{
//         if(post){
//             resovle(post);
//         }else{
//             reject(new Error('No esiste el post con id: '+id))
//         }
//     })
// };

const findPostById = (id)=> new Promise ((resovle,reject)=>{
    const post = posts.find(item=>item.id==id);

    setTimeout(()=>{
        if(post){
            resovle(post);
        }else{
            reject(new Error('No esiste el post con id: '+id))
        }
    },2000)
});

const buscar = async (id)=>{
    try{
        // const postUno  = await findPostById(1); //Cuando una promesa depende de la otra
        // const postDos  = await findPostById(2);

        const resPosts = await Promise.all([ //Cuando una promesa no depende de la otra
            findPostById(1),
            findPostById(4) //Si una sola promesa de aqui falla, inmediatamente salta al catch y no mostrará nada
            //aunque si hayan promesas correctas
        ]);

        resPosts.forEach(item=>console.log(item.title));
    }catch(error){
        console.log(error)
    }finally{
        console.log('Promesa finalizada');
    }
};

buscar();

console.log('fin del codigo')