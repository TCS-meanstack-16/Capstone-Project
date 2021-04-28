export class Products {
    desc: string;
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    
    constructor(id:number, name:string, desc:string = "", price:number = 0, imageUrl:string = "https://semantic-ui.com/images/wireframe/image.png") {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
