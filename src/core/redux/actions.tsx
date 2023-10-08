import {createAction} from "@reduxjs/toolkit"

export const setDomNodeRef = createAction<React.RefObject<HTMLElement>>('SET_DOM_NODE_REF');
export const SetOverlay = createAction<React.RefObject<HTMLElement>>('SET_OVERLAY');