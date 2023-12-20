import { createAction } from "@reduxjs/toolkit"


export const uploadImagePlayer = createAction<string>('UPLOAD_IMAGE');
export const selectTeam = createAction<string[]>('SELECT_TEAM')
export const uploadPageIndex = createAction<{ startIndex: number, endIndex: number }>('UPLOAD_PAGE_INDEX')