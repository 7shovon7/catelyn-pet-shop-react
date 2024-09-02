const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const BASE_APP_URL = window.location.origin;

export const getCompleteUrl = (
    endpoint: string,
    is_api: boolean = true
): string => {
    if (is_api) {
        return `${BASE_API_URL}${endpoint}`;
    } else {
        return `${BASE_APP_URL}${endpoint}`;
    }
};

export const checkAndGetCompleteUrl = (
    endpoint: string,
    is_api: boolean = true
): string => {
    if (endpoint.startsWith("/")) {
        return getCompleteUrl(endpoint, is_api);
    } else {
        return endpoint;
    }
};

export const extractFirstImageUrl = (content: string): string | null => {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const matches = [...content.matchAll(imageRegex)];
    if (matches.length > 0) {
        return checkAndGetCompleteUrl(matches[0][1], true);
    }
    return null;
};

export const generateProductKey = (
    limit: number,
    offset: number,
    categories?: number
) => {
    return `limit=${limit}&offset=${offset}&categories=${categories || "all"}`;
};
