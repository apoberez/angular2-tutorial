import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CategoryService} from "./category.service";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CategoryPageComponent} from "./component/category-page/category-page.component";
import {CategoryPageResolve} from "./component/category-page/category-page-resolve.service";
import {ProductGridComponent} from "./component/product-grid/product-grid.component";
import {ProductListComponent} from "./component/product-list/product-list.component";

@NgModule({
    imports: [
        CommonModule,
        CatalogRoutingModule
    ],
    declarations: [
        CategoryPageComponent,
        ProductGridComponent,
        ProductListComponent
    ],
    providers: [
        CategoryService,
        CategoryPageResolve
    ],
    exports: [
        CategoryPageComponent
    ]
})
export class CatalogModule {

}
