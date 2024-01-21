import { createReducer } from "@reduxjs/toolkit";
import { loginUser } from "./asyncAction";

const initialState =
{
    isLogged: false,

}

const auth = createReducer(initialState, (builder) =>
{
    builder.addCase(loginUser.fulfilled, (state, action) =>
    {
        state.isLogged = true;
    })
    builder.addCase(loginUser.rejected, (state, action) =>
    {
        state.isLogged = false
    })

})

export default auth;