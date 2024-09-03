import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { ProductParameters } from "../types";
import { getProducts } from "../slices/product";
import { useCallback } from "react";

export const useProducts = () => {
    const dispatch: AppDispatch = useDispatch();
    const { productsByCategory, loading, totalCountByCategory } = useSelector(
        (state: RootState) => state.product
    );

    const fetchProducts = useCallback(
        (params: ProductParameters) => {
            const { limit = 10, offset = 0, categories } = params;
            const categoryKey = categories?.toString() || "all";
            const totalFetched = productsByCategory[categoryKey]?.length || 0;
            const totalCount = totalCountByCategory[categoryKey] || 0;

            if (loading) {
                return;
            } else if (
                (totalFetched > 0 &&
                    totalFetched >= totalCount &&
                    totalCount > 0) ||
                totalFetched >= offset + limit
            ) {
                return;
            } else {
                // console.log("Fetching products from API...");
                dispatch(getProducts(params));
            }
        },
        [dispatch, productsByCategory, totalCountByCategory]
    );

    return { productsByCategory, loading, totalCountByCategory, fetchProducts };
};
