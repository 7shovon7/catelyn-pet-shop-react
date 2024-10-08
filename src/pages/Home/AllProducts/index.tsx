import { useEffect } from "react";
import ProductGrid from "components/Products/ProductGrid";
import { useProducts } from "features/product/hooks/useProducts";
import SectionWrapper from "components/Regular/SectionWrapper";

const AllProducts = () => {
    const { productsByCategory, loading, totalCountByCategory, fetchProducts } =
        useProducts();
    const categoryKey = "all";
    const offset = 0;
    const limit = 10;

    useEffect(() => {
        fetchProducts({ limit, offset, categories: undefined });
    }, [fetchProducts]);

    const products = productsByCategory[categoryKey]
        ? productsByCategory[categoryKey].length >= limit
            ? productsByCategory[categoryKey].slice(offset, limit)
            : productsByCategory[categoryKey].slice(
                  offset,
                  totalCountByCategory[categoryKey]
              )
        : [];

    return (
        <SectionWrapper title="Furries Best Choice" to="/products">
            <ProductGrid
                products={products}
                loading={loading}
                onLoadMore={() =>
                    fetchProducts({
                        limit,
                        offset: offset,
                    })
                }
                hasMore={false}
            />
        </SectionWrapper>
    );
};

export default AllProducts;
