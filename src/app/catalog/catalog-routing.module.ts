import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {CategoryPageComponent} from "./component/category-page/category-page.component";
import {CategoryPageResolve} from "./component/category-page/category-page-resolve.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'categories/:slug',
                component: CategoryPageComponent,
                resolve: {
                    categoryPageData: CategoryPageResolve
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