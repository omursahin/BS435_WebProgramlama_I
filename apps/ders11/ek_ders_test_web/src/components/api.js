import React, {useEffect, useState} from 'react';

function Api({counter}) {
    const [data, setData] = useState(null);
    const url = "http://numbersapi.com/random/year?json";
    const handleFetchData = async () => {
        const response = await fetch(url);
        if(response.ok){
            const payload = await response.json();
            console.log(payload)
            setData(payload);
        }
    }
    useEffect( () => {
            handleFetchData();
        },
        [counter]);
    return (
        data ? <div>{data.text}</div> : <div>Yükleniyor...</div>
    );
}

export default Api;
