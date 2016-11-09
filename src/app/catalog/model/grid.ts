export class Column {
    public title: string;
    public valuePath: string;

    public resolveValue(resource: any) {
        
    }
}

export class Filter {

}

export class Grid {
    public columns: Column[] = [];
    public filters: Filter[] = [];
}
