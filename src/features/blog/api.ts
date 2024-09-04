import axios from "axios";
import { BlogAPIParameters, BlogPostResponse } from "./types";
import { getCompleteUrl } from "utils/misc";

export const getBlogsFromAPI = async (
    params: BlogAPIParameters
): Promise<BlogPostResponse> => {
    const response = await axios.get(getCompleteUrl("/blog/posts/"), {
        params: params,
    });
    return response.data;
};
