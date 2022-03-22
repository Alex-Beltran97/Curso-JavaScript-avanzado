const ids = element => document.getElementById(element);
const queries = element => document.querySelector(element);

const form = ids('form');
const template = ids('template');
const idUser = queries('idUser');
const fragment = document.createDocumentFragment();
const container = queries('.container');


const data = [
    {id:1,name:'alex',age:25},
    {id:2,name:'juan',age:27},
    {id:3,name:'oscar',age:26},
    {id:4,name:'steven',age:22}
];

//CALLBACK
// const encontrarUsuario = (id,callback)=>{
//     const result = data.find(item=>item.id===id);

//     callback(result)
// };

// const showUser = e =>{
//     const clone = template.content.cloneNode(true); 

//     encontrarUsuario(parseInt(e.get('idUser')),(result)=>{
//         if(result){
//             clone.querySelector('#name').textContent = result.name;
//             clone.querySelector('#age').textContent = result.age;
//         }else{
//             clone.querySelector('#name').textContent = 'No existe este usuario.';
//         };

//         fragment.appendChild(clone);
//     });

//     container.appendChild(fragment);
// };


//Promesa

const showUser = (id)=>{
    return new Promise ((resolve,reject)=>{

    const result = data.find(item=>item.id===parseInt(id.get('idUser')));
        if(result){
            resolve(result);
        }else{
            reject('Usuario no encontrado')
        }
    });
}

//async/await
const validate = async (element)=>{
    try{
        const result = await showUser(element);
        console.log(result);
    }catch(error){
        console.log(error);
    };
};

form.addEventListener('click', e =>{
    e.preventDefault();
    
    const input = new FormData(form);

    if(e.target.matches('.btn')){
        e.preventDefault();

        //then/catch
        // showUser(input)
        //     .then(success=>console.log(success))
        //     .catch(error=>console.log(error))
        validate(input);
    };

});
