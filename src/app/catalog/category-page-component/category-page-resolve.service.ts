import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

import {Category} from "../model/category";
import {CategoryService} from "../category.service";

@Injectable()
export class CategoryPageResolve implements Resolve<Category> {

    constructor(private cs: CategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category>|boolean {
        let slug = route.params["slug"];
        // todo not found case
        return this.cs.findBySlug(slug);
    }
}