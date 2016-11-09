import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Category} from "./model/category";
import {CategoryPage} from "./model/category.page";
import {Product} from "./model/product";

@Injectable()
export class CategoryService {

    constructor(private http: Http) {
    }

    public findAll(): Observable<Category[]> {
        return this.http.get('/api/categories').map(CategoryService.extractData);
    }

    public getPageData(slug: string): Observable<CategoryPage> {
        var categoryPage = new CategoryPage();
        categoryPage.category = new Category(
            "1234", "test", null, [], "", "slug"
        );
        categoryPage.products = [
            new Product(
                "123123",
                "AMD FX-8320",
                (new Map()).set("cores", 8).set("rating", 4),
                "AMD"
            ), new Product(
                "123164",
                "Intel i7",
                (new Map()).set("cores", 4).set("rating", 4),
                "Intel"
            )
        ];
        return Observable.of(categoryPage);
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
