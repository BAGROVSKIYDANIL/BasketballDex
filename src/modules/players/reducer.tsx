import { createReducer } from "@reduxjs/toolkit"
import {IPlayersState } from "./interfaces/interface"
import { uploadImagePlayer, selectTeam } from "./action"
import { getPlayerPosition, getTeams, getPlayerCard } from "./asyncAction"



const initialState: IPlayersState =
{
    imageUrl: '',
    arrPosition: [],
    arrTeams: [],
    arrPlayersCard: [],
    selectedTeam: []
}

const playersReducer = createReducer(initialState, (builder) =>
{
    builder.addCase(uploadImagePlayer, (state, action) =>
    {
        state.imageUrl = action.payload;
    });
    builder.addCase(getPlayerPosition.fulfilled, (state, action) =>
    {
        const arr = action.payload;
        state.arrPosition = arr.map((item:string) =>
        {
            return{
                value: item,
                label: item
            }
        })
    });
    builder.addCase(getTeams.fulfilled, (state, action) =>
    {
        const arr = action.payload;
        state.arrTeams = arr.map((item:any) =>
        {
            return{
                value: item.name,
                label: item.name,
                id: item.id
            }
        })
    })
    builder.addCase(getPlayerCard.fulfilled, (state, action) =>
    {
        state.arrPlayersCard = action.payload
    })
    builder.addCase(selectTeam, (state, action) =>
    {
        state.selectedTeam = action.payload;
    })
})

export default playersReducer