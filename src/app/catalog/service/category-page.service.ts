import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Product} from "../model/product";

@Injectable()
export class CategoryPageService {
    private productsSource = new Subject<Product[]>();

    public products = this.productsSource.asObservable();

    public setProducts(products: Product[]) {
        console.log(products);
        this.productsSource.next(products);
    }
}