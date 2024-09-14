export class Areas{
    protected Cuadrado:number;
    protected lado1:number;
    protected circulo:number;
    protected cuadradoArea:number;
    protected circuloArea:number;
    protected RectArea:number;
    private potencia:number=2;
    constructor(Cuadrado:number, circulo: number, cuadradoArea:number, 
        circuloArea:number, lado1:number, RectArea:number){
        this.Cuadrado=Cuadrado;
        this.circulo=circulo;
        this.cuadradoArea=cuadradoArea;
        this.circuloArea=circuloArea;
        this.lado1=lado1;
        this.RectArea=RectArea;
    }
    areaCua(){
        this.cuadradoArea=Math.pow(this.Cuadrado, this.potencia)
        return this.cuadradoArea
    }
    areaCir(){
        this.circuloArea=Math.PI*Math.pow(this.circulo, this.potencia)
        return this.circuloArea;
    }
    areaRect(){
        this.RectArea=this.Cuadrado*this.lado1;
        return this.RectArea;
    }
}