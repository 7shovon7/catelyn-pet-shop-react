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
    total_sold: number;
    size: number;
    size_unit: string;
    categories: Category[];
    image: string;
    created_at: string;
    updated_at: string;
}

export interface CategoryState {
    categories: Category[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
