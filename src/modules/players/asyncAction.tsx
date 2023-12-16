import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHttp } from "../authorization/hook/http";

const {request} = fetchHttp();

export const getPlayerPosition = createAsyncThunk('GET_PLAYER_POSITION', async() =>
{
    try
    {
        const token = localStorage.getItem('token');
        const headers = {'Authorization': `Bearer ${token}`};
        const positon = await request('http://dev.trainee.dex-it.ru/api/Player/GetPositions', 'GET', null, headers)
        return positon
    }
    catch(error)
    {
        throw error
    }
})
export const getTeams = createAsyncThunk('GET_TEAM_CARD', async (_, {getState}) =>
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
export const getPlayerCard = createAsyncThunk('GET_PLAYER_CARD', async () =>
{
    const token = localStorage.getItem('token');
    const headers = {'Authorization': `Bearer ${token}`};    
    const playerCard = await request('http://dev.trainee.dex-it.ru/api/Player/GetPlayers', 'GET', null, headers)
    return playerCard.data
})