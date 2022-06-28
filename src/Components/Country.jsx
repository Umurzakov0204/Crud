import React, {useEffect, useState} from "react";
import axios from 'axios';

const Country = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('http://54.146.158.0:7576/api/country')
        .then(res => {
            console.log(res.data)
            setCountries(res.data)
        }).catch(err => console.log(err))
    },[])

    return(
        <>
        </>
    );
}

export default Country;