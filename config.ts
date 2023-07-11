const getBaseUrl = (): string => {
    console.log(import.meta.env.MODE)
    console.log(JSON.stringify(import.meta.env))
    if (import.meta.env.MODE === "development") {
        console.log(import.meta.env.VITE_DEV_BASE)
        return import.meta.env.VITE_DEV_BASE as string;
    } else if (import.meta.env.MODE === "uat") {
        return import.meta.env.VITE_DEV_BASE as string;
    } else if (import.meta.env.MODE === "production") {
        return import.meta.env.VITE_DEV_BASE as string;
    }

    // Default to development environment if MODE is not set
    return import.meta.env.VITE_DEV_BASE  as string;

};

export const API_BASE_URL = getBaseUrl();

