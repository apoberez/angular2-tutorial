import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

import {Category} from "../../model/category";
import {CategoryService} from "../../category.service";
import {CategoryPage} from "../../model/category.page";

@Injectable()
export class CategoryPageResolve implements Resolve<Category> {

    constructor(private cs: CategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoryPage> {
        let slug = route.params["slug"];
        return this.cs.getPageData(slug);
    }
}