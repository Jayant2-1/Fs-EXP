import React, { useState, useEffect } from 'react'

const FetchApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Fetched API Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                data && (
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default FetchApi