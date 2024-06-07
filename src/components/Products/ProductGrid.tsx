import { Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import CButton from "../Regular/CButton";
import { getCompleteUrl } from "utils/misc";
import { Link, useLocation } from "react-router-dom";
import { Product } from "misc/types";

export interface ProductResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
}

export interface ProductResponseUI {
    count: number;
    resultsLength: number;
}

interface AllProductsProps {
    limit?: number;
    onDataFetched?: (data: ProductResponseUI) => void;
    pagination?: boolean;
}

const ProductGrid: React.FC<AllProductsProps> = ({
    limit = 10,
    onDataFetched,
    pagination = false,
}: AllProductsProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number | null>(null);
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const offset = pagination ? (page - 1) * limit : 0;
                const params = new URLSearchParams(location.search);
                const category = params.get("category");
                const categoryFilter = category ? `&category=${category}` : "";
                const response = await fetch(
                    getCompleteUrl(
                        `/product/list/?limit=${limit}&offset=${offset}${categoryFilter}`
                    )
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: ProductResponse = await response.json();
                setProducts(data.results);
                setCount(data.count);
                if (onDataFetched) {
                    onDataFetched({
                        count: data.count,
                        resultsLength: data.results.length,
                    });
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [limit, page, onDataFetched, pagination]);

    const totalPages = count ? Math.ceil(count / limit) : 1;

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, "2xl": 5 }}
                spacing={8}
                marginY={4}
            >
                {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </SimpleGrid>
            {pagination && (
                <Flex justifyContent="center" marginTop="32px">
                    <HStack spacing={4}>
                        <CButton
                            onClick={handlePreviousPage}
                            disabled={page == 1}
                        >
                            Previous
                        </CButton>
                        <Text>{page}</Text>
                        <CButton
                            onClick={handleNextPage}
                            disabled={page == totalPages}
                        >
                            Next
                        </CButton>
                    </HStack>
                </Flex>
            )}
        </>
    );
};

export default ProductGrid;
