export interface OrderItem {
    id: number;
    product: any; // Adjust according to your Product type
    quantity: number;
    price: number;
}

export interface OrderItemInput {
    product: number;
    quantity: number;
    price: number;
}

export interface Order {
    id: number;
    user: any; // Adjust according to your User type
    created_at: string;
    updated_at: string;
    status: string;
    total: number;
    items: OrderItem[];
}
