import { Areas } from "./01-Areas";

class Volumen extends Areas{
    private altura:number;
    private prisma:number;
    private piramide:number;
    private cilindro:number;
    constructor(altura:number, Cuadrado:number, circulo:number, cuadradoArea:number, circuloArea:number, prisma:number, piramide:number, cilindro:number){
        super(Cuadrado,circulo, cuadradoArea, circuloArea);
        this.altura=altura;
        this.prisma=prisma;
        this.piramide=piramide;
        this.cilindro=cilindro;
    }
    areaCua(): void {
        console.log(`El area del cuadrado es de: ${this.cuadradoArea}`)
    }
    areaCir(): void {
        console.log(`el area del circulo es de: ${this.circuloArea}`)
    }
    Prisma(){
        this.prisma=this.cuadradoArea*this.altura;
        console.log(`El volumen del prisma es de: ${this.prisma}`)
    }
    Piramide(){
        this.piramide=(this.cuadradoArea*this.altura)/3
        console.log(`El volumen de la piramide es de: ${this.piramide}`)
    }
    Cilindro(){
        this.cilindro=this.circuloArea*this.altura
        console.log(`el volumen del cilindro es de: ${this.cilindro}`)
    }
}


let volumen1=new Volumen(10,4,5,16,78.53999999999999,0,0,0);
volumen1.Prisma();
volumen1.Piramide();
volumen1.Cilindro();
