const ids = element => document.getElementById(element);

const fragment = document.createDocumentFragment();
const container = document.querySelector('.container');

const URL = 'https://rickandmortyapi.com/api/character/';


document.addEventListener('DOMContentLoaded',()=>{
    fetchData(URL); 
});

const fetchData = async (url)=>{

    try{
        const service = await fetch(url);
        const data = await service.json();

        setTimeout(()=>{
            document.querySelector('#loading').setAttribute('style','display:none');
            document.querySelector('.container').setAttribute('style','border:1px solid black');
            printCharacters(data);
        },2000)
    }catch(error){
        console.log(error);
    }finally{
        setTimeout(()=>{
            console.log('Complete!');
        },2000)
    }
};

const printCharacters = (data)=>{
    // console.log(data.results);
    
    
    data.results.forEach(item=>{
        const templateCard = ids('template-card').content;
        const clone = templateCard.cloneNode(true);
        console.log(item.name);

        clone.querySelector('.card>h4').textContent = item.name;
        clone.querySelector('.card>p').textContent = item.species;
        clone.querySelector('.card>img').setAttribute('src',item.image);

        fragment.appendChild(clone);
    });

    container.appendChild(fragment);

    console.log(clone.querySelector('.card'));
}