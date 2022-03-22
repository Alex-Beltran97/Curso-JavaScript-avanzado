const ids = element => document.getElementById(element);

//DOMContentLoaded evento para esperar a que cargue todo el DOM, sin esperar hojas de estilos imganes, etc, opara cargar la informacion completa.


//Esto nos ayuda a que este preparado el wentorno para poder empezar a consumir los servicios, en cambio si no llegase a estar lista por algun motivo, a la hora de pnitar la información no tendria un entorno en el cual mostrarse


document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
});


const fetchData = async ()=>{
    // console.log('Obteniendo datos...')
    
    try{
        loadingData(true);
        const res = await fetch('https://rickandmortyapi.com/api/character');

        const data = await res.json(); //Simepre son 2 awaits en estos casos
        //Si la promesa esta pendiente se debe colocar el await
        setTimeout(()=>{
            pintarCard(data);
        },2000)

    }catch(error){
        console.log(error);
    }finally{
        setTimeout(()=>{
            loadingData(false);
        },2000)
    };
};

const pintarCard = data =>{
    // console.log(data);

    const cards = ids('card-dinamicas');
    const templateCard = ids('template-card').content;
    const fragment = document.createDocumentFragment();

    data.results.forEach(item=>{
        const clone = templateCard.cloneNode(true);

        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('img').setAttribute('src',item.image);

        fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
};

const loadingData = estado =>{
    const loading = document.querySelector('#loading');

    if(estado){
        loading.classList.remove('d-none');
    }else{
        loading.classList.add('d-none');
    };
}