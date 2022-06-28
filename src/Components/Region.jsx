import React, {useEffect, useState} from "react";
import axios from "axios";

const Region = () => {

    const [region, setRegion] = useState([])

    useEffect(() => {
        axios.get('http://54.146.158.0:7576/api/region')
        .then(res => {
            console.log(res.data);
            setRegion(res.data)
        }).catch(err => console.log(err))
    },[])

    return(
        <>
        </>
    );
}

export default Region;