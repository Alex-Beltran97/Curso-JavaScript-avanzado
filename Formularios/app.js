const ids = element => document.getElementById(element); 

const formulario = ids('formulario');
const userName = ids('userName');
const userEmail = ids('userEmail');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener('submit',e=>{
    e.preventDefault();

    if(!regUserName.test(userName.value)){
        console.log('Formato no valido')
        return
    };

    if(!regUserEmail.test(userEmail.value)){
        console.log('Formato no valido')
        return
    };

    console.log('Formulario enviado');
});


