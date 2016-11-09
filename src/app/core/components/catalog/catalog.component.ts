import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Category} from "../../../catalog/model/category";
import {CategoryService} from "../../../catalog/category.service";

@Component({
    selector: 'pc-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

    public categories: Category[];

    @Output() onClickMenuItem = new EventEmitter<void>();

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.categoryService.findAll().subscribe(
            categories => this.categories = categories,
            error => console.log(error)
        );
    }

    onChooseCategory() {
        this.onClickMenuItem.emit();
    }
}
