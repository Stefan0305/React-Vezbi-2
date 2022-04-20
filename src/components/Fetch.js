import React, {useEffect, useState} from "react";
import axios from 'axios';

function Fetch(){

    const [data, setData]= useState([]);

    useEffect(() => {
        axios("https://api.github.com/users")
        .then(response => {
            setData(response.data);
        })
    }, [])

    console.log(data)

    return <div></div>
}

export default Fetch;