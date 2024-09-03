import axios from "axios";
import { getCompleteUrl } from "utils/misc";
import {
    Category,
    ProductParameters,
    ProductResponse,
} from "features/product/types";

export const getCategoriesApi = async (): Promise<Category[]> => {
    const response = await axios.get<Category[]>(
        getCompleteUrl("/shop_settings/categories/")
    );
    return response.data;
};

export const getProductsApi = async (
    productParams: ProductParameters
): Promise<ProductResponse> => {
    const response = await axios.get<ProductResponse>(
        getCompleteUrl("/product/list/"),
        {
            params: productParams,
        }
    );
    return response.data;
};
