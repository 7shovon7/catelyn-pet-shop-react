// src/types/index.ts
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
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
    category: string | null;
}
