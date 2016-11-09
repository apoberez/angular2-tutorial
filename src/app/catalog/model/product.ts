
export class Product {
    public uid: string;

    public title: string;

    public specification: Map<any, any>;

    public manufacturer: string;

    constructor(uid: string, title: string, specification: Map<any, any>, manufacturer: string) {
        this.uid = uid;
        this.title = title;
        this.specification = specification;
        this.manufacturer = manufacturer;
    }
}
