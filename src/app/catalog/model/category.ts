export class Category {
    private _title: string;
    private _parent: Category;
    private _children: Category[];
    private _image: string;
    private _slug: string;
    private _uid: string;

    constructor(uid: string, title: string, parent: Category, children: Category[], image: string, slug: string) {
        this._uid = uid;
        this._title = title;
        this._parent = parent;
        this._children = children;
        this._image = image;
        this._slug = slug;
    }

    // todo: remove any type
    public static createFromApiData(data: any): Category {
        return new Category(
            data.id,
            data.attributes.title,
            null,
            [],
            data.attributes.image,
            data.attributes.slug
        )
    }

    public get uid(): string {
        return this._uid;
    }

    public get title(): string {
        return this._title;
    }

    public get slug(): string {
        return this._slug;
    }

    public get parent(): Category {
        return this._parent;
    }

    public get children(): Category[] {
        return this._children;
    }

    public get image(): string {
        return this._image;
    }
}
