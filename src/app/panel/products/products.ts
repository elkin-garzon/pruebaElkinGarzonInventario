export class Products {
    public nombre: string;
    public id_categoria: number;
    public precio: number;
    public estado: boolean;
    public id?: number;

    constructor(){
        this.estado = false;
    }
}
