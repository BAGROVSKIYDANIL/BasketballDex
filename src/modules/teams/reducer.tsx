import {createReducer } from "@reduxjs/toolkit";
import { uploadImage } from "./action";

interface TeamState
{
    imageUrl: string | null;
}

const initialState: TeamState =
{
    imageUrl: null
}

const teamReducer = createReducer(initialState, (builder) =>
{
    builder.addCase(uploadImage, (state, action) =>
    {
        state.imageUrl = action.payload
    })
})

export  default teamReducer