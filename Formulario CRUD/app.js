const ids = element=>document.getElementById(element);
const queries = element=>document.querySelector(element);

const form = ids('form');
const templateUser = ids('templateUser');
const fragment = document.createDocumentFragment();
const section = ids('section');
const list = queries('#section div');
const result = ids('result');
const alertName = ids('alertName');
const alertEmail = ids('alertEmail');
const alertPassword = ids('alertPassword');

const data = [];
let errors = [];
let person = {};

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserPassword = /^[a-z0-9_-]{6,18}$/;


const validator = (form, expression,value,msg,alert)=>{
    if(!expression.test(form.get(value))){
        errors.push({
            input: form.get(value),
            msg:msg
        });
        errors.findIndex(index=>index.input===form.get(value));
        alert.classList.remove('hidden');
        alert.textContent = errors[errors.findIndex(index=>index.input===form.get(value))].msg;
        alert.setAttribute('style','color:red');
    };
};


const addUser = (form,name,email,password)=>{
    const user = {
        id:form.get(name),
        name:form.get(name),
        email:form.get(email),
        password:form.get(password)        
    };

    person = user;

    if(data.findIndex(item=>item.name===user.name)===-1&&data.findIndex(item=>item.email===user.email)===-1){
        data.push(user);
        result.classList.remove('hidden');
        result.classList.add('success');
        result.textContent = 'Usuario creado!'
    }else{
        result.classList.remove('hidden');
        result.classList.add('alert');
        result.textContent = 'Usuario ya existe!'
    };
    setTimeout(()=>result.classList.add('hidden'),5000)


    return user
};


const showUsers = (obj)=>{
    list.textContent = '';

    data.forEach(item=>{
        const clone = templateUser.content.cloneNode(true);
        
        document.querySelector('#count span').textContent = data.length;
        
        clone.querySelector('.user li #delete').setAttribute('id',item.id)

        clone.querySelector('#outputName').textContent = item.name;
        clone.querySelector('#outputEmail').textContent = item.email;
        clone.querySelector('#outputPassword').textContent = item.password.split('').fill('*').join('');
    
        fragment.appendChild(clone);
    });
    
    list.appendChild(fragment);
};

const deleteUser = (e)=>{
    // console.log(e.target)

    
    const okDelete = confirm('¿Seguro que desea elimniar este usuario?');
    
    if(okDelete){
        data.splice(item=>item.id===e.target.id,1);
    
        showUsers(person);
    };
    if(data.length=== 0){
        document.querySelector('#count span').textContent = 0;
    };
};

form.addEventListener('submit',e=>{
    e.preventDefault();

    result.classList.add('hidden');
    result.classList.remove('success');
    result.classList.remove('alert');
    alertName.classList.add('hidden');
    alertEmail.classList.add('hidden');
    alertPassword.classList.add('hidden');

    errors = [];

    const formValues = new FormData(form);

    validator(
        formValues,
        regUserName,
        'userName',
        'El nombre ingresado no es valido. Ingrese un nombre que solo contenga letras.',
        alertName
    );

    validator(
        formValues,
        regUserEmail,
        'userEmail',
        'Ingrese un correo valido.',
        alertEmail
    );
    
    validator(
        formValues,
        regUserPassword,
        'userPassword',
        'Ingrese una contraseña valida.',
        alertPassword
    );

    if(errors.length === 0){
        showUsers(
            addUser(
                formValues,
                'userName',
                'userEmail',
                'userPassword',
            )
        );
    };

});

document.addEventListener('click',e=>{
    
    if(e.target.matches('.user>li:last-child>button')){
            deleteUser(e);
        };
    })


