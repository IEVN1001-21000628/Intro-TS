export class Areas{
    protected Cuadrado:number;
    protected circulo:number;
    protected cuadradoArea:number;
    protected circuloArea:number;
    constructor(Cuadrado:number, circulo: number, cuadradoArea:number, circuloArea:number){
        this.Cuadrado=Cuadrado;
        this.circulo=circulo;
        this.cuadradoArea=cuadradoArea;
        this.circuloArea=circuloArea;
    }
    areaCua(){
        this.cuadradoArea=this.Cuadrado*this.Cuadrado;
        console.log(this.cuadradoArea)
    }
    areaCir(){
        this.circuloArea=3.1416*(this.circulo*this.circulo)
        console.log(this.circuloArea)
    }
}
