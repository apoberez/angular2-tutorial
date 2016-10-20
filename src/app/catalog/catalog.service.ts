import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Category} from "./model/category";
import {Injectable} from "@angular/core";

@Injectable()
export class CatalogService {

    constructor(private http: Http) {
    }

    public getCategories(): Observable<Category[]> {
        return this.http.get('/api/categories.json').map(CatalogService.extractData);

    }

    public static extractData(res: Response) {
        let categories: Category[] = [];
        let body = res.json();
        for (let category of body.data) {
            categories.push(new Category(category.title, null, [], category.image, category.slug));
        }
        return categories;
    }
}