import { useEffect } from "react";
import ProductGrid from "../../components/Products/ProductGrid";
import { Box, Flex, Text } from "@chakra-ui/react";
import PageHeroSection from "components/Regular/PageHeroSection";
import { useProducts } from "features/product/hooks/useProducts";
import { useSearchParams } from "react-router-dom";

const ProductMainBody = () => {
    const { fetchProducts, productsByCategory, loading, totalCountByCategory } =
        useProducts();
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get("categories");
    const categoryKey = categoryParam || "all";
    const limit = 50;
    const offset = 0;

    useEffect(() => {
        fetchProducts({
            limit: limit,
            offset: offset,
            categories: categoryParam ? parseInt(categoryParam) : undefined,
        });
    }, [fetchProducts, categoryParam]);

    const products = productsByCategory[categoryKey] || [];

    return (
        <>
            <PageHeroSection
                pageTitle="Products"
                breadcrumbs={[{ title: "Home", to: "/" }]}
            />
            <Flex direction={{ base: "column", sm: "row" }}>
                <Text fontSize="14px" paddingY="12px">
                    {`Showing 1-${products.length} of ${
                        totalCountByCategory[categoryKey] || 0
                    } results`.toUpperCase()}
                </Text>
            </Flex>
            <ProductGrid
                products={products}
                loading={loading}
                onLoadMore={() =>
                    fetchProducts({
                        limit: limit,
                        offset: products.length,
                    })
                }
                hasMore={products.length < totalCountByCategory[categoryKey]}
            />
            <Box marginY="32px" />
        </>
    );
};

export default ProductMainBody;
