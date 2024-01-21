import {PayloadAction, createReducer } from "@reduxjs/toolkit";
import { TeamState } from "./interfaces/interface";
import { uploadImage, uploadTeamPageIndex} from "./action";
import { getTeamCard } from "./asyncAction";


const initialState: TeamState =
{
    imageUrl: '',
    teamArrCard: [],
    pageIndex:{
    startIndex: 0,
    endIndex: 0
    },
    paginateTeam:{
        count: null,
        page: null,
        size: null,
        data: []
    }
}

const teamReducer = createReducer(initialState, (builder) =>
{
    builder.addCase(uploadImage, (state, action) =>
    {
        state.imageUrl = action.payload
    })
    builder.addCase(getTeamCard.fulfilled, (state, action) =>
    {
        state.teamArrCard = action.payload.data
        state.paginateTeam = action.payload
    })
    builder.addCase(uploadTeamPageIndex, (state, action: PayloadAction<{ startIndex: number, endIndex: number }>) =>
    {
        state.pageIndex = action.payload
    })
})

export  default teamReducer