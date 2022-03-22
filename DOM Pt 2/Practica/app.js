const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const templateFooter = document.getElementById('templateFooter');
const footer = document.getElementById('footer');
const fragment = document.createDocumentFragment();

let carritoObjeto = [];

const agregarAlCarrito = (e) =>{
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo:e.target.dataset.fruta,
        id:e.target.dataset.fruta,
        cantidad:1,
        precio:parseInt(e.target.dataset.precio)
    };

    const index = carritoObjeto.findIndex(item=>{
        return item.id === producto.id
    });

    // console.log(carritoObjeto);
    // console.log(producto);
    
    if(index === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[index].cantidad++
        // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto
        // .precio
    }

    pintarCarrito();

};

const pintarCarrito = ()=>{
    carrito.textContent = '';

    carritoObjeto.forEach(item=>{
        const clone = template.content.cloneNode(true); 
        //Si en el contenedor hay mas de 2 elementos el firstElementChild
        //no se usaria en este caso
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio*item
        .cantidad;

        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;

        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);

    pintarFooter();
}

const btnAumentar = (e)=>{
    // console.log("me diste click",e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(item=>{
        if(item.id===e.target.dataset.id){
            item.cantidad++
        }

        return item
    })

    pintarCarrito();
}

const btnDisminuir = (e)=>{
    // console.log('Me diste click quitar',e.target.dataset.id);

    carritoObjeto = carritoObjeto.filter(item=>{
        if(item.id === e.target.dataset.id){
            if(item.cantidad>0){
                item.cantidad--
                if(item.cantidad === 0) return 
                return item
            }
        }else{return item}
    })
    pintarCarrito();
};

const pintarFooter = ()=>{
    console.log('Pintar footer');

    footer.textContent = '';
    
    const total = carritoObjeto.reduce((acc,current)=>acc+current
    .precio*current.cantidad,0);

    const clone = templateFooter.content.cloneNode(true); 

    clone.querySelector('span').textContent = total;


    footer.appendChild(clone);

    if(total===0){
        footer.textContent = '';
    }

};

document.addEventListener('click',e=>{
    // console.log(e.target.matches('.card .btn-outline-primary'));

    if(e.target.matches('.card .btn-outline-primary')){
        agregarAlCarrito(e);
    }

    // console.log(e.target.matches('.list-group-item .btn-success'))
    if(e.target.matches('#carrito .list-group-item .btn-success')){
        btnAumentar(e);
    }
    
    // console.log(e.target.matches('.list-group-item .btn-danger'))
    if(e.target.matches('#carrito .list-group-item .btn-danger')){
        btnDisminuir(e);
    }
})



 