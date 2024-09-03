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
    const totalFetched = Object.values(
        productsByCategory[categoryKey] || {}
    ).flat().length;

    useEffect(() => {
        if (totalFetched < 50) {
            fetchProducts({
                limit: limit - totalFetched,
                offset: totalFetched,
                categories: categoryParam ? parseInt(categoryParam) : undefined,
            });
        }
    }, [fetchProducts, categoryParam, totalFetched]);

    const allProducts = productsByCategory[categoryKey] || {};

    return (
        <>
            <PageHeroSection
                pageTitle="Products"
                breadcrumbs={[{ title: "Home", to: "/" }]}
            />
            <Flex direction={{ base: "column", sm: "row" }}>
                <Text fontSize="14px" paddingY="12px">
                    {`Showing 1-${totalFetched} of ${
                        totalCountByCategory[categoryKey] || 0
                    } results`.toUpperCase()}
                </Text>
            </Flex>
            <ProductGrid
                products={Object.values(allProducts).flat()}
                loading={loading}
                onLoadMore={() =>
                    fetchProducts({
                        limit: limit - totalFetched,
                        offset: totalFetched,
                    })
                }
                hasMore={
                    totalFetched < (totalCountByCategory[categoryKey] || 0)
                }
            />
            <Box marginY="32px" />
        </>
    );
};

export default ProductMainBody;
