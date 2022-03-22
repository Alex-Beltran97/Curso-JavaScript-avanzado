const url = 'https://jsonplaceholder.typicode.com/posts/'; //usualmente la URL trae el id

// fetch(url)
//     .then(res=>res.json()) //De estamanera se transforma el contenido a json y se puede volver a invocar y saldra transformado
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))
//     .finally(()=>console.log('Finalizó.'));


const findPostById = async (id)=>{
    try{
        const res = await fetch(url+id);
        const post = await res.json();

        console.log(post);
    }catch(error){
        console.log(error);
    }finally{
        console.log('Finalizó');
    };
};

findPostById(101);
