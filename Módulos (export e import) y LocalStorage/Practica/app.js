const formulario = document.getElementById('formulario');
const pintarTodo = document.getElementById('pintarTodo');
const templateTodo = document.getElementById('templateTodo').content;
const alert = document.querySelector('.alert');
const fragment = document.createDocumentFragment();

let todos = [];

const agregarTodo = todo =>{
    const objetoTodo = {
        nombre: todo,
        id:`${Date.now()}`
    };

    todos.push(objetoTodo);
};

const pintarTodos = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos));

    pintarTodo.textContent = '';

    todos.forEach(item=>{
        const clone = templateTodo.cloneNode(true);

        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector('.btn').dataset.id = item.id;

        fragment.appendChild(clone);
    })

    pintarTodo.appendChild(fragment);
};

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    alert.classList.add('d-none');

    const data = new FormData(formulario);
    const [todo] = [...data.values()];

    if(!todo.trim()){
        alert.classList.remove('d-none');
        return
    };

    agregarTodo(todo);

    pintarTodos();
});

document.addEventListener('click',e=>{
    if(e.target.matches('.btn-danger')){
        todos = todos.filter(item=>item.id!==e.target.dataset.id);
        pintarTodos();
    };
});


document.addEventListener('DOMContentLoaded',e=>{
    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'));
        pintarTodos();
    };
});