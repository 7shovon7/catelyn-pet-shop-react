import { getBlogsFromAPI } from "./api";
import { BlogAPIParameters } from "./types";

export const blogService = {
    async getBlogs(params: BlogAPIParameters = { limit: 20, offset: 0 }) {
        try {
            const blogResponse = await getBlogsFromAPI(params);
            return blogResponse;
        } catch (error) {
            throw new Error("Failed to fetch blogs");
        }
    },
};
