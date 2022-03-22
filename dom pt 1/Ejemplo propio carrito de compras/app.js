const carrito = document.querySelector('.carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll('.btn');
const description = document.querySelectorAll('.description > p');

const object = {};

const addCarrito = (item)=>{
    console.log(item.target.value);

    const product = {
        name: `Guitarra ${item.target.value}`,
        id:0,
        cantidad:1
    }

    if(item.target.value=='Gibson'){
        product["id"] = 1;
    }else if (item.target.value=='Fender'){
        product["id"] = 2;
    }else{
        product["id"] = 3;
    }

    if(object.hasOwnProperty(product.name)){
        product.cantidad = object[product.name].cantidad + 1;
    }

    object[product.name] = product;

    showCarrito();
    
    
    const deletes = document.querySelectorAll('.result #delete');

    
    deletes.forEach((e,index)=>e.addEventListener('click',()=>{

        // delete object[product.name];

        if(Object.values(object)[index].id==3){
            console.log("Guitarra Ibanez");
            delete object['Guitarra Ibanez']
        }else if (Object.values(object)[index].id==2){
            console.log("Guitarra Fender");
            delete object["Guitarra Fender"]
        }else{
            console.log("Guitarra Gibson");
            delete object["Guitarra Gibson"]
        }

        showCarrito();
    }));

};

const showCarrito = ()=>{
    carrito.textContent = '';

    Object.values(object).forEach(item=>{
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector('#title').textContent =  item.name;
        clone.querySelector('#quantity').textContent = item.cantidad;
        clone.querySelector('#imgProduct').setAttribute('src',`./img/${item.id}.jpg`);

        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);

    console.log(Object.values(object));
};



btns.forEach(item=>item.addEventListener('click',addCarrito));


