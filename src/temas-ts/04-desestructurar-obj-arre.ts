interface Reproductor{
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //llama a otra interfaz
}

interface Detalles{
    autor:string;
    year:number;
}



const reproductor:Reproductor={
    volume:50,
    segundo:30,
    cancion:"Thunder",
    detalles:{
        autor:"Imagine Dragons",
        year: 2010
    }
}

/*console.log(`El volumen actual es:  ${reproductor.volume}`)
console.log(`Los segundos son:  ${reproductor.segundo}`)
console.log(`La cancion es:  ${reproductor.cancion}`)
console.log(`El grupo es:  ${reproductor.detalles.autor}`)
console.log(`El año fue de:  ${reproductor.detalles.year}`)*/

//-----------------------------destructurar datos---------------------------//

const{volume, segundo, cancion, detalles}=reproductor; //llamo la primera interfaz
const{autor,year}=detalles;// la segunda interfaz

console.log(`El volumen actual es:  ${volume}`)
console.log(`Los segundos son:  ${segundo}`)
console.log(`La cancion es:  ${cancion}`)
console.log(`El grupo es:  ${autor}`)
console.log(`El año fue de:  ${year}`)

//------------------------destructurar arreglos--------------------------//

const dbz:string[]=['Goku','Majin Boo','Babidy','Freezer']
console.log(`personaje 1: ${dbz[0]}`)
console.log(`personaje 2: ${dbz[1]}`)
console.log(`personaje 3: ${dbz[2]}`)
console.log(`personaje 4: ${dbz[3]}`)

const[a,,b,c]=dbz;

console.log(`personaje 1: ${a}`)
console.log(`personaje 2: ${b}`)
console.log(`personaje 3: ${c}`)