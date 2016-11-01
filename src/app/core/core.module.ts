import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogModule} from "../catalog/catalog.module";
import {HeaderComponent} from "./components/header/header.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
    imports: [
        CommonModule,
        CatalogModule,
        RouterModule.forChild([])
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        CatalogComponent
    ]
})
export class CoreModule {
}
