import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogService} from "./catalog.service";
import {CatalogPageComponent} from "./catalog-page-component/catalog-page.component";
import {CatalogRoutingModule} from "./catalog-routing.module";

@NgModule({
    imports: [
        CommonModule,
        CatalogRoutingModule
    ],
    declarations: [
        CatalogPageComponent
    ],
    providers: [
        CatalogService
    ],
    exports: [
        CatalogPageComponent
    ]
})
export class CatalogModule {

}