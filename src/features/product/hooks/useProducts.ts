import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { ProductParameters } from "../types";
import { getProducts } from "../slices/product";
import { useCallback } from "react";
import { generateProductKey } from "utils/misc";

export const useProducts = () => {
    const dispatch: AppDispatch = useDispatch();
    const { products, loading, totalCount } = useSelector(
        (state: RootState) => state.product
    );

    const fetchProducts = useCallback(
        (params: ProductParameters) => {
            const { limit, offset, categories } = params;
            const key = generateProductKey(limit!, offset!, categories);

            if (products[key] && products[key].length >= limit!) {
                // Already enough data in state
                return;
            }
            dispatch(getProducts(params));
        },
        [dispatch, products]
    );

    return { products, loading, totalCount, fetchProducts };
};
