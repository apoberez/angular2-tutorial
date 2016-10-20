import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Category} from "../../../catalog/model/category";
import {CatalogService} from "../../../catalog/catalog.service";

@Component({
    selector: 'pc-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

    public categories: Category[];

    constructor(private catalogService: CatalogService, private router: Router) {
    }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.catalogService.getCategories().subscribe(
            categories => this.categories = categories,
            error => console.log(error)
        );
    }
}
