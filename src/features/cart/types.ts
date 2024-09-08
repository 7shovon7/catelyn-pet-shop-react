export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    categories: string | null;
}

export interface CartState {
    items: CartItem[];
}
