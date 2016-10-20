import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./home/home-page-component/home-page.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomePageComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}