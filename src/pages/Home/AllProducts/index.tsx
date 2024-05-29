import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../../../components/Regular/ProductCard";
// import toysIcon from "../../../assets/categories/cat-toy.png";
import SectionHeader from "../SectionHeader";
import { useEffect, useState } from "react";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// types.d.ts or in the same file for simplicity
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
    category: {
        name: string;
    } | null;
}

export interface ProductResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
}

const AllProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/product/list/`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: ProductResponse = await response.json();
                setProducts(data.results);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <SectionHeader title="FURRIES BEST CHOICE" />
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, "2xl": 5 }}
                spacing={8}
                marginY={4}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        imageSrc={product.image}
                        price={product.price}
                        category={
                            product.category ? product.category.name : "Misc"
                        }
                    />
                ))}
            </SimpleGrid>
        </>
    );
};

export default AllProducts;
