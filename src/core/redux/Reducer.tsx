import {createReducer} from "@reduxjs/toolkit";
import { SetOverlay, setDomNodeRef} from "./actions";

interface AppState
{
    domNodeRef: React.RefObject<any> | null;
    overlay: React.RefObject<any> | null;
}

const initialState: AppState = 
{
    domNodeRef: null,
    overlay:null,
};

const appReducer = createReducer(initialState, (builder) => 
{
    builder.addCase(setDomNodeRef, (state, action) => {
    state.domNodeRef = action.payload;
    });
    builder.addCase(SetOverlay, (state, action) =>
    {
        state.overlay = action.payload;
    })
});

export default appReducer;