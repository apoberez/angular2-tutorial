import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {CategoryPageComponent} from "./category-page-component/category-page.component";
import {CategoryPageResolve} from "./category-page-component/category-page-resolve.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'categories/:slug',
                component: CategoryPageComponent,
                resolve: {
                    category: CategoryPageResolve
                }
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CatalogRoutingModule {
}