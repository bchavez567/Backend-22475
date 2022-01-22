class Usuario {

    constructor (nombre , apellido, libros, mascotas){
        this.nombre = nombre.toUpperCase();// NOMBRE EN MAYUSCULAS
        this.apellido = apellido.toUpperCase();// APELLIDO EN MAYUSCULAS
        this.libros = libros;
        this.mascotas = mascotas;
    }


    getFullname() {
        console.log(`Tu nombre de usuario es ${this.nombre} ${this.apellido}`);
    }

    //CONTADOR DE MASCOTAS
    countMascotas(){
        let mascota1 = 1
        let mascota2 = 1

        let suma = parseInt(mascota1 + mascota2);
        console.log(`Tienes ${suma} mascotas`);
    }

    addBooks(){
        [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
    }

    getBooks(){
        let libro = ['El señor de las moscas' , 'Fundacion']
        console.log(`El nombre de tus libros son ${JSON.stringify(this.libros)}`);
    }
    
}

const usuario1 = new Usuario ("Walter" , "Chavez",[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],["Perro" , "Gato"]);
const usuario2 = new Usuario ("Brian" , "Zapata", [{nombre: 'Don Quijote de la Mancha',autor: 'Miguel de Cervantes'}, {nombre: 'Moby-Dick', autor: 'Herman Melville'}],["Loro" , "Hamster"]);


//USUARIO 
usuario1.getFullname();

// MASCOTAS

usuario1.countMascotas();


//LIBROS
usuario1.addBooks();
usuario1.getBooks();


//USUARIO2

usuario2.getFullname();
usuario2.countMascotas();
usuario2.getBooks();
