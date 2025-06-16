import { useEffect, useState } from "react";
import { api } from "@utils/axios";

export default function useFetch<T>() {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function handleFetch() {
        try {
            const response = await api({
                url: "/video",
                method: "get"
            });

            setData(response.data.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return { data, error,isLoading };
}