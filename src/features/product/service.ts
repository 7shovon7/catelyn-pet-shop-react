import { getCategoriesApi, getProductsApi } from "./api";
import { ProductParameters } from "./types";

export const productService = {
    // Categories
    async getCategories() {
        try {
            const categories = await getCategoriesApi();
            return categories;
        } catch (error) {
            throw new Error("Categories not found");
        }
    },

    // Products
    async getProducts(
        productParams: ProductParameters = { limit: 20, offset: 0 }
    ) {
        try {
            const productResponse = await getProductsApi(productParams);
            return productResponse;
        } catch (error) {
            throw new Error("Failed to fetch products");
        }
    },
};
