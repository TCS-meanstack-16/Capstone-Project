export class Products {
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    
    constructor(id:number, name:string, description:string = "", price:number = 0, imageUrl:string = "https://semantic-ui.com/images/wireframe/image.png") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
