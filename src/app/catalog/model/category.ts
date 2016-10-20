export class Category {
    private _title: string;

    private _parent: Category;

    private _children: Category[];
    private _image: string;
    private _slug: string;
    constructor(title: string, parent: Category, children: Category[], image: string, slug: string) {
        this._title = title;
        this._parent = parent;
        this._children = children;
        this._image = image;
        this._slug = slug;
    }

    get title(): string {
        return this._title;
    }

    get slug(): string {
        return this._slug;
    }

    get parent(): Category {
        return this._parent;
    }

    get children(): Category[] {
        return this._children;
    }

    get image(): string {
        return this._image;
    }
}
