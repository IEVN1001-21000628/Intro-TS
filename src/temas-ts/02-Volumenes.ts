    import { Areas } from "./01-Areas";

    class Volumen extends Areas{
        private altura:number;

        constructor(altura:number, Cuadrado:number, circulo:number,
            lado1:number, RectArea:number,
            cuadradoArea:number, circuloArea:number ){
            super(Cuadrado,circulo, cuadradoArea, circuloArea, lado1, RectArea);
            this.altura=altura;
        }
        
        Prisma(){
            //this.prisma=this.areaCua()*this.altura;
            console.log(`El volumen del prisma es de: ${this.areaCua()*this.altura} cm*3`)
        }
        Piramide(){
            //his.piramide=(this.areaRect()*this.altura)/3
            console.log(`El volumen de la piramide es de: ${(this.areaRect()*this.altura)/3}cm*3`)
        }
        Cilindro(){
            //this.cilindro=this.areaCir()*this.altura
            console.log(`el volumen del cilindro es de: ${this.areaCir()*this.altura}cm*3`)
        }
    }


    let volumen1=new Volumen(10,4,8,5,0,0,0);
    volumen1.areaCua();
    volumen1.areaCir();
    volumen1.Prisma();
    volumen1.Piramide();
    volumen1.Cilindro();
