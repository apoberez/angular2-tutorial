import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryPage} from "../../model/category.page";
import {CategoryPageService} from "../../service/category-page.service";

@Component({
    selector: "pc-category-page",
    templateUrl: "./category-page.component.html",
    styleUrls: ["./category-page.component.css"],
    providers: [CategoryPageService]
})
export class CategoryPageComponent implements OnInit {

    public category: Category;

    constructor(private route: ActivatedRoute, private pageService: CategoryPageService) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {categoryPageData: CategoryPage}) => {
                this.category = data.categoryPageData.category;
                this.pageService.setProducts(data.categoryPageData.products);
            }
        )
    }
}
