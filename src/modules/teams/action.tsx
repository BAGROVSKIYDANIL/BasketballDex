import { createAction } from "@reduxjs/toolkit"

export const uploadImage = createAction<string>('UPLOAD_IMAGE');
export const uploadTeamPageIndex = createAction<{ startIndex: number, endIndex: number }>('UPLOAD_PAGE_INDEX')