export const fetchHttp = () =>
{
    const request = async(url:any, method='POST', body:any, headers={}) =>
    {
        try
        {
            const response = await fetch(url, {method, body, headers})
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
    }
    return{request}
}