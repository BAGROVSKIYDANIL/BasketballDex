import { createAction } from "@reduxjs/toolkit"

export const uploadImage = createAction<string>('UPLOAD_IMAGE');