import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../model/category";

@Component({
    selector: 'catalog-page',
    templateUrl: './category-page.component.html',
    styleUrls: ["./category-page.component.css"]
})
export class CategoryPageComponent implements OnInit {

    public category: Category;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {category: Category}) => {
                this.category = data.category;
            }
        )
    }
}