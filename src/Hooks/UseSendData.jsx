import React, { useState, useEffect, useMemo } from "react";

function useSendData(url, obj) {
    console.log(obj);
    const [newObj, setNewObj] = useState({});

    const myObject = useMemo(() => newObj, []);
    console.log(myObject)
    useEffect(() => {
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setNewObj(obj);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [myObject]);
    return newObj;


}
export default useSendData;