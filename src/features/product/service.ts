import { getCategoriesApi } from "./api";

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
};
