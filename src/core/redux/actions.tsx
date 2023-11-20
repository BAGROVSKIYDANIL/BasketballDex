import {createAction, createAsyncThunk} from "@reduxjs/toolkit"

export const openMenu = createAction<React.RefObject<HTMLElement>>('SET_DOM_NODE_REF');
// export const SetOverlay = createAction<React.RefObject<HTMLElement>>('SET_OVERLAY');
export const isLogin = createAction<boolean>('IS_LOGIN');
export const setName = createAction<string>('SET_NAME')
export const isOpen = createAction<boolean>('IS_OPEN');


// export const loginUser = createAsyncThunk('USER_LOGING',
//     async (userData: {login: string; password: string}) =>
//     {
//         try
//         {
//             const response = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn',
//             {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify(userData)
//             });


//             if(response.ok)
//             {
//                 const data = await response.json();
//                 console.log('Авторизация прошла успешно', data );
//                 return data;
//             }else
//             {
//                 console.log('Ошибка при авторизации');
//                 console.log(response)
//                 throw new Error('Ошибка при авторизации')
//             }
//         }

//         catch (error)
//         {
//             console.error('Произошла ошибка', error);
//             throw error;
//         }
//     })