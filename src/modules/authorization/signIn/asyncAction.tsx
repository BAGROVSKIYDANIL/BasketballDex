import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHttp } from "../hook/http";
interface ILoginData
{
    login: string;
    password: string;
}
const {request} = fetchHttp();
export const loginUser = createAsyncThunk('auht/login', async (data: ILoginData, {rejectWithValue}) => 
{
    try
    {
        const headers = {'Content-Type': 'application/json'}
        const user = await request('http://dev.trainee.dex-it.ru/api/Auth/SignIn', 'POST', JSON.stringify(data), headers);
        localStorage.setItem('token', user.token)
        localStorage.setItem('name', user.name)
        return user
    }
    catch(error:any)
    {
        if(error.response && error.response.data.message)
        {
            return rejectWithValue(error.response.data.message)
        }
        else
        {
            return rejectWithValue(error.message)
        }
    }
})