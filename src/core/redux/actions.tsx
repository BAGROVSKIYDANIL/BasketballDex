import {createAction} from "@reduxjs/toolkit"

export const openMenu = createAction<React.RefObject<HTMLElement>>('SET_DOM_NODE_REF');
// export const SetOverlay = createAction<React.RefObject<HTMLElement>>('SET_OVERLAY');
export const isLogin = createAction<boolean>('IS_LOGIN');
export const isOpen = createAction<boolean>('IS_OPEN');
export const activeTeam = createAction<boolean>('OPEN_TEAMS');
export const activePlayer = createAction<boolean>('OPEN_PLAYER');
export const getToken = createAction<string>('GET_TOKEN');
