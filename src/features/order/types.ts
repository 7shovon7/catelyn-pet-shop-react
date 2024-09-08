export interface OrderItemInput {
    product: number;
    quantity: number;
}

export interface OrderItem {
    id: number;
    quantity: number;
    selling_price_per_unit: number;
    title: string;
}

export interface Order {
    id: number;
    customer: number;
    title: string;
    address: number | null;
    total_price: number;
    promo_code: number | null;
    discounted_price: number | null;
    created_at: string;
    status: string;
    items: OrderItem[];
}
