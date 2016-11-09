import {Component} from "@angular/core";
import {CategoryPageService} from "../../service/category-page.service";
import {Product} from "../../model/product";

@Component({
    templateUrl: "./product-list.component.html",
    selector: "pc-product-list",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
    public products: Product[] = [];

    constructor(private pageService: CategoryPageService) {
        pageService.products.subscribe((products: Product[]) => {
            this.products = products;
        });
    }
}
