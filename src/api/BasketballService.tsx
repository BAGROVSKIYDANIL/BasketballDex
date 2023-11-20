import { useHttp } from "../common/hooks/http.hook";



const BasketballService = () =>
{
    const {request, clearError, process, setProcess} = useHttp();

    // const _apiBase = 'http://dev.trainee.dex-it.ru/';
    // const _apiKey = '/api/Auth/SignUp'


    // const getResource = async (url:any) =>
    // {
    //     let res = await fetch(url);

    //     if(!res.ok)
    //     {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    //     }
    //     return await res.json();
    // }
    // const getUser = () =>
    // {
    //     return getResource('http://dev.trainee.dex-it.ru/api/Auth/SignUp');
    // }
    // getUser().then(res => console.log(res));
}

export default BasketballService;