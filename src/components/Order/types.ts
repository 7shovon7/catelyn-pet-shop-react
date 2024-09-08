interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    categories: string | null;
}

interface CartState {
    items: CartItem[];
}

export type { CartItem, CartState };
