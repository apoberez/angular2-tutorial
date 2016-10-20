import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogModule} from "../catalog/catalog.module";
import {HeaderComponent} from "./components/header/header.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        CatalogModule,
        RouterModule.forChild([])
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
        CatalogComponent
    ]
})
export class CoreModule {
}
