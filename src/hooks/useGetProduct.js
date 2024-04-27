import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useGetProduct(api) {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const productData = await axios.get(api);
                setDataList(productData.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [api]);

    return { dataList, loading, error };
}

export default useGetProduct;
