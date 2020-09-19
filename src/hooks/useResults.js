import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get(`/search?entiy_id=4&entity_type=city&q=${searchTerm}`);
            setResults(response.data.restaurants);
        }catch(err) {
            setErrorMessage('Something went Wrong');
        }
    }

    useEffect(() => {
        searchApi('chinese')
    }, [])
    return [searchApi, results, errorMessage];

}