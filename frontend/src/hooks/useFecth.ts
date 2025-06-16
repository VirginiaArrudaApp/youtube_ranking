import { useEffect, useState } from "react";
import { api } from "@utils/axios";

interface UseFetchProps {
    url: string,
}

export default function useFetch<T>({ url }: UseFetchProps) {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

        function prev() {
        if(page > 1) setPage(prev => prev - 1);
    }
    
    function next() {
        setPage(prev => prev + 1);
    }

    function reset() {
        setPage(1);
    }

    async function handleFetch() {
        try {
            const response = await api({
                url: `${url}?page=${page}`,
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
    }, [url, page]);

    return { data, error,isLoading, prev, next, reset, page };
}