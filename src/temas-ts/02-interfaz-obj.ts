
interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    genero: String;
    calificacion?: Number; //'? es para decir que es opcional
}

const alumno:Alumno={
    nombre: "Mario",
    apellido:"Mario",
    edad: 23,
    genero: "M",

}

console.table(alumno)

let mascotas=['periquito','perro','gato'];

console.log(mascotas[1])
mascotas[1]='Nuevo perro';
console.log(mascotas[1])
mascotas.push('hamster');
console.log(mascotas)

let tem:(string|number)[]=[];

tem.push(11);
tem.push('Luigi')

console.log(tem)
