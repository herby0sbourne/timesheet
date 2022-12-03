import React, { useEffect, useState } from "react";

const useFetchData = (url: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState<any>();

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log(error);
                // @ts-ignore
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    return { isLoading, data };
};

export default useFetchData;
