// Declaro clase Usuario:
class Usuario {
    constructor (nombre, apellido, libros, mascotas){
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
    }

    getFullName = () => `${this.nombre} ${this.apellido}`;
    addMascota = (nombre) => this.mascotas.push(nombre);
    countMascotas = () => this.mascotas.length;
    addBook = (nombreLibro, autor) => this.libros.push({nombreLibro, autor})
    getBookNames = () => this.libros.map(libro => libro.nombreLibro)
}

// Utilizo funciones:
let usuario = newUsuario('Esteban', 'Benabarre', [], []);
usuario.addMascota ('Taco');
usuario.addBook ('El Principito', 'Antoine de Saint-Exupéry');
usuario.addBook ('El Gaucho Martín Fierro', 'José Hernández');

console.log('Nombre de usuario: ', usuario.getFullName());
console.log('Cantidad de mascotas: ', usuario.countMascotas());
console.log ('Libros: ', usuario.getBookNames());
