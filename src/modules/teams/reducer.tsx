import {createReducer } from "@reduxjs/toolkit";
import { IArrTeamCard } from "./interfaces/interface";
import { uploadImage} from "./action";
import { getTeamCard } from "./asyncAction";

export interface TeamState
{
    imageUrl: string;
    arrCard: IArrTeamCard[]
}

const initialState: TeamState =
{
    imageUrl: '',
    arrCard: []
}

const teamReducer = createReducer(initialState, (builder) =>
{
    builder.addCase(uploadImage, (state, action) =>
    {
        state.imageUrl = action.payload
    })
    builder.addCase(getTeamCard.fulfilled, (state, action) =>
    {
        state.arrCard = action.payload
    })
})

export  default teamReducer