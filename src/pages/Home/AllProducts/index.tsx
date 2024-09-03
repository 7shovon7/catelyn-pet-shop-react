import { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import ProductGrid from "../../../components/Products/ProductGrid";
import { useProducts } from "features/product/hooks/useProducts";

const AllProducts = () => {
    const { productsByCategory, loading, totalCountByCategory, fetchProducts } =
        useProducts();
    const categoryKey = "all";
    const offset = 0;
    const limit = 10;

    useEffect(() => {
        fetchProducts({ limit, offset });
    }, [fetchProducts]);

    const products = productsByCategory[categoryKey] || {};

    return (
        <>
            <SectionHeader title="Furries Best Choice" to="/products" />
            <ProductGrid
                products={productsByCategory[categoryKey]}
                loading={loading}
                onLoadMore={() =>
                    fetchProducts({
                        limit,
                        offset: products.length,
                    })
                }
                hasMore={products.length < totalCountByCategory[categoryKey]}
            />
        </>
    );
};

export default AllProducts;
