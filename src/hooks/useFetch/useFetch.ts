import { useState, useEffect } from 'react';
import { Request } from '../../services/api/helpers/request';

export const useFetch = <T>(url: string, defaultData: T, options: any = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [body, setBody] = useState(defaultData);

    const fetchFunction = async () => {
        
        setIsLoading(true);

        try {
            const response = await Request.get<T>(url, options);
            console.log(response);
            
            if (response.body)
                setBody(response.body);
            
        } catch (error) {
            console.log(`Error while fetching url ${url} :\n`, error);
        }

        setIsLoading(false);
    }

    const refresh = () => {
        fetchFunction()
    }

    useEffect(() => {
        fetchFunction()
    }, [url]);

    return {
        body,
        isLoading,
        refresh
    }
}