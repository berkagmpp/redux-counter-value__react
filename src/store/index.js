import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice-reducer';
import authReducer from './auth-slice-reducer';

const store = configureStore({
    reducer: { 
        counter: counterReducer,      // if counterSlice exported counterSlice.reducer, do not need to write counterSlice.reducer here
        authentication: authReducer
    }   // merge all reducers for making a global main reducer 
});

export default store;