import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Category} from "./model/category";
import {Injectable} from "@angular/core";

@Injectable()
export class CategoryService {

    constructor(private http: Http) {
    }

    public findAll(): Observable<Category[]> {
        return this.http.get('/api/categories').map(CategoryService.extractData);
    }

    public findBySlug(slug: string): Observable<Category> {
        return this.findAll().map((categories: Category[]) => {
            for (let category of categories) {
                if (category.slug === slug) {
                    return category;
                }
            }
            return null;
        });
    }

    private static extractData(res: Response) {
        let categories: Category[] = [];

        let body = res.json();
        for (let item of body.data) {
            categories.push(Category.createFromApiData(item));
        }
        return categories;
    }
}
