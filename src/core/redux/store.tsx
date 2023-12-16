import {configureStore} from '@reduxjs/toolkit';
import appReducer from './Reducer';
import teamReducer from '../../modules/teams/reducer';
import playersReducer from '../../modules/players/reducer';
import auth from '../../modules/authorization/signIn/reducer';

const store = configureStore({
    reducer: {
        app: appReducer,
        team: teamReducer,
        auth: auth,
        players: playersReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;