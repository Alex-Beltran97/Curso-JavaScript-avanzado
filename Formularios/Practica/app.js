const ids = element => document.getElementById(element); 

const formulario = ids('formulario');
const userName = ids('userName');
const userEmail = ids('userEmail');

const alertSuccess = ids('alertSuccess');
const alertEmail = ids('alertEmail');
const alertName = ids('alertName');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensaje = (element)=>{
    element.classList.remove('d-none');
};

const pintarMensajeErrores = (errores)=>{
    errores.forEach(item=>{
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
        item.input.classList.add('is-invalid');
    });
};

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    
    alertSuccess.classList.add('d-none');
    alertName.classList.add('d-none');
    alertEmail.classList.add('d-none');

    const errores = [];

    //Devuleve true si existen espacios en blanco

    if(!regUserName.test(userName.value) || !userName.value.trim()){
        errores.push({
            input:userName,
            tipo:alertName,
            msg:'Formato no valido en el campo nombre. Solo letras.'
        });
    }else{
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
    };
    
    if(!regUserEmail.test(userEmail.value)){
        errores.push({
            input:userEmail,
            tipo:alertEmail,
            msg:'Escriba un correo valido.'
        });
    }else{
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
    };

    if(errores.length!==0){
        pintarMensajeErrores(errores);
    }else{
        console.log('Formulario enviado');
        pintarMensaje(alertSuccess);
    };

});


