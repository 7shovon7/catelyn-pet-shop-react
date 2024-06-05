export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
