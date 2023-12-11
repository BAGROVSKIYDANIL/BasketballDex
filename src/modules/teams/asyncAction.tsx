import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchHttp } from "../authorization/hook/http"



const {request} = fetchHttp();

export const getTeamCard = createAsyncThunk('GET_TEAM_CARD', async (_, {getState}) =>
{
    try
    {
        const token = localStorage.getItem('token')
        const headers = {'Authorization': `Bearer ${token}`}
        const card = await request('http://dev.trainee.dex-it.ru/api/Team/GetTeams', 'GET', null, headers);
        return card.data
    }
    catch(error)
    {
       throw error
    }
})