import {configureStore} from '@reduxjs/toolkit';
import appReducer from './Reducer';
import teamReducer from '../../modules/teams/reducer';
import auth from '../../modules/authorization/signIn/reducer';

const store = configureStore({
    reducer: {
        app: appReducer,
        team: teamReducer,
        auth: auth
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;