import {useState, useCallback } from 'react';

export const useHttp = () =>
{
    const [process, setProcess] = useState('waiting');
    const request = useCallback( async (url:any, method='POST', body:any, headers = {'Content-Type': 'application/json'}) =>
    {
        setProcess('loading')
        try
        {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok)
            {
                console.log(response.body)
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }
            
            const data = await response.json();
            console.log(data)
            return data;
        }
        catch(e)
        {
            throw e;
        }

    }, [])


    const clearError = useCallback(() =>
    {
        setProcess('loading')
    }, [])

    return{request, clearError, process, setProcess}
}