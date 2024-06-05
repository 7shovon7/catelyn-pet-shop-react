const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const getCompleteUrl = (endpoint: string): string => {
    return `${BASE_API_URL}${endpoint}`;
};

export const checkAndGetCompleteUrl = (endpoint: string): string => {
    if (endpoint.startsWith("/")) {
        return getCompleteUrl(endpoint);
    } else {
        return endpoint;
    }
};

export const extractFirstImageUrl = (content: string): string | null => {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const matches = [...content.matchAll(imageRegex)];
    if (matches.length > 0) {
        return checkAndGetCompleteUrl(matches[0][1]);
    }
    return null;
};
