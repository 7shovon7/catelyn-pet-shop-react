import axios from "axios";
import { getCompleteUrl } from "utils/misc";
import { Category } from "./types";

export const getCategoriesApi = async () => {
    const response = await axios.get<Category[]>(
        getCompleteUrl("/shop_settings/categories/")
    );
    return response.data;
};
