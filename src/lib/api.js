const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";
export const apiFetch = async (endpoint) => {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) {
            throw new Error(`API Error: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
};