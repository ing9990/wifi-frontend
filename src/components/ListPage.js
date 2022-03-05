import React, {useEffect, useState} from 'react';
import axios from "axios";


const ListPage = () => {

    const [data, setData] = useState([{
        "id": 0,
        "wifi_name": "",
        "wifi_password": "",
        "wifi_address": ""
    }])

    useEffect(() => {
        return () => {
            {axios.get("http://localhost:8080/api/wifi")
                .then((res) =>{
                    setData(res.data)
                })}
        };
    }, data);



    return (
        <div>
            {data.map((datas) =>{
                return <li className="libox">  {datas.wifi_name} | {datas.wifi_password} | {datas.wifi_address}</li>
            })}
        </div>
    );
};

export default ListPage;
