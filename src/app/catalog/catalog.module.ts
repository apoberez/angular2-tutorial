import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CategoryService} from "./category.service";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CategoryPageComponent} from "./category-page-component/category-page.component";
import {CategoryPageResolve} from "./category-page-component/category-page-resolve.service";

@NgModule({
    imports: [
        CommonModule,
        CatalogRoutingModule
    ],
    declarations: [
        CategoryPageComponent
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