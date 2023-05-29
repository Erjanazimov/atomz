

export interface Coffee {
    id: number;
    image: string;
    header: string;
    description: string;
    created_date: string;
    updated_date: string;
    type_coffee: number;
}

export interface TypesState {
    news: {
        count: number,
        next: null | string,
        previous: null | string,
        results: Coffee[];
    },
    info: {
        loading: boolean,
        errors: any,
        results: Coffee | null
    }
    loading: boolean,
    errors: any
}