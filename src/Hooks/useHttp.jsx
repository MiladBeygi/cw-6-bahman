import React, { useEffect, useState, useCallback } from "react";
function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (requestConfig, applyData) => {

        setIsLoading(true);
        setError(null);
        // console.log(requestConfig);
        // console.log(applyData);
        fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET', // or 'PUT'
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null,
        })
            .then((response) => response.json())
            .then((data) => {
                applyData(data);
                // console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // try {
        // const response = await fetch(
        //     requestConfig.url, {
        //     method: requestConfig.method ? requestConfig.method : 'GET',
        //     headers: requestConfig.headers ? requestConfig.headers : {},
        //     body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null,
        // }
        // );

        // if (!response.ok) {
        //     throw new Error('Request failed!');
        // }

        //     const data = await response.json();

        //     applyData(data);
        // } catch (err) {
        //     setError(err.message || 'Something went wrong!');
        // }
        setIsLoading(false);
    }, []);
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
};
export default useHttp;