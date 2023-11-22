import {createReducer} from "@reduxjs/toolkit";
import {isLogin, setName, openMenu, isOpen, activeTeam, activePlayer} from "./actions";

interface AppState
{
    menu: React.RefObject<any> | null;
    isLogged: boolean;
    name: string;
    open: boolean;
    activeTeams: boolean;
    activePlayers: boolean;
}

const initialState: AppState = 
{
    isLogged: false,
    name: '',
    menu: null,
    open: false,
    activeTeams: false,
    activePlayers: false
};

const appReducer = createReducer(initialState, (builder) => 
{

    builder.addCase(isLogin, (state, action) =>
    {
        state.isLogged = true;
        console.log('login', state.isLogged)
    })
    builder.addCase(setName, (state, action) =>
    {
        state.name = action.payload;

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
});


export default appReducer;