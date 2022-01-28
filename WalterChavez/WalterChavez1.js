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
        let contador = this.mascotas.length;
        console.log("Usted tiene " + contador + " Mascotas");
    }


    addBook(newLibro) {
        this.libros.push(newLibro);
        console.log(this.libros);
        console.log(this.libros.length);// contador de libros
    }
    getBookNames() {
        this.libros.map(e => console.log('El nombre de sus libros son ' + e.nombre)) 
    }
};



const usuario1 = new Usuario ("Walter" , "Chavez",[],["Perro" , "Gato"]); //nueva clase con el objeto vacio en "Libros"


//USUARIO 
usuario1.getFullname();

// MASCOTAS

usuario1.countMascotas();


//LIBROS
usuario1.addBook({nombre: 'El señor de las moscas',autor: 'William Golding'});
usuario1.addBook({nombre: 'Fundacion', autor: 'Isaac Asimov'});
usuario1.getBookNames();

