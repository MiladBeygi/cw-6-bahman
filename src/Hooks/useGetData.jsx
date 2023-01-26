import React, { useEffect, useState } from "react";
function useGetData(url) {
    const [myDatas, setMyDatas] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyDatas(data));
    }, []);
    return myDatas;
}
export default useGetData;