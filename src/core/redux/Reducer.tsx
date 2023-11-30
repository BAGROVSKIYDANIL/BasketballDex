import {createReducer} from "@reduxjs/toolkit";
import {isLogin,openMenu, isOpen, activeTeam, activePlayer, getToken} from "./actions";

interface AppState
{
    menu: React.RefObject<any> | null;
    isLogged: boolean;
    open: boolean;
    activeTeams: boolean;
    activePlayers: boolean;
    token: string  | null;
}

const initialState: AppState = 
{
    isLogged: false,
    menu: null,
    open: false,
    activeTeams: false,
    activePlayers: false,
    token: null
};

const appReducer = createReducer(initialState, (builder) => 
{

    builder.addCase(isLogin, (state, action) =>
    {
        state.isLogged = true;
        console.log('login', state.isLogged)
    })
    builder.addCase(isOpen, (state, action) =>
    {
        state.open = action.payload
    })
    builder.addCase(openMenu, (state, action) =>
    {
        state.menu = action.payload;
    })
    builder.addCase(activeTeam, (state, action) =>
    {
        state.activeTeams = action.payload;
    })
    builder.addCase(activePlayer, (state, action) =>
    {
        state.activePlayers = action.payload;
    })
    builder.addCase(getToken, (state, action) =>
    {
        state.token = action.payload
    })
});


export default appReducer;