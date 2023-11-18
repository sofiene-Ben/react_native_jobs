import { useState, useEffect } from "react";
// import { axios } from "axios";
import axios from 'axios';
// import { RAPID_API_KEY } from '/Users/sofiene/Documents/react_native/react_native_jobs/.env';
import { useFonts } from "expo-font";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': 'eaf49ee418mshec9bc9291c767c5p168cfcjsn356f28d28413',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
    };

    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('there is an error');
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };

}

export default useFetch;

