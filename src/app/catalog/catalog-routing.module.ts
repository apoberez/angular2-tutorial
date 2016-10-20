import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatalogPageComponent} from "./catalog-page-component/catalog-page.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'categories/:name', component: CatalogPageComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CatalogRoutingModule {
}