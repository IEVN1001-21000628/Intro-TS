function suma(){
    let x=2;
    let y=2;
    let d=x+y;

    console.log(d)
}

function restar(a:number, b:number):number{
    return a-b;
}
const res:Number=restar(10,3)
console.log(`La resta es de: ${res}`)

interface Mascotas{
    name: string;
    edad: number;
    raza: string;
    mostrar:()=>void;
}

function calcular(mascotas:Mascotas, x:number):void{
    mascotas.edad += x;
    console.log(mascotas);
}

const nuevaMascota:Mascotas={
    name:"Fido",
    edad: 3,
    raza: "golden",
    mostrar:()=>{
        console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} y soy un ${nuevaMascota.raza}`)

    }
}
calcular(nuevaMascota,4)