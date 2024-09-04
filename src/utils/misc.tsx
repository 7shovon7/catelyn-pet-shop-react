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

export const goToPageTop = () => {
    window.scrollTo(0, 0);
};

// export const generateProductKey = (
//     limit: number,
//     offset: number,
//     categories?: number
// ) => {
//     return `limit=${limit}&offset=${offset}&categories=${categories || "all"}`;
// };

export const truncateTitle = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;

    // Split the string into words
    const words = str.split(" ");

    // Build a truncated string word by word
    let truncated = "";

    for (let word of words) {
        if (truncated.length + word.length + 1 > maxLength) {
            break;
        }
        truncated += (truncated ? " " : "") + word;
    }

    return truncated + "...";
};
