export interface Category {
    id: number;
    title: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discounted_price: number;
    available_stock: number;
    custom_stock_out_signal: boolean | null;
    total_sold: number;
    size: number;
    size_unit: string;
    categories: Category[];
    image: string;
    created_at: string;
    updated_at: string;
}

export interface ProductResponse {
    count: number;
    next: null | string;
    previous: null | string;
    results: Product[];
}

export interface ProductParameters {
    limit?: number;
    offset?: number;
    categories?: number;
}

export interface CategoryState {
    categories: Category[];
    initiated: boolean;
    loading: boolean;
    // status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export interface ProductState {
    productsByCategory: {
        [categoryId: string]: Product[];
    };
    totalCountByCategory: {
        [categoryId: string]: number;
    };
    loading: boolean;
    error: string | null;
}
