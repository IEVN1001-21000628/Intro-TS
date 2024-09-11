export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:"Iphone 1",
    precio: 1000
}

const tablet:Producto={
    desc: "Samsung N1",
    precio: 500
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*.16;
}



const articulos1=[telefono,tablet];
const iva1=calcularIva(articulos1)
console.log(iva1)

//------------------------------------destructurar funciones------------------------------------//

 export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*.16]
}

const articulos2=[telefono, tablet]
const [total, iva2]=calcularIva2(articulos2)
console.log(`Total: ${total}`)
console.log(`Iva: ${iva2}`)