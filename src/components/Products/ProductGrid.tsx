import { Flex, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import CButton from "../Regular/CButton";
import { Product } from "features/product/types";

interface ProductGridProps {
    products: Product[];
    loading: boolean;
    onLoadMore: () => void;
    hasMore: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    loading,
    onLoadMore,
    hasMore,
}) => {
    return (
        <>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, "2xl": 5 }}
                spacing={8}
                marginY={4}
            >
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </SimpleGrid>
            {hasMore && (
                <Flex justifyContent="center" marginTop="32px">
                    <CButton onClick={onLoadMore} disabled={loading}>
                        {loading ? "Loading..." : "Load More"}
                    </CButton>
                </Flex>
            )}
        </>
    );
};

export default ProductGrid;
