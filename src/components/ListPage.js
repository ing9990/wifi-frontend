import React, {useEffect, useState} from 'react';
import axios from "axios";

const ListPage = () => {

    const [data, setData] = useState([{
        "id": 0,
        "wifi_name": "",
        "wifi_password": "",
        "wifi_address": ""
    }])

    function handleOnclick(){
        {axios.get("http://localhost:8080")
            .then((res) =>{
                setData(res.data)
                console.log(data)
            })}
    }


    return (
        <div>
            <button onClick={handleOnclick}>Click Here</button>
        </div>
    );
};

export default ListPage;
