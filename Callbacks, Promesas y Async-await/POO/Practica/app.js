const formulario = document.querySelector('#formulario');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
const templateEstudiantes = document.querySelector('#templateEstudiantes').content;
const templateprofesores = document.querySelector('#templateprofesores').content;
const fragment = document.createDocumentFragment();
const alert = document.querySelector('.alert');

const estudiantes = [];
const profesores = [];

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;
    }

    static pintarPersonaUI(persona,tipo){
        if(tipo === 'estudiante'){
            cardsEstudiantes.textContent = '';
            
            persona.forEach(item=>{
                fragment.appendChild(item.agregarNuevoEstudiante());
            })

            cardsEstudiantes.appendChild(fragment);
        }
        
        if(tipo === 'profesor'){
            cardsProfesores.textContent = '';
            
            persona.forEach(item=>{
                fragment.appendChild(item.agregarNuevoProfesor());
            })
    
            cardsProfesores.appendChild(fragment);
        }
    }
};

class Estudiante extends Persona{
    #estado = false;
    #estudiante = 'Estudiante'

    set setEstado(estado){
        this.#estado = estado;
    }

    get getEstado(){
        return this.#estado;
    }
    
    get getEstudiante(){
        return this.#estudiante;
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiantes.cloneNode(true);

        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = `${this.edad} años`;
        
        if(this.#estado){
            clone.querySelector('h5 .badge').className = 'badge bg-success';
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('h5 .badge').className = 'badge bg-danger';
            clone.querySelector('.btn-success').disabled = false;
            clone.querySelector('.btn-danger').disabled = true;
        };
        clone.querySelector('h5 .badge').textContent = this.#estado ? 'Aprobado' : 'Reprobado';

        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone
    }
};

class Profesor extends Persona{
    #profesor = 'Profesor'

    agregarNuevoProfesor(){
        const clone = templateprofesores.cloneNode(true);

        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = `${this.edad} años`;

        return clone
    }
};

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    
    alert.classList.add('d-none');
    const datos = new FormData(formulario);
    const [nombre,edad,profile] = [...datos.values()];
    console.log(nombre,edad,profile)

    if(!nombre.trim() || !edad.trim() || !profile.trim()){
        console.log('Algun dato en blanco');
        alert.classList.remove('d-none');
        return //UN RETURN VACIO HACE QUE EL CODIGO NO SIGA
    };

    if(profile==='estudiante'){
        const estudiante = new Estudiante(nombre,edad);
        estudiantes.push(estudiante)
        Persona.pintarPersonaUI(estudiantes,profile);
    };
    
    if(profile==='profesor'){
        const profesor = new Profesor(nombre,edad);
        profesores.push(profesor)
        
        Persona.pintarPersonaUI(profesores,profile);
    };

    console.log(estudiantes);
});

cardsEstudiantes.addEventListener('click',e=>{
    // console.log(e.target.dataset.nombre);

    if(e.target.dataset.uid){
        estudiantes.map(item=>{
            if(item.uid===e.target.dataset.uid){
                item.setEstado = !item.getEstado
            }
            return item
        });
    };
    
    Persona.pintarPersonaUI(estudiantes,'estudiante')
});
